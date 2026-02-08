"use client";

import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mic, MessageSquare } from "lucide-react";

interface Participant {
    user: {
        id: string;
        firstName: string | null;
        imageUrl: string | null;
    };
    role: string;
}

interface Message {
    user: string;
    text: string;
}

interface Props {
    lobbyId: string;
    initialParticipants: Participant[];
    currentUserId: string;
}

export default function LobbyRoom({ lobbyId, initialParticipants, currentUserId }: Props) {
    const [participants, setParticipants] = useState<Participant[]>(initialParticipants);
    const [messages, _setMessages] = useState<Message[]>([]);

    useEffect(() => {
        // Initialize Pusher client
        const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_APP_KEY!, {
            cluster: 'eu'
        });

        const channel = pusher.subscribe(`lobby-${lobbyId}`);

        channel.bind('participant-joined', (data: Participant['user']) => {
            setParticipants(prev => [...prev, { user: data, role: 'LISTENER' }]);
        });

        // Cleanup
        return () => {
            pusher.unsubscribe(`lobby-${lobbyId}`);
        };
    }, [lobbyId]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-[600px]">
            {/* Main Stage / Voice UI Area */}
            <div className="md:col-span-3 flex flex-col gap-4">
                <Card className="flex-1 p-8 flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 via-background to-muted/20 border-primary/20 relative overflow-hidden">
                    {/* Glassmorphism Background elements */}
                    <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-delay-1000" />

                    <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                        <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center animate-bounce-slow border-2 border-primary/30">
                            <Mic className="h-12 w-12 text-primary" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight">Stage is Live</h2>
                            <p className="text-muted-foreground">Voice room is active. Join the discussion.</p>
                        </div>
                        <div className="flex gap-4">
                            <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20">
                                Join Audio
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-full">
                                Share Screen
                            </Button>
                        </div>
                    </div>
                </Card>

                <Card className="h-1/3 p-4 flex flex-col bg-card/50 backdrop-blur-sm border-muted/50">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold flex items-center gap-2">
                            <MessageSquare className="h-4 w-4 text-primary" />
                            Live Chat
                        </h3>
                    </div>
                    <ScrollArea className="flex-1 pr-4">
                        {messages.map((msg, i) => (
                            <div key={i} className="mb-2 flex flex-col">
                                <span className="text-xs font-bold text-primary">{msg.user}</span>
                                <span className="text-sm bg-muted/30 p-2 rounded-lg mt-1">{msg.text}</span>
                            </div>
                        ))}
                        {messages.length === 0 && (
                            <div className="flex flex-col items-center justify-center h-full opacity-50">
                                <p className="text-xs italic">No messages yet. Start the conversation!</p>
                            </div>
                        )}
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
