import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, LogIn } from "lucide-react";
import Link from "next/link";
import { Prisma } from "@prisma/client";

type LobbyWithDetails = Prisma.LobbyGetPayload<{
    include: { owner: true; participants: true }
}>;

interface LobbyCardProps {
    lobby: LobbyWithDetails;
}

export function LobbyCard({ lobby }: LobbyCardProps) {
    return (
        <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
                <CardTitle>{lobby.topic}</CardTitle>
                <CardDescription>Hosted by {lobby.owner?.firstName || "Unknown"}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{lobby.participants.length} / {lobby.maxParticipants} Online</span>
                </div>
            </CardContent>
            <CardFooter>
                <Link href={`/lobbies/${lobby.id}`} className="w-full">
                    <Button className="w-full">
                        <LogIn className="mr-2 h-4 w-4" />
                        Join Lobby
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
