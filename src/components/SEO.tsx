import React from "react";
import { Helmet } from "react-helmet-async";

type SEOProps = {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  structuredData?: object | null;
};

const defaultTitle =
  "Nandani - Job Placement & Training for International Professionals";
const defaultDescription =
  "Nandani provides expert job placement and career training for international students and professionals in the US. Resume building, interview preparation, and personalized job search support.";

export default function SEO({
  title,
  description,
  canonical,
  image,
  structuredData,
}: SEOProps) {
  const fullTitle = title ? `${title} | Nandani` : defaultTitle;
  const metaDescription = description ?? defaultDescription;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="robots" content="index,follow" />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Misc helpful tags */}
      <meta name="author" content="Nandani" />
      <meta name="theme-color" content="#0ea5a4" />
      {canonical && (
        <link
          rel="canonical"
          href={"https://nandaniconsultancy.vercel.app" + canonical}
        />
      )}

      {/* Structured Data JSON-LD */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
