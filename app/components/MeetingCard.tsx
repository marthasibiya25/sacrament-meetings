import Link from "next/link";
import { Meeting } from "@/lib/types";

interface MeetingCardProps {
    meeting: Meeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
    return (
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                        {meeting.meetingType.name}
                    </p>
                    <h2 className="mt-1 text-xl font-bold text-slate-900">
                        {new Date(`${meeting.date}T00:00:00`).toLocaleDateString(
                            "en-ZA",
                            {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            },
                        )}
                    </h2>
                </div>

                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                    {meeting.speakers.length} speakers
                </span>
            </div>

            <div className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
                <div>
                    <p className="font-semibold text-slate-900">Opening Hymn</p>
                    <p className="text-slate-600">
                        #{meeting.openingHymn.number} — {meeting.openingHymn.title}
                    </p>
                </div>

                <div>
                    <p className="font-semibold text-slate-900">Closing Hymn</p>
                    <p className="text-slate-600">
                        #{meeting.closingHymn.number} — {meeting.closingHymn.title}
                    </p>
                </div>
            </div>

            <Link
                href={`/meetings/${meeting.id}`}
                className="mt-6 inline-block rounded-lg bg-blue-700 px-4 py-2 font-semibold text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
                View Meeting Details
            </Link>
        </article>
    );
}