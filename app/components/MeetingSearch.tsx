"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function MeetingSearch() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);

        params.set("page", "1");

        if (term) {
            params.set("query", term);
        } else {
            params.delete("query");
        }

        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <div className="mb-6">
            <label htmlFor="meeting-search" className="sr-only">
                Search meetings
            </label>

            <input
                id="meeting-search"
                type="search"
                placeholder="Search by speaker, leader, or meeting type..."
                defaultValue={searchParams.get("query")?.toString()}
                onChange={(e) => handleSearch(e.target.value)}
                aria-label="Search meetings"
                className="w-full rounded-md border border-slate-300 px-4 py-2 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
        </div>
    );
}