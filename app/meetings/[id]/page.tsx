import { headers } from "next/headers";
import { notFound } from "next/navigation";
import MeetingDetail from "@/app/components/MeetingDetail";
import { Meeting } from "@/lib/types";

interface MeetingPageProps {
  params: Promise<{ id: string }>;
}

async function getMeeting(id: string): Promise<Meeting | null> {
  const headersList = await headers();
  const host = headersList.get("host");

  if (!host) {
    throw new Error("Unable to determine application host.");
  }

  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const response = await fetch(`${protocol}://${host}/api/meetings/${id}`, {
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
