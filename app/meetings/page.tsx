import { headers } from "next/headers";
import MeetingCard from "@/app/components/MeetingCard";
import { Meeting } from "@/lib/types";

async function getMeetings(): Promise<Meeting[]> {
  const headersList = await headers();
  const host = headersList.get("host");

  if (!host) {
    throw new Error("Unable to determine application host.");
  }

  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const response = await fetch(`${protocol}://${host}/api/meetings`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch meetings.");
  }

  return response.json();
}

export default async function MeetingsPage() {
  const meetings = await getMeetings();

  return (
    <main>
      <div className="mb-8">
        <p className="text-slate-600">
          View scheduled sacrament meetings and open a meeting to see its
          complete program.
        </p>
      </div>

      <div className="grid gap-6">
        {meetings.map((meeting) => (
          <MeetingCard key={meeting.id} meeting={meeting} />
        ))}
      </div>
    </main>
  );
}
