import { useNavigate } from "react-router-dom";
import usePageTitle from "../utils/usePageTitle";
import { useState } from "react";

export default function Contact() {
    usePageTitle("Contact");

    const navigate = useNavigate();
    const [submitting, setSubmitting] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitting(true);

        // Simulate submit delay; in production use fetch to Netlify or your API
        setTimeout(() => {
            setSubmitting(false);
            navigate("/thanks");
        }, 700);
    }

    return (
        <section className="pt-32 pb-20 px-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
            <p className="text-center text-gray-600 mb-8">Send a message and we'll reply within 1 business day.</p>

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Full name</label>
                    <input required name="name" className="mt-1 block w-full rounded-md border-gray-200" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input required type="email" name="email" className="mt-1 block w-full rounded-md border-gray-200" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea required name="message" rows="5" className="mt-1 block w-full rounded-md border-gray-200" />
                </div>

                <div className="text-right">
                    <button type="submit" disabled={submitting} className="brand-btn">
                        {submitting ? "Sending..." : "Send Message"}
                    </button>
                </div>
            </form>
        </section>
    );
}
