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
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Upload } from "lucide-react";
import { UploadButton } from "@/lib/uploadthing";

export function UploadPodcastDialog() {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [audioUrl, setAudioUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleUpload = async () => {
        if (!title || !audioUrl) {
            toast.error("Please provide title and upload audio");
            return;
        }
        setLoading(true);
        try {
            const res = await fetch("/api/podcasts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, description, audioUrl })
            });
            if (!res.ok) throw new Error("Failed to upload");
            setOpen(false);
            setTitle("");
            setDescription("");
            setAudioUrl("");
            toast.success("Podcast published!");
            router.refresh();
        } catch (error) {
            toast.error("Failed to publish podcast");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>
                    <Upload className="mr-2 h-4 w-4" />
                    Publish Podcast
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Publish a Podcast</DialogTitle>
                    <DialogDescription>
                        Share your developer discussions with the community.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Episode 1: Getting Started with Rust"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="In this episode we discuss..."
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label>Audio File</Label>
                        <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 bg-muted/50 cursor-pointer">
                            {audioUrl ? (
                                <p className="text-sm font-medium text-primary mb-4 truncate w-full text-center">
                                    ✓ Audio uploaded
                                </p>
                            ) : null}
                            <UploadButton
                                endpoint="audioUploader"
                                onClientUploadComplete={(res) => {
                                    setAudioUrl(res[0].url);
                                    toast.success("Audio uploaded!");
                                }}
                                onUploadError={(error: Error) => {
                                    toast.error(`ERROR! ${error.message}`);
                                }}
                            />
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={handleUpload} disabled={loading || !audioUrl}>
                        {loading ? "Publishing..." : "Publish"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
