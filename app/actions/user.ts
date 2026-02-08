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
        },
    });

    return dbUser;
}

export async function updateTechStack(techStack: string) {
    const user = await currentUser();

    if (!user) {
        throw new Error("Unauthorized");
    }

    // Use upsert to handle case where user doesn't exist yet
    await db.user.upsert({
        where: {
            clerkId: user.id,
        },
        update: {
            techStack,
        },
        create: {
            clerkId: user.id,
            email: user.emailAddresses[0].emailAddress,
            imageUrl: user.imageUrl,
            firstName: user.firstName,
            lastName: user.lastName,
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
}
