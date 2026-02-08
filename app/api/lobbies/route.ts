import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { canCreateLobby, LOBBY_CREATE_THRESHOLD } from "@/lib/permissions";
import { awardPoints } from "@/lib/points";
import Pusher from "pusher";

const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID!,
    key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
    secret: process.env.PUSHER_SECRET!,
    cluster: "eu",
    useTLS: true,
});

export async function POST(req: Request) {
    try {
        const user = await currentUser();
        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { title, topic, maxParticipants } = await req.json();

        if (!title || !topic) {
            return NextResponse.json(
                { error: "Title and topic are required" },
                { status: 400 }
            );
        }

        // Get or create user
        let dbUser = await db.user.findUnique({ where: { clerkId: user.id } });
        if (!dbUser) {
            dbUser = await db.user.create({
                data: {
                    clerkId: user.id,
                    email: user.emailAddresses[0].emailAddress,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    imageUrl: user.imageUrl,
                },
            });
        }

        // Check permission (100 points required)
        const hasPermission = await canCreateLobby(dbUser.id);
        if (!hasPermission) {
            return NextResponse.json(
                {
                    error: `You need at least ${LOBBY_CREATE_THRESHOLD} points to create a lobby. Read articles to earn points!`,
                    currentPoints: dbUser.points,
                    required: LOBBY_CREATE_THRESHOLD
                },
                { status: 403 }
            );
        }

        // Create lobby
        const lobby = await db.lobby.create({
            data: {
                title,
                topic,
                ownerId: dbUser.id,
                maxParticipants: maxParticipants || 10,
                participants: {
                    create: {
                        userId: dbUser.id,
                        role: "HOST",
                    },
                },
            },
            include: {
                owner: {
                    select: { firstName: true, lastName: true, imageUrl: true }
                },
                participants: true,
            },
        });

        // Award points for hosting
        await awardPoints(dbUser.id, "LOBBY_HOSTED", { lobbyId: lobby.id });

        // Broadcast to all users via Pusher
        await pusher.trigger("lobbies", "lobby-created", {
            lobby: {
                id: lobby.id,
                title: lobby.title,
                topic: lobby.topic,
                status: lobby.status,
                maxParticipants: lobby.maxParticipants,
                createdAt: lobby.createdAt,
                owner: lobby.owner,
                participantCount: lobby.participants.length,
            },
        });

        return NextResponse.json(lobby);
    } catch (error) {
        console.error("Failed to create lobby:", error);
        return NextResponse.json({ error: "Failed to create lobby" }, { status: 500 });
    }
}
