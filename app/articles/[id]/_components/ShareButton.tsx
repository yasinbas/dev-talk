"use client";

import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

interface ShareButtonProps {
    title: string;
    articleId: string;
}

export function ShareButton({ title, articleId }: ShareButtonProps) {
    const shareUrl = typeof window !== "undefined"
        ? `${window.location.origin}/articles/${articleId}`
        : "";

    const handleShareX = () => {
        const text = encodeURIComponent(`Check out "${title}" on DevTalk!`);
        const url = encodeURIComponent(shareUrl);
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank");
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(shareUrl);
        toast.success("Link copied to clipboard!");
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                    <Share2 className="h-4 w-4" />
                    Share
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleShareX}>
                    Share on X
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleCopyLink}>
                    Copy Link
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
