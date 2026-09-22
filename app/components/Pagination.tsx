"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
};

export default function Pagination({
    currentPage,
    totalPages,
}: PaginationProps) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const createPageURL = (page: number) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", page.toString());

        return `${pathname}?${params.toString()}`;
    };

    if (totalPages <= 1) {
        return null;
    }

    return (
        <nav
            aria-label="Pagination"
            className="mt-8 flex items-center justify-center gap-4"
        >
            {currentPage > 1 ? (
                <Link
                    href={createPageURL(currentPage - 1)}
                    className="rounded-md border border-slate-300 px-4 py-2 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                    Previous
                </Link>
            ) : (
                <span className="rounded-md border border-slate-200 px-4 py-2 text-slate-400">
                    Previous
                </span>
            )}

            <span className="text-sm text-slate-600">
                Page {currentPage} of {totalPages}
            </span>

            {currentPage < totalPages ? (
                <Link
                    href={createPageURL(currentPage + 1)}
                    className="rounded-md border border-slate-300 px-4 py-2 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                    Next
                </Link>
            ) : (
                <span className="rounded-md border border-slate-200 px-4 py-2 text-slate-400">
                    Next
                </span>
            )}
        </nav>
    );
}