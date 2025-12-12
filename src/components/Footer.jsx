import React from "react";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 mt-16">
            <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-600">
                <div>
                    <h4 className="font-semibold text-slate-900">Vritula</h4>
                    <p className="mt-2">Reliable digital products and engineering.</p>
                </div>

                <div>
                    <h5 className="font-semibold mb-2">Product</h5>
                    <a className="block py-1 hover:text-slate-900" href="/products">Products</a>
                    <a className="block py-1 hover:text-slate-900" href="/services">Services</a>
                </div>

                <div>
                    <h5 className="font-semibold mb-2">Company</h5>
                    <a className="block py-1 hover:text-slate-900" href="/contact">Contact</a>
                </div>

                <div>
                    <h5 className="font-semibold mb-2">Contact</h5>
                    <p className="py-1">vajayash27092006@gmail.com</p>
                    <p className="py-1">Surat, Gujarat, India</p>
                </div>
            </div>

            <div className="border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 py-4 text-xs text-gray-500 text-center">
                    © {new Date().getFullYear()} Vritula. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
