import { db } from "@/lib/db";
import { CreateLobbyDialog } from "./_components/CreateLobbyDialog";
import { LobbyList } from "./_components/LobbyList";

export const dynamic = "force-dynamic";

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

            <LobbyList initialLobbies={lobbies} />
        </div>
    );
}
