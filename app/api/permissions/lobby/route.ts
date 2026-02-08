import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { getPermissionStatus } from "@/lib/permissions";

export async function GET() {
    try {
        const user = await currentUser();
        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // Get or create user
        let dbUser = await db.user.findUnique({ where: { clerkId: user.id } });
        if (!dbUser) {
            dbUser = await db.user.create({
                data: {
                    clerkId: user.id,
                    email: user.emailAddresses[0].emailAddress,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    imageUrl: user.imageUrl,
                },
            });
        }

        const status = await getPermissionStatus(dbUser.id);
        return NextResponse.json(status);
    } catch (error) {
        console.error("Failed to check permission:", error);
        return NextResponse.json({ error: "Failed to check permission" }, { status: 500 });
    }
}
