import { notFound } from "next/navigation";
import MeetingDetail from "@/app/components/MeetingDetail";
import { Meeting } from "@/lib/types";

interface MeetingPageProps {
  params: Promise<{ id: string }>;
}

async function getMeeting(id: string): Promise<Meeting | null> {
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  const response = await fetch(`${baseUrl}/api/meetings/${id}`, {
    cache: "no-store",
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to fetch meeting.");
  }

  return response.json();
}

export default async function MeetingPage({
  params,
}: MeetingPageProps) {
  const { id } = await params;
  const meeting = await getMeeting(id);

  if (!meeting) {
    notFound();
  }

  return (
    <main>
      <MeetingDetail meeting={meeting} />
    </main>
  );
}
