import usePageTitle from "../utils/usePageTitle";

export default function Services() {
    usePageTitle("Services");

    return (
        <section className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-6">Services</h2>
            <p className="text-center text-gray-600 mb-8">Comprehensive services from design to deployment.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <article className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
                    <h3 className="font-semibold">Custom Web Development</h3>
                    <p className="text-gray-600 mt-2">End-to-end app development using modern stacks.</p>
                </article>

                <article className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
                    <h3 className="font-semibold">Cloud & DevOps</h3>
                    <p className="text-gray-600 mt-2">Automation, CI/CD and scalable cloud infrastructure.</p>
                </article>

                <article className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
                    <h3 className="font-semibold">UX / UI Design</h3>
                    <p className="text-gray-600 mt-2">Human-centered design for delightful experiences.</p>
                </article>
            </div>
        </section>
    );
}
