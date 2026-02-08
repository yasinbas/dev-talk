import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import LobbyRoom from "./_components/LobbyRoom";
import { currentUser } from "@clerk/nextjs/server";

interface Props {
    params: {
        id: string;
    };
}

export default async function LobbyPage({ params }: Props) {
    const user = await currentUser();
    if (!user) return <div>Please sign in to join lobbies.</div>;

    const lobby = await db.lobby.findUnique({
        where: { id: params.id },
        include: {
            participants: {
                include: { user: true }
            },
            owner: true
        }
    });

    if (!lobby) return notFound();

    return (
        <div className="container py-6">
            <div className="mb-6">
                <h1 className="text-3xl font-bold">{lobby.topic}</h1>
                <p className="text-muted-foreground">Hosted by {lobby.owner.firstName}</p>
            </div>

            <LobbyRoom
                lobbyId={lobby.id}
                initialParticipants={lobby.participants}
                currentUserId={user.id}
            />
        </div>
    );
}
