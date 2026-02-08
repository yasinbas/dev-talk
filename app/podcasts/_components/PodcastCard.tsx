import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PodcastCardProps {
    podcast: {
        id: string;
        title: string;
        description: string | null;
        audioUrl: string;
        duration: number | null;
        host: {
            firstName: string | null;
            imageUrl: string | null;
        };
    };
}

export function PodcastCard({ podcast }: PodcastCardProps) {
    const formatDuration = (seconds: number | null) => {
        if (!seconds) return "Unknown";
        const mins = Math.floor(seconds / 60);
        return `${mins} min`;
    };

    return (
        <Card className="flex items-center p-4 gap-4">
            <Button size="icon" variant="secondary" className="shrink-0">
                <Play className="h-5 w-5" />
            </Button>
            <div className="flex-1 min-w-0">
                <CardTitle className="text-lg truncate">{podcast.title}</CardTitle>
                <p className="text-sm text-muted-foreground truncate">
                    {podcast.description || "No description"}
                </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Avatar className="h-6 w-6">
                    <AvatarImage src={podcast.host.imageUrl || ""} />
                    <AvatarFallback>{podcast.host.firstName?.[0] || "?"}</AvatarFallback>
                </Avatar>
                <span>{podcast.host.firstName || "Unknown"}</span>
                <span className="text-xs">• {formatDuration(podcast.duration)}</span>
            </div>
        </Card>
    );
}
