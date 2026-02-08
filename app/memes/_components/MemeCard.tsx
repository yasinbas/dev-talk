import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Image from "next/image";

interface MemeCardProps {
    meme: {
        id: string;
        caption: string;
        imageUrl: string;
        likes: number;
        author: {
            firstName: string | null;
            imageUrl: string | null;
        };
    };
}

export function MemeCard({ meme }: MemeCardProps) {
    return (
        <Card className="overflow-hidden">
            <CardHeader className="p-3 flex flex-row items-center gap-3">
                <Avatar className="h-8 w-8">
                    <AvatarImage src={meme.author.imageUrl || ""} />
                    <AvatarFallback>{meme.author.firstName?.[0] || "?"}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{meme.author.firstName || "Anonymous"}</span>
            </CardHeader>
            <CardContent className="p-0">
                <div className="relative aspect-square">
                    <Image
                        src={meme.imageUrl}
                        alt={meme.caption}
                        fill
                        className="object-cover"
                    />
                </div>
            </CardContent>
            <CardFooter className="p-3 flex flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                        <Heart className="h-4 w-4 mr-1" />
                        {meme.likes}
                    </Button>
                </div>
                <p className="text-sm">{meme.caption}</p>
            </CardFooter>
        </Card>
    );
}
