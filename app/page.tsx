import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <section className="grid items-center gap-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            Ward Resources
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Sacrament Meeting Planner
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            View upcoming sacrament meeting programs, including hymns,
            prayers, speakers, leadership, and ward business.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/meetings"
              className="rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              View Meetings
            </Link>

            <Link
              href="/meetings/current"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              Current Meeting
            </Link>
          </div>
        </div>

        <div className="flex justify-center rounded-xl bg-slate-50 p-8">
          <Image
            src="/next.svg"
            alt="Next.js logo representing the technology used for this application"
            width={180}
            height={38}
            priority
          />
        </div>
      </section>

      <section className="mt-10 grid gap-6 sm:grid-cols-3">
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">
            Meeting Programs
          </h2>
          <p className="mt-2 text-slate-600">
            Review complete meeting programs in one convenient place.
          </p>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">
            Easy Navigation
          </h2>
          <p className="mt-2 text-slate-600">
            Quickly move between scheduled meetings and the current program.
          </p>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">
            Accessible Design
          </h2>
          <p className="mt-2 text-slate-600">
            Semantic HTML, clear headings, keyboard-friendly links, and
            readable layouts support accessibility.
          </p>
        </article>
      </section>
    </main>
  );
}
