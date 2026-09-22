import MeetingCard from "@/app/components/MeetingCard";
import MeetingSearch from "@/app/components/MeetingSearch";
import Pagination from "@/app/components/Pagination";
import {
  getMeetings,
  getMeetingsTotalPages,
} from "@/lib/meetings-db";

type MeetingsPageProps = {
  searchParams: Promise<{
    query?: string;
    page?: string;
  }>;
};

export default async function MeetingsPage({
  searchParams,
}: MeetingsPageProps) {
  const params = await searchParams;

  const query = params.query ?? "";
  const currentPage = Number(params.page) || 1;

  const [meetings, totalPages] = await Promise.all([
    getMeetings(query, currentPage),
    getMeetingsTotalPages(query),
  ]);

  return (
    <main>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Sacrament Meetings
        </h1>

        <p className="mt-2 text-slate-600">
          View scheduled sacrament meetings and open a meeting to see its
          complete program.
        </p>
      </div>

      <MeetingSearch />

      <div className="mt-6 grid gap-6">
        {meetings.length > 0 ? (
          meetings.map((meeting) => (
            <MeetingCard key={meeting.id} meeting={meeting} />
          ))
        ) : (
          <p className="text-slate-600">
            No meetings found.
          </p>
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </main>
  );
}