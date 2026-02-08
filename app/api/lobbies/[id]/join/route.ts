import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { pusherServer } from "@/lib/pusher";

import { getOrCreateUser } from "@/lib/auth-utils";

export async function POST(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const user = await currentUser();
        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { id: lobbyId } = await params;

        // Get user from DB
        const dbUser = await getOrCreateUser(user);

        // Check if already participant
        const existingParticipant = await db.lobbyParticipant.findUnique({
            where: {
                lobbyId_userId: {
                    lobbyId,
                    userId: dbUser.id
                }
            }
        });

        if (!existingParticipant) {
            // Add participant to DB
            await db.lobbyParticipant.create({
                data: {
                    lobbyId,
                    userId: dbUser.id,
                    role: "LISTENER"
                }
            });

            // Trigger Pusher event
            await pusherServer.trigger(`lobby-${lobbyId}`, "participant-joined", {
                id: dbUser.id,
                firstName: dbUser.firstName,
                imageUrl: dbUser.imageUrl
            });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Failed to join lobby:", error);
        return NextResponse.json({ error: "Internal Error" }, { status: 500 });
    }
}
