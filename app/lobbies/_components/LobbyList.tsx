"use client";

import { useEffect, useState } from "react";
import { LobbyCard } from "./LobbyCard";
import { pusherClient } from "@/lib/pusher-client";
import { Prisma } from "@prisma/client";

type LobbyWithOwner = Prisma.LobbyGetPayload<{
    include: { owner: true }
}>;

interface LobbyListProps {
    initialLobbies: LobbyWithOwner[];
}

export function LobbyList({ initialLobbies }: LobbyListProps) {
    const [lobbies, setLobbies] = useState(initialLobbies);

    useEffect(() => {
        pusherClient.subscribe("lobbies");

        const handleLobbyCreated = (data: { lobby: LobbyWithOwner }) => {
            setLobbies((prev) => [data.lobby, ...prev]);
        };

        pusherClient.bind("lobby-created", handleLobbyCreated);

        return () => {
            pusherClient.unbind("lobby-created", handleLobbyCreated);
            pusherClient.unsubscribe("lobbies");
        };
    }, []);

    if (lobbies.length === 0) {
        return (
            <div className="col-span-full text-center py-12 text-muted-foreground">
                No active lobbies. Start one!
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lobbies.map((lobby) => (
                <LobbyCard key={lobby.id} lobby={lobby} />
            ))}
        </div>
    );
}
