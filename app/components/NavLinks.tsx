"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home" },
        { href: "/meetings", label: "Meetings" },
        { href: "/meetings/current", label: "Current Meeting" },
    ];

    return (
        <nav aria-label="Main navigation">
            <ul className="flex flex-wrap gap-4">
                {links.map((link) => {
                    const isActive =
                        link.href === "/"
                            ? pathname === "/"
                            : pathname === link.href ||
                            pathname.startsWith(`${link.href}/`);

                    return (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                aria-current={isActive ? "page" : undefined}
                                className={`rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 ${isActive
                                    ? "bg-blue-100 font-semibold text-blue-800"
                                    : "hover:bg-slate-100"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}