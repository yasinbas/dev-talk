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
import { createLobby } from "@/app/actions/lobby";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function CreateLobbyDialog() {
    const [open, setOpen] = useState(false);
    const [topic, setTopic] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleCreate = async () => {
        if (!topic) return;
        setLoading(true);
        try {
            const lobby = await createLobby(topic, 10);
            setOpen(false);
            toast.success("Lobby created!");
            router.push(`/lobbies/${lobby.id}`);
        } catch (error) {
            toast.error("Failed to create lobby");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>Create Lobby</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create a DevTalk Lobby</DialogTitle>
                    <DialogDescription>
                        Start a real-time discussion. Choose a topic and invite others.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="topic" className="text-right">
                            Topic
                        </Label>
                        <Input
                            id="topic"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            placeholder="e.g., Rust vs Go"
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={handleCreate} disabled={loading}>
                        {loading ? "Creating..." : "Start Lobby"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
