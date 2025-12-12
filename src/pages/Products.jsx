import React, { useEffect, useState } from "react";
// import usePageTitle from "../utils/usePageTitle";
import SEO from "../components/SEO";

const SAMPLE = [
    { id: "neo", title: "NeoData", summary: "Manage office logs and production workflows.", cta: "Learn more" },
    { id: "buddy", title: "ProjectBuddy", summary: "Collaborative platform for teams and students.", cta: "Learn more" },
    { id: "insight", title: "InsightPro", summary: "Analytics and dashboards for operations.", cta: "View details" },
];

export default function Products() {
    // usePageTitle("Products");

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const t = setTimeout(() => {
            setProducts(SAMPLE);
            setLoading(false);
        }, 450);
        return () => clearTimeout(t);
    }, []);

    return (
        <section className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
            <SEO
                title="Products — Vritula"
                description="Discover Vritula’s premium products designed for performance, business automation and scalability."
                url="https://vritulacorporation.netlify.app/products"
            />
            <h2 className="text-3xl font-semibold text-center mb-6">Our Products</h2>
            <p className="text-center text-gray-600 mb-8">Built to streamline work and increase efficiency.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {loading
                    ? [1,2,3].map(i => (
                        <div key={i} className="bg-gray-100 animate-pulse h-48 rounded-xl" />
                    ))
                    : products.map(p => (
                        <article key={p.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
                            <h3 className="text-lg font-semibold">{p.title}</h3>
                            <p className="mt-2 text-gray-600">{p.summary}</p>
                            <button className="mt-4 text-sm text-blue-600 font-semibold">{p.cta} →</button>
                        </article>
                    ))}
            </div>
        </section>
    );
}
