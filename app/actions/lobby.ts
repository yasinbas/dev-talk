"use server";

import { revalidatePath } from "next/cache";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { pusherServer } from "@/lib/pusher";

export async function createLobby(topic: string, maxParticipants: number) {
    const user = await currentUser();

    if (!user) {
        throw new Error("Unauthorized");
    }

    // Ensure user exists in DB
    let dbUser = await db.user.findUnique({ where: { clerkId: user.id } });
    if (!dbUser) {
        // Fallback sync - though syncUser should handle this normally
        dbUser = await db.user.create({
            data: {
                clerkId: user.id,
                email: user.emailAddresses[0].emailAddress,
                imageUrl: user.imageUrl,
            }
        });
    }

    const lobby = await db.lobby.create({
        data: {
            topic,
            title: topic, // Using topic as title for now
            maxParticipants,
            ownerId: dbUser!.id,
            status: "WAITING",
        },
    });

    revalidatePath("/lobbies");
    return lobby;
}

export async function joinLobby(lobbyId: string) {
    const user = await currentUser();

    if (!user) {
        throw new Error("Unauthorized");
    }

    const dbUser = await db.user.findUnique({ where: { clerkId: user.id } });
    if (!dbUser) throw new Error("User not found");

    // Check if lobby exists and is not full
    const lobby = await db.lobby.findUnique({
        where: { id: lobbyId },
        include: { participants: true }
    });

    if (!lobby) throw new Error("Lobby not found");
    if (lobby.participants.length >= lobby.maxParticipants) {
        throw new Error("Lobby is full");
    }

    // Add participant
    await db.lobbyParticipant.create({
        data: {
            lobbyId,
            userId: dbUser.id,
            role: "LISTENER"
        }
    });

    // Trigger real-time update
    await pusherServer.trigger(`lobby-${lobbyId}`, "participant-joined", {
        userId: dbUser.id,
        name: user.firstName,
        imageUrl: user.imageUrl
    });

    revalidatePath(`/lobbies/${lobbyId}`);
}
