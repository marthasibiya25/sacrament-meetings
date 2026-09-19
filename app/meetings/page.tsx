import MeetingCard from "@/app/components/MeetingCard";
import { Meeting } from "@/lib/types";

async function getMeetings(): Promise<Meeting[]> {
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  const response = await fetch(`${baseUrl}/api/meetings`, {
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
