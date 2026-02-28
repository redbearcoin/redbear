import { SITE_URL } from "./config";

export function generateRobots(): string {
  return `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
}
