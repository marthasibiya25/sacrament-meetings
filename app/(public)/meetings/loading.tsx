export default function Loading() {
    return (
        <div
            className="flex min-h-64 items-center justify-center"
            aria-live="polite"
            aria-busy="true"
        >
            <p className="text-lg font-medium text-slate-600">
                Loading meetings...
            </p>
        </div>
    );
}