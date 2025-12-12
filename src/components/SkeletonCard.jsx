export default function SkeletonCard() {
    return (
        <div className="bg-white/5 p-6 rounded-2xl border border-white/5 animate-pulse">
            <div className="h-40 bg-white/3 rounded-md mb-4" />
            <div className="h-6 w-3/4 bg-white/3 rounded mb-2" />
            <div className="h-4 w-1/2 bg-white/3 rounded mb-3" />
            <div className="h-8 w-32 bg-white/4 rounded" />
        </div>
    );
}
