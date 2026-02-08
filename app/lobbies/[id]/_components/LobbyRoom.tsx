"use client";

import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Participant {
    user: {
        id: string;
        firstName: string | null;
        imageUrl: string | null;
    };
    role: string;
}

interface Props {
    lobbyId: string;
    initialParticipants: any[];
    currentUserId: string;
}

export default function LobbyRoom({ lobbyId, initialParticipants, currentUserId }: Props) {
    const [participants, setParticipants] = useState<Participant[]>(initialParticipants);
    const [messages, setMessages] = useState<any[]>([]);

    useEffect(() => {
        // Initialize Pusher client
        const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_APP_KEY!, {
            cluster: 'eu'
        });

        const channel = pusher.subscribe(`lobby-${lobbyId}`);

        channel.bind('participant-joined', (data: any) => {
            setParticipants(prev => [...prev, { user: data, role: 'LISTENER' }]);
        });

        // Cleanup
        return () => {
            pusher.unsubscribe(`lobby-${lobbyId}`);
        };
    }, [lobbyId]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-[600px]">
            {/* Main Stage / Chat Area */}
            <div className="md:col-span-3 flex flex-col gap-4">
                <Card className="flex-1 p-4 flex items-center justify-center bg-muted/50">
                    <p className="text-muted-foreground">Main Stage (Voice/Video Placeholder)</p>
                </Card>

                <Card className="h-1/3 p-4 flex flex-col">
                    <h3 className="font-semibold mb-2">Live Chat</h3>
                    <ScrollArea className="flex-1">
                        {messages.map((msg, i) => (
                            <div key={i} className="mb-2">
                                <span className="font-bold">{msg.user}: </span>
                                <span>{msg.text}</span>
                            </div>
                        ))}
                        {messages.length === 0 && <p className="text-sm text-muted-foreground">No messages yet.</p>}
                    </ScrollArea>
                </Card>
            </div>

            {/* Sidebar - Participants */}
            <Card className="p-4 flex flex-col">
                <h3 className="font-semibold mb-4 flex items-center justify-between">
                    Participants
                    <Badge variant="secondary">{participants.length}</Badge>
                </h3>
                <ScrollArea className="flex-1">
                    <div className="space-y-4">
                        {participants.map((p) => (
                            <div key={p.user.id} className="flex items-center gap-3">
                                <Avatar>
                                    <AvatarImage src={p.user.imageUrl || ""} />
                                    <AvatarFallback>{p.user.firstName?.[0]}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-sm font-medium leading-none">{p.user.firstName}</p>
                                    <p className="text-xs text-muted-foreground capitalize">{p.role.toLowerCase()}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </Card>
        </div>
    );
}
