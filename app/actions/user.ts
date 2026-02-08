'use server'

import { revalidatePath } from "next/cache";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export async function syncUser() {
    const user = await currentUser();

    if (!user) {
        return null;
    }

    const dbUser = await db.user.upsert({
        where: {
            clerkId: user.id,
        },
        update: {
            imageUrl: user.imageUrl,
            email: user.emailAddresses[0].emailAddress,
            firstName: user.firstName,
            lastName: user.lastName,
        },
        create: {
            clerkId: user.id,
            imageUrl: user.imageUrl,
            email: user.emailAddresses[0].emailAddress,
            firstName: user.firstName,
            lastName: user.lastName,
            // Default role is DEVELOPER from schema
        },
    });

    return dbUser;
}

export async function updateTechStack(techStack: string) {
    const user = await currentUser();

    if (!user) {
        throw new Error("Unauthorized");
    }

    await db.user.update({
        where: {
            clerkId: user.id,
        },
        data: {
            techStack,
        },
    });

    revalidatePath("/profile");
}

export async function getUserProfile() {
    const user = await currentUser();

    if (!user) {
        return null;
    }

    const dbUser = await db.user.findUnique({
        where: { clerkId: user.id },
        include: {
            memes: true,
            podcasts: true
        }
    });

    return dbUser;

    return user;
}
