import { Title, Meta, Link } from "react-head";

export default function SEO({
                                title = "Vritula",
                                description = "Vritula — Modern digital solutions.",
                                keywords = "Vritula, software solutions, SaaS, IT services",
                                image = "/logo_256.png",
                                url = "https://vritulacorporation.netlify.app",
                            }) {
    return (
        <>
            <Title>{title}</Title>

            <Meta name="description" content={description} />
            <Meta name="keywords" content={keywords} />
            <Link rel="canonical" href={url} />

            <Meta property="og:title" content={title} />
            <Meta property="og:description" content={description} />
            <Meta property="og:image" content={image} />
            <Meta property="og:url" content={url} />
            <Meta property="og:type" content="website" />

            <Meta name="twitter:card" content="summary_large_image" />
            <Meta name="twitter:title" content={title} />
            <Meta name="twitter:description" content={description} />
            <Meta name="twitter:image" content={image} />

            <Link rel="icon" href="/favicon.ico" />
        </>
    );
}
