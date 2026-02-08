"use client";

import { useState, useEffect } from "react";
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
import { AlertCircle, Lock } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface PermissionStatus {
    currentPoints: number;
    threshold: number;
    canCreateLobby: boolean;
    pointsNeeded: number;
}

export function CreateLobbyDialog() {
    const [open, setOpen] = useState(false);
    const [topic, setTopic] = useState("");
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(false);
    const [permission, setPermission] = useState<PermissionStatus | null>(null);
    const [checkingPermission, setCheckingPermission] = useState(false);
    const router = useRouter();

    // Check permission when dialog opens
    useEffect(() => {
        if (open) {
            checkPermission();
        }
    }, [open]);

    const checkPermission = async () => {
        setCheckingPermission(true);
        try {
            const res = await fetch("/api/permissions/lobby");
            if (res.ok) {
                const data = await res.json();
                setPermission(data);
            }
        } catch {
            console.error("Failed to check permission");
        } finally {
            setCheckingPermission(false);
        }
    };

    const handleCreate = async () => {
        if (!topic || !title) {
            toast.error("Title and topic are required");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch("/api/lobbies", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, topic, maxParticipants: 10 }),
            });

            const data = await res.json();

            if (!res.ok) {
                if (res.status === 403) {
                    toast.error(data.error);
                    setPermission({
                        currentPoints: data.currentPoints,
                        threshold: data.required,
                        canCreateLobby: false,
                        pointsNeeded: data.required - data.currentPoints,
                    });
                } else {
                    throw new Error(data.error || "Failed to create lobby");
                }
                return;
            }

            setOpen(false);
            toast.success("Lobby created! +10 points earned");
            router.push(`/lobbies/${data.id}`);
        } catch (error) {
            toast.error(error instanceof Error ? error.message : "Failed to create lobby");
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
                        Start a real-time discussion. Requires 100 points.
                    </DialogDescription>
                </DialogHeader>

                {checkingPermission ? (
                    <div className="py-4 text-center text-muted-foreground">
                        Checking permissions...
                    </div>
                ) : permission && !permission.canCreateLobby ? (
                    <Alert variant="destructive">
                        <Lock className="h-4 w-4" />
                        <AlertTitle>Insufficient Points</AlertTitle>
                        <AlertDescription>
                            You have <strong>{permission.currentPoints}</strong> points.
                            You need <strong>{permission.pointsNeeded}</strong> more points to create a lobby.
                            <br />
                            <span className="text-sm mt-2 block">
                                💡 Tip: Read articles (+5) or publish content to earn points!
                            </span>
                        </AlertDescription>
                    </Alert>
                ) : (
                    <div className="grid gap-4 py-4">
                        {permission && (
                            <div className="text-sm text-muted-foreground bg-accent/50 p-2 rounded">
                                Your points: <strong>{permission.currentPoints}</strong> ✓
                            </div>
                        )}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="title" className="text-right">
                                Title
                            </Label>
                            <Input
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="My Lobby Title"
                                className="col-span-3"
                            />
                        </div>
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
                )}

                <DialogFooter>
                    <Button
                        onClick={handleCreate}
                        disabled={loading || (permission !== null && !permission.canCreateLobby)}
                    >
                        {loading ? "Creating..." : "Start Lobby"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
