"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";
import { updateTechStack } from "@/app/actions/user";
import { toast } from "sonner";

const LANGUAGES = [
    "JavaScript", "TypeScript", "Python", "Rust", "Go", "Java", "C#", "C++",
    "Ruby", "PHP", "Swift", "Kotlin", "Dart", "Scala", "Elixir"
];

const FRAMEWORKS = [
    "React", "Next.js", "Vue", "Angular", "Svelte", "Node.js", "Django",
    "FastAPI", "Spring", "Rails", "Laravel", "Flutter", "React Native"
];

interface TechStackEditorProps {
    initialStack: unknown;
}

export function TechStackEditor({ initialStack }: TechStackEditorProps) {
    const parseInitial = () => {
        if (!initialStack) return { languages: [], frameworks: [] };
        if (typeof initialStack === "string") {
            try {
                return JSON.parse(initialStack);
            } catch {
                return { languages: [], frameworks: [] };
            }
        }
        return initialStack as { languages: string[]; frameworks: string[] };
    };

    const initial = parseInitial();
    const [selectedLangs, setSelectedLangs] = useState<string[]>(initial.languages || []);
    const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>(initial.frameworks || []);
    const [saving, setSaving] = useState(false);

    const toggleLanguage = (lang: string) => {
        setSelectedLangs((prev) =>
            prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
        );
    };

    const toggleFramework = (fw: string) => {
        setSelectedFrameworks((prev) =>
            prev.includes(fw) ? prev.filter((f) => f !== fw) : [...prev, fw]
        );
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            const techStack = JSON.stringify({
                languages: selectedLangs,
                frameworks: selectedFrameworks
            });
            await updateTechStack(techStack);
            toast.success("Tech stack updated!");
        } catch (error) {
            toast.error("Failed to save tech stack");
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-semibold mb-3">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                    {LANGUAGES.map((lang) => (
                        <Badge
                            key={lang}
                            variant={selectedLangs.includes(lang) ? "default" : "outline"}
                            className="cursor-pointer transition-all hover:scale-105"
                            onClick={() => toggleLanguage(lang)}
                        >
                            {selectedLangs.includes(lang) && <Check className="h-3 w-3 mr-1" />}
                            {lang}
                        </Badge>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-3">Frameworks & Libraries</h3>
                <div className="flex flex-wrap gap-2">
                    {FRAMEWORKS.map((fw) => (
                        <Badge
                            key={fw}
                            variant={selectedFrameworks.includes(fw) ? "default" : "outline"}
                            className="cursor-pointer transition-all hover:scale-105"
                            onClick={() => toggleFramework(fw)}
                        >
                            {selectedFrameworks.includes(fw) && <Check className="h-3 w-3 mr-1" />}
                            {fw}
                        </Badge>
                    ))}
                </div>
            </div>

            <Button onClick={handleSave} disabled={saving} className="w-full">
                {saving ? "Saving..." : "Save Tech Stack"}
            </Button>
        </div>
    );
}
