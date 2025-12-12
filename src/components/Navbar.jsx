import React from "react";
import {Link} from "react-router-dom";


export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        {/* Wordmark logo (SVG wordmark) */}
                        <Link to="/" className="flex items-center gap-3">
                            <img src="/logo.svg" alt="Vritula" width={36} height={36} className="shrink-0" />

                            <span className="text-xl font-semibold text-slate-900">Vritula</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-8 text-sm">
                        <Link to="/" className="text-slate-700 hover:text-slate-900">Home</Link>
                        <Link to="/products" className="text-slate-700 hover:text-slate-900">Products</Link>
                        <Link to="/services" className="text-slate-700 hover:text-slate-900">Services</Link>
                        <Link to="/contact" className="text-slate-700 hover:text-slate-900">Contact</Link>
                        <a href="#" className="brand-btn">Get Started</a>
                    </div>

                    {/* Mobile: simple hamburger that opens native link list (minimal) */}
                    <div className="md:hidden">
                        <details className="relative">
                            <summary className="list-none p-2 rounded-md cursor-pointer">
                                <svg className="w-6 h-6 text-slate-700" viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor">
                                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                          d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                            </summary>
                            <div
                                className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                                <Link to="/"
                                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-gray-50">Home</Link>
                                <Link to="/products"
                                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-gray-50">Products</Link>
                                <Link to="/services"
                                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-gray-50">Services</Link>
                                <Link to="/contact"
                                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-gray-50">Contact</Link>
                                <div className="px-4 py-3 border-t border-gray-100">
                                    <a href="#" className="block text-center brand-btn">Get Started</a>
                                </div>
                            </div>
                        </details>
                    </div>
                </nav>
            </div>
        </header>
    );
}
