"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface LikeButtonProps {
    articleId: string;
    initialLikes: number;
    initialLiked: boolean;
    isLoggedIn: boolean;
}

export function LikeButton({
    articleId,
    initialLikes,
    initialLiked,
    isLoggedIn,
}: LikeButtonProps) {
    const router = useRouter();
    const [likes, setLikes] = useState(initialLikes);
    const [liked, setLiked] = useState(initialLiked);
    const [loading, setLoading] = useState(false);

    const handleLike = async () => {
        if (!isLoggedIn) {
            toast.error("Please sign in to like articles");
            return;
        }

        // Optimistic update
        const previousLiked = liked;
        const previousLikes = likes;
        setLiked(!liked);
        setLikes(liked ? likes - 1 : likes + 1);
        setLoading(true);

        try {
            const res = await fetch(`/api/articles/${articleId}/like`, {
                method: "POST",
            });

            if (!res.ok) throw new Error("Failed to like article");

            const data = await res.json();
            // Ensure state matches server response if needed (optional)
            setLiked(data.liked);
            router.refresh();
        } catch {
            // Revert on error
            setLiked(previousLiked);
            setLikes(previousLikes);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Button
            variant="ghost"
            size="sm"
            className={cn("gap-2", liked && "text-red-500 hover:text-red-600")}
            onClick={handleLike}
            disabled={loading}
        >
            <Heart className={cn("h-4 w-4", liked && "fill-current")} />
            {likes}
        </Button>
    );
}
