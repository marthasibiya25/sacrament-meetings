import { redirect } from "next/navigation";
import { getAllMeetings } from "@/lib/meetings-db";

function getMostRecentSunday(date: Date): string {
    const sunday = new Date(date);
    const day = sunday.getDay();

    sunday.setDate(sunday.getDate() - day);

    const year = sunday.getFullYear();
    const month = String(sunday.getMonth() + 1).padStart(2, "0");
    const dayOfMonth = String(sunday.getDate()).padStart(2, "0");

    return `${year}-${month}-${dayOfMonth}`;
}

export default function CurrentMeetingPage() {
    const meetings = getAllMeetings();
    const today = new Date();
    const mostRecentSunday = getMostRecentSunday(today);

    const currentMeeting = meetings.find(
        (meeting) => meeting.date === mostRecentSunday,
    );

    const fallbackMeeting = meetings
        .filter((meeting) => meeting.date <= mostRecentSunday)
        .sort((a, b) => b.date.localeCompare(a.date))[0];

    const meeting = currentMeeting ?? fallbackMeeting;

    if (!meeting) {
        return (
            <main>
                <h1 className="text-2xl font-bold text-slate-900">
                    No meetings available
                </h1>
                <p className="mt-2 text-slate-600">
                    There are no sacrament meetings available yet.
                </p>
            </main>
        );
    }

    redirect(`/meetings/${meeting.id}`);
}