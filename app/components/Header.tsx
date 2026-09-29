import NavLinks from "./NavLinks";

export default function Header() {
    return (
        <header className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
                        Ward Resources
                    </p>
                    <h1 className="text-2xl font-bold text-slate-900">
                        Sacrament Meeting Planner
                    </h1>
                </div>
                <NavLinks />
            </div>
        </header>
    );
}