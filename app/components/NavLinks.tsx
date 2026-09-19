import Link from "next/link";

export default function NavLinks() {
    return (
        <nav aria-label="Main navigation">
            <ul className="flex flex-wrap gap-4">
                <li>
                    <Link
                        href="/"
                        className="rounded-md px-3 py-2 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="/meetings"
                        className="rounded-md px-3 py-2 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                        Meetings
                    </Link>
                </li>
                <li>
                    <Link
                        href="/meetings/current"
                        className="rounded-md px-3 py-2 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                        Current Meeting
                    </Link>
                </li>
            </ul>
        </nav>
    );
}