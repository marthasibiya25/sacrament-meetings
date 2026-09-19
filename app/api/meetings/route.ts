import { NextRequest, NextResponse } from "next/server";
import { getAllMeetings, getMeetingsByDate } from "@/lib/meetings-db";

export async function GET(request: NextRequest) {
    const date = request.nextUrl.searchParams.get("date");

    if (date) {
        return NextResponse.json(getMeetingsByDate(date));
    }

    return NextResponse.json(getAllMeetings());
}