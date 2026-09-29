import { Meeting } from "@/lib/types";

interface MeetingDetailProps {
    meeting: Meeting;
}

function Hymn({
    label,
    hymn,
}: {
    label: string;
    hymn: Meeting["openingHymn"];
}) {
    return (
        <div>
            <h3 className="font-semibold text-slate-900">{label}</h3>
            <p className="text-slate-600">
                #{hymn.number} — {hymn.title}
            </p>
        </div>
    );
}

export default function MeetingDetail({ meeting }: MeetingDetailProps) {
    return (
        <article className="space-y-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <header className="border-b border-slate-200 pb-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                    {meeting.meetingType.name}
                </p>

                <h1 className="mt-2 text-3xl font-bold text-slate-900">
                    {new Date(`${meeting.date}T00:00:00`).toLocaleDateString(
                        "en-ZA",
                        {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        }
                    )}
                </h1>
            </header>

            <section aria-labelledby="leadership-heading">
                <h2
                    id="leadership-heading"
                    className="text-xl font-bold text-slate-900"
                >
                    Meeting Leadership
                </h2>

                <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg bg-slate-50 p-4">
                        <dt className="font-semibold text-slate-900">Presiding</dt>
                        <dd className="mt-1 text-slate-600">
                            {meeting.presiding}
                        </dd>
                    </div>

                    <div className="rounded-lg bg-slate-50 p-4">
                        <dt className="font-semibold text-slate-900">Conducting</dt>
                        <dd className="mt-1 text-slate-600">
                            {meeting.conducting}
                        </dd>
                    </div>
                </dl>
            </section>

            {meeting.announcements && meeting.announcements.length > 0 && (
                <section aria-labelledby="announcements-heading">
                    <h2
                        id="announcements-heading"
                        className="text-xl font-bold text-slate-900"
                    >
                        Announcements
                    </h2>

                    <ul className="mt-4 space-y-3">
                        {meeting.announcements.map((announcement, index) => (
                            <li
                                key={`${announcement}-${index}`}
                                className="rounded-lg bg-slate-50 p-4 text-slate-600"
                            >
                                {announcement}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            <section aria-labelledby="hymns-heading">
                <h2
                    id="hymns-heading"
                    className="text-xl font-bold text-slate-900"
                >
                    Hymns
                </h2>

                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    <Hymn
                        label="Opening Hymn"
                        hymn={meeting.openingHymn}
                    />

                    {meeting.intermediateHymn && (
                        <Hymn
                            label="Intermediate Hymn"
                            hymn={meeting.intermediateHymn}
                        />
                    )}

                    <Hymn
                        label="Closing Hymn"
                        hymn={meeting.closingHymn}
                    />
                </div>
            </section>

            <section aria-labelledby="prayers-heading">
                <h2
                    id="prayers-heading"
                    className="text-xl font-bold text-slate-900"
                >
                    Prayers
                </h2>

                <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg bg-slate-50 p-4">
                        <dt className="font-semibold text-slate-900">
                            Opening Prayer
                        </dt>
                        <dd className="mt-1 text-slate-600">
                            {meeting.openingPrayer}
                        </dd>
                    </div>

                    <div className="rounded-lg bg-slate-50 p-4">
                        <dt className="font-semibold text-slate-900">
                            Closing Prayer
                        </dt>
                        <dd className="mt-1 text-slate-600">
                            {meeting.closingPrayer}
                        </dd>
                    </div>
                </dl>
            </section>

            {meeting.stakeBusiness && (
                <section aria-labelledby="stake-business-heading">
                    <h2
                        id="stake-business-heading"
                        className="text-xl font-bold text-slate-900"
                    >
                        Stake Business
                    </h2>

                    <p className="mt-4 rounded-lg bg-slate-50 p-4 text-slate-600">
                        Stake business will be conducted during this meeting.
                    </p>
                </section>
            )}

            <section aria-labelledby="speakers-heading">
                <h2
                    id="speakers-heading"
                    className="text-xl font-bold text-slate-900"
                >
                    Speakers
                </h2>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {meeting.speakers.map((speaker) => (
                        <div
                            key={`${speaker.name}-${speaker.topic}`}
                            className="rounded-lg border border-slate-200 p-4"
                        >
                            <p className="font-semibold text-slate-900">
                                {speaker.name}
                            </p>
                            <p className="mt-1 text-slate-600">
                                {speaker.topic}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {meeting.business && meeting.business.length > 0 && (
                <section aria-labelledby="business-heading">
                    <h2
                        id="business-heading"
                        className="text-xl font-bold text-slate-900"
                    >
                        Ward Business
                    </h2>

                    <ul className="mt-4 space-y-3">
                        {meeting.business.map((item) => (
                            <li
                                key={`${item.item}-${item.details}`}
                                className="rounded-lg bg-slate-50 p-4"
                            >
                                <p className="font-semibold text-slate-900">
                                    {item.item}
                                </p>
                                <p className="mt-1 text-slate-600">
                                    {item.details}
                                </p>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
        </article>
    );
}