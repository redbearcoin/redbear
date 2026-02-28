import { SITE_URL, LOCALES, PAGES } from "./config";

export function generateSitemap(): string {
  const now = new Date().toISOString().split("T")[0];

  const urls: string[] = [];

  for (const page of PAGES) {
    const path = page === "/" ? "" : page;

    // Default (English) URL
    const defaultUrl = `${SITE_URL}${path}`;

    // Build hreflang alternates
    const alternates = LOCALES.map((locale) => {
      const localeUrl = locale === "en" ? `${SITE_URL}${path}` : `${SITE_URL}/${locale}${path}`;
      return `      <xhtml:link rel="alternate" hreflang="${locale}" href="${localeUrl}" />`;
    }).join("\n");

    // English (default) entry
    urls.push(`  <url>
    <loc>${defaultUrl}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === "/" ? "1.0" : "0.8"}</priority>
${alternates}
  </url>`);

    // Locale-prefixed entries (skip en, it's the default)
    for (const locale of LOCALES) {
      if (locale === "en") continue;
      const localeUrl = `${SITE_URL}/${locale}${path}`;
      urls.push(`  <url>
    <loc>${localeUrl}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === "/" ? "0.9" : "0.7"}</priority>
${alternates}
  </url>`);
    }
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>`;
}
