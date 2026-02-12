import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { getOrCreateUser } from "@/lib/auth-utils";

export async function PUT(req: Request) {
    try {
        const user = await currentUser();
        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { techStack } = await req.json();

        // Validate techStack is an array if provided
        if (techStack && !Array.isArray(techStack)) {
            return NextResponse.json({ error: "Invalid format" }, { status: 400 });
        }

        const dbUser = await getOrCreateUser(user);

        const updatedUser = await db.user.update({
            where: { id: dbUser.id },
            data: {
                techStack: techStack || [],
            },
        });

        return NextResponse.json(updatedUser);
    } catch (error) {
        console.error("Failed to update profile:", error);
        return NextResponse.json({ error: "Internal Error" }, { status: 500 });
    }
}
