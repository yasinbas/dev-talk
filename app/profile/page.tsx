import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { TechStackEditor } from "./_components/TechStackEditor";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default async function ProfilePage() {
    const user = await currentUser();

    if (!user) {
        redirect("/");
    }

    const dbUser = await db.user.findUnique({
        where: { clerkId: user.id },
    });

    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-bold">Profile</h1>
                <p className="text-muted-foreground">Manage your developer identity.</p>
            </div>

            <div className="bg-card p-6 rounded-lg border shadow-sm">
                <div className="flex items-center space-x-4 mb-6">
                    <Image src={user.imageUrl} alt={user.firstName || "User"} width={64} height={64} className="rounded-full" />
                    <div className="flex-1">
                        <div className="flex items-center gap-2">
                            <h2 className="text-xl font-semibold">{user.firstName} {user.lastName}</h2>
                            <Badge variant={dbUser?.role === "ADMIN" ? "default" : "secondary"}>
                                {dbUser?.role || "DEVELOPER"}
                            </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{user.emailAddresses[0].emailAddress}</p>
                        {dbUser?.points !== undefined && (
                            <p className="text-sm text-muted-foreground mt-1">🏆 {dbUser.points} points</p>
                        )}
                    </div>
                </div>

                <TechStackEditor initialStack={dbUser?.techStack || null} />
            </div>
        </div>
    );
}

