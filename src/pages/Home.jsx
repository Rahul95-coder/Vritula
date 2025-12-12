import usePageTitle from "../utils/usePageTitle";
import SEO from "../components/SEO";

export default function Home() {
    usePageTitle("Home");

    return (
        <div className="pt-20">
            <SEO
                title="Vritula — Digital Solutions That Scale"
                description="Explore enterprise-quality apps, products and services engineered by Vritula."
                url="https://vritulacorporation.netlify.app"
                image="/logo_256.png"
            />
            {/* HERO */}
            <section className="hero-gradient text-white pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold hero-title">Build Reliable Solutions with
                        Confidence</h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg opacity-90">
                        Vritula delivers powerful, scalable digital products and cloud-ready solutions for modern
                        businesses.
                    </p>

                    <div className="mt-8 flex justify-center gap-4">
                        <a href="/products" className="brand-btn">Explore Products</a>
                        <a href="/contact"
                           className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-white/30 hover:bg-white/10 transition">
                            Contact Sales
                        </a>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold">What We Offer</h2>
                        <p className="text-gray-600 mt-2">Enterprise-ready tools that help teams ship faster and
                            safer.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <article className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition">
                            <img src="/icons/performance.svg" alt="" className="w-12 h-12 mb-4"/>
                            <h3 className="font-semibold text-lg">Performance Focused</h3>
                            <p className="mt-2 text-gray-600">Fast, optimized and robust systems with
                                production-grade reliability.</p>
                        </article>

                        <article className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition">
                            <img src="/icons/cloud.svg" alt="" className="w-12 h-12 mb-4"/>
                            <h3 className="font-semibold text-lg">Cloud Native</h3>
                            <p className="mt-2 text-gray-600">Designed to scale on major cloud providers with secure
                                deployments.</p>
                        </article>

                        <article className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition">
                            <img src="/icons/security.svg" alt="" className="w-12 h-12 mb-4"/>
                            <h3 className="font-semibold text-lg">Security First</h3>
                            <p className="mt-2 text-gray-600">Built-in best practices and secure-by-default
                                architecture.</p>
                        </article>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gray-50 border-t">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h3 className="text-2xl font-semibold">Ready to get started?</h3>
                    <p className="text-gray-600 mt-2">Let’s build something great together.</p>
                    <a href="/contact" className="mt-6 brand-btn inline-block">Contact Us</a>
                </div>
            </section>
        </div>
        );
        }
