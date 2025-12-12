import usePageTitle from "../utils/usePageTitle";

export default function Thanks() {
    usePageTitle("Thank you");

    return (
        <div className="pt-32 pb-20 px-4 min-h-[60vh] flex items-center justify-center">
            <div className="max-w-xl text-center">
                <h1 className="text-3xl font-semibold mb-4">Thank you — we received your message</h1>
                <p className="text-gray-600 mb-6">Our team will review your request and respond within one business day.</p>
                <a href="/" className="brand-btn inline-block">Back to Home</a>
            </div>
        </div>
    );
}
