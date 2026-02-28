import { Helmet } from "react-helmet-async";
import { useLocale } from "@/i18n";
import { SITE_URL, LOCALES } from "@/seo/config";

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

const SEOHead = ({ title, description, path, ogImage = "/og-home.jpg" }: SEOHeadProps) => {
  const { locale, localePath } = useLocale();
  const localizedPath = localePath(path);
  const url = `${SITE_URL}${localizedPath}`;
  const fullTitle = `${title} | $BEARISH - RedBear`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <html lang={locale} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SITE_URL}${ogImage}`} />
      <meta property="og:locale" content={locale} />

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}${ogImage}`} />

      {/* hreflang alternates */}
      {LOCALES.map((loc) => {
        const href = loc === "en" ? `${SITE_URL}${path}` : `${SITE_URL}/${loc}${path}`;
        return <link key={loc} rel="alternate" hrefLang={loc} href={href} />;
      })}
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${path}`} />
    </Helmet>
  );
};

export default SEOHead;
