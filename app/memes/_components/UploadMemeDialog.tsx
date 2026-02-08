"use client";

import { useState } from "react";
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
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Upload } from "lucide-react";

export function UploadMemeDialog() {
    const [open, setOpen] = useState(false);
    const [caption, setCaption] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleUpload = async () => {
        if (!caption || !imageUrl) {
            toast.error("Please provide both caption and image URL");
            return;
        }
        setLoading(true);
        try {
            // TODO: Use UploadThing for actual file upload
            // For now, accepting URL directly
            const res = await fetch("/api/memes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ caption, imageUrl })
            });
            if (!res.ok) throw new Error("Failed to upload");
            setOpen(false);
            setCaption("");
            setImageUrl("");
            toast.success("Meme uploaded!");
            router.refresh();
        } catch (error) {
            toast.error("Failed to upload meme");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Meme
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Upload a Meme</DialogTitle>
                    <DialogDescription>
                        Share something funny with the dev community.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="caption">Caption</Label>
                        <Input
                            id="caption"
                            value={caption}
                            onChange={(e) => setCaption(e.target.value)}
                            placeholder="When it compiles on the first try..."
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="imageUrl">Image URL</Label>
                        <Input
                            id="imageUrl"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            placeholder="https://example.com/meme.jpg"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={handleUpload} disabled={loading}>
                        {loading ? "Uploading..." : "Post Meme"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
