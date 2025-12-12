import { Head } from "react-head";

export default function SEO({
                                title = "Vritula",
                                description = "Vritula — Modern digital solutions.",
                                keywords = "Vritula, software solutions, SaaS, IT services",
                                image = "/logo_256.png",
                                url = "https://vritulacorporation.netlify.app",
                            }) {
    return (
        <Head>
            <title>{title}</title>

            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            <link rel="canonical" href={url} />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}
