"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { toast } from "sonner";

interface MarkAsReadButtonProps {
    articleId: string;
}

export function MarkAsReadButton({ articleId }: MarkAsReadButtonProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleMarkAsRead = async () => {
        setLoading(true);
        try {
            const res = await fetch(`/api/articles/${articleId}/read`, {
                method: "POST",
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || "Failed to mark as read");
            }

            toast.success("Article marked as read! +5 points earned");
            router.refresh();
        } catch (error) {
            toast.error(error instanceof Error ? error.message : "Failed to mark as read");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Button onClick={handleMarkAsRead} disabled={loading}>
            <Check className="h-4 w-4 mr-2" />
            {loading ? "Marking..." : "Mark as Read"}
        </Button>
    );
}
