import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

interface EventCardProps {
    event: {
        id: string;
        title: string;
        description: string | null;
        scheduledFor: Date;
        organizer: {
            firstName: string | null;
        };
    };
}

export function EventCard({ event }: EventCardProps) {
    const formatDate = (date: Date) => {
        return new Date(date).toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>{event.description || "No description"}</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(event.scheduledFor)}</span>
                </div>
                <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{event.organizer.firstName || "Unknown"}</span>
                </div>
            </CardContent>
        </Card>
    );
}
