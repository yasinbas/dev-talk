import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        // Simple DB check
        await db.$queryRaw`SELECT 1`;

        return NextResponse.json({
            status: "ok",
            timestamp: new Date().toISOString(),
            database: "connected",
            env: process.env.NODE_ENV
        });
    } catch (error) {
        console.error("Health check failed:", error);
        return NextResponse.json({
            status: "error",
            database: "disconnected",
            error: error instanceof Error ? error.message : "Internal Server Error"
        }, { status: 500 });
    }
}
