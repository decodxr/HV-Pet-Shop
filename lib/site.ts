export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hvpetshop.com.br";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}
