export default function LoadingSplash() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-primary text-white">
            <div className="text-center space-y-4">
                {/* Simple animated logo */}
                <svg className="mx-auto w-20 h-20 animate-pulse" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="40" stroke="rgba(59,130,246,0.25)" strokeWidth="10" />
                    <path d="M30 55 L45 70 L70 35" stroke="#60a5fa" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <h1 className="text-2xl font-semibold">Vritula</h1>
                <p className="text-sm text-gray-300">Preparing your experience…</p>
            </div>
        </div>
    );
}
