import Link from "next/link";
import type { ReactNode } from "react";

interface MeetingsLayoutProps {
    children: ReactNode;
}

export default function MeetingsLayout({
    children,
}: MeetingsLayoutProps) {
    return (
        <div className="min-h-screen bg-slate-50">
            <div className="mx-auto max-w-6xl px-6 py-8">
                <div className="mb-8 flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                            Meeting Schedule
                        </p>
                        <h1 className="text-3xl font-bold text-slate-900">
                            Sacrament Meetings
                        </h1>
                    </div>

                    <Link
                        href="/meetings/current"
                        className="rounded-lg bg-blue-700 px-4 py-2 text-center font-semibold text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                    >
                        Current Meeting
                    </Link>
                </div>

                {children}
            </div>
        </div>
    );
}