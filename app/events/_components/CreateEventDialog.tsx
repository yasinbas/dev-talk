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
import { CalendarPlus } from "lucide-react";

export function CreateEventDialog() {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [scheduledFor, setScheduledFor] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleCreate = async () => {
        if (!title || !scheduledFor) {
            toast.error("Please provide title and date");
            return;
        }
        setLoading(true);
        try {
            const res = await fetch("/api/events", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, description, scheduledFor: new Date(scheduledFor) })
            });
            if (!res.ok) throw new Error("Failed to create");
            setOpen(false);
            setTitle("");
            setDescription("");
            setScheduledFor("");
            toast.success("Event created!");
            router.refresh();
        } catch (_error) {
            toast.error("Failed to create event");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>
                    <CalendarPlus className="mr-2 h-4 w-4" />
                    Create Event
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Create an Event</DialogTitle>
                    <DialogDescription>
                        Schedule a meetup or discussion for the community.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="React Meetup: Advanced Patterns"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Join us for a discussion on..."
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="scheduledFor">Date & Time</Label>
                        <Input
                            id="scheduledFor"
                            type="datetime-local"
                            value={scheduledFor}
                            onChange={(e) => setScheduledFor(e.target.value)}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={handleCreate} disabled={loading}>
                        {loading ? "Creating..." : "Create Event"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
