import { Helmet } from "react-helmet-async";
import { useLocale } from "@/i18n";

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

const BASE_URL = "https://redbear.vercel.com";

const SEOHead = ({ title, description, path, ogImage = "/og-home.jpg" }: SEOHeadProps) => {
  const { locale, localePath } = useLocale();
  const localizedPath = localePath(path);
  const url = `${BASE_URL}${localizedPath}`;
  const fullTitle = `${title} | $BEARISH - Red Bear Coin`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <html lang={locale} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${BASE_URL}${ogImage}`} />
      <meta property="og:locale" content={locale} />

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${BASE_URL}${ogImage}`} />
    </Helmet>
  );
};

export default SEOHead;
