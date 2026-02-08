import { db } from "@/lib/db";
import { LobbyCard } from "./_components/LobbyCard";
import { CreateLobbyDialog } from "./_components/CreateLobbyDialog";

export const dynamic = "force-dynamic";

// Inline types (workaround for prisma generate issue)
interface User {
    id: string;
    firstName: string | null;
    lastName: string | null;
    imageUrl: string | null;
}

interface Lobby {
    id: string;
    topic: string;
    title: string;
    status: string;
    maxParticipants: number;
    ownerId: string;
    createdAt: Date;
    owner: User;
    participants: any[];
}


export default async function LobbiesPage() {
    const lobbies = await db.lobby.findMany({
        where: { status: "WAITING" },
        include: {
            owner: true,
            participants: true
        },
        orderBy: { createdAt: "desc" }
    });

    return (
        <div className="container py-6 space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Lobbies</h1>
                    <p className="text-muted-foreground">Join real-time discussions with other developers.</p>
                </div>
                <CreateLobbyDialog />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {lobbies.length === 0 ? (
                    <div className="col-span-full text-center py-12 text-muted-foreground">
                        No active lobbies. Start one!
                    </div>
                ) : (
                    (lobbies as Lobby[]).map((lobby: Lobby) => (
                        <LobbyCard key={lobby.id} lobby={lobby} />
                    ))
                )}
            </div>
        </div>
    );
}
