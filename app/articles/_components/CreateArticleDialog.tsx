"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import { toast } from "sonner";

export function CreateArticleDialog() {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async () => {
        if (!title.trim() || !content.trim()) {
            toast.error("Title and content are required");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch("/api/articles", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, summary, content }),
            });

            if (!res.ok) throw new Error("Failed to create article");

            toast.success("Article published! +20 points earned");
            setOpen(false);
            setTitle("");
            setSummary("");
            setContent("");
            router.refresh();
        } catch {
            toast.error("Failed to publish article");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Write Article
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Write a New Article</DialogTitle>
                    <DialogDescription>
                        Share your knowledge with the community. You&apos;ll earn 20 points!
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                    <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="How to build a REST API with Next.js"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="summary">Summary (optional)</Label>
                        <Input
                            id="summary"
                            value={summary}
                            onChange={(e) => setSummary(e.target.value)}
                            placeholder="A brief introduction to your article"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="content">Content</Label>
                        <Textarea
                            id="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Write your article content here..."
                            className="min-h-[200px]"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} disabled={loading}>
                        {loading ? "Publishing..." : "Publish Article"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
