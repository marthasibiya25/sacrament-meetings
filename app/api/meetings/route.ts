import { NextRequest, NextResponse } from "next/server";
import { getAllMeetings, getMeetingsByDate } from "@/lib/meetings-db";

export async function GET(request: NextRequest) {
    const date = request.nextUrl.searchParams.get("date");

    if (date) {
        const meetings = await getMeetingsByDate(date);
        return NextResponse.json(meetings);
    }

    const meetings = await getAllMeetings();
    return NextResponse.json(meetings);
}