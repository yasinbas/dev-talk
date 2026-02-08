'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { updateTechStack } from "@/app/actions/user";

interface ProfileFormProps {
    initialStack: string;
}

export function ProfileForm({ initialStack }: ProfileFormProps) {
    const [stack, setStack] = useState(initialStack);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await updateTechStack(stack);
            toast.success("Profile updated!");
        } catch (error) {
            toast.error("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="stack">Tech Stack</Label>
                <Input
                    id="stack"
                    placeholder="e.g. Next.js, React, Node.js"
                    value={stack}
                    onChange={(e) => setStack(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">Comma separated list of technologies you use.</p>
            </div>

            <Button type="submit" disabled={loading}>
                {loading ? "Saving..." : "Save Changes"}
            </Button>
        </form>
    );
}
