import { useEffect } from "react";
import { getCanonicalUrl, jsonLd, seoConfig } from "./seoConfig";

const upsertMeta = (selector, attributes) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
};

const upsertLink = (selector, attributes) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
};

export default function Seo() {
  useEffect(() => {
    const canonicalUrl = getCanonicalUrl();
    const imageUrl = getCanonicalUrl(seoConfig.image);

    document.documentElement.lang = "en-IN";
    document.title = seoConfig.title;

    upsertMeta('meta[name="description"]', { name: "description", content: seoConfig.description });
    upsertMeta('meta[name="keywords"]', { name: "keywords", content: seoConfig.keywords.join(", ") });
    upsertMeta('meta[name="robots"]', { name: "robots", content: "index, follow, max-image-preview:large" });
    upsertMeta('meta[name="theme-color"]', { name: "theme-color", content: "#0b7a5f" });

    upsertLink('link[rel="canonical"]', { rel: "canonical", href: canonicalUrl });

    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: seoConfig.siteName });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: seoConfig.title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: seoConfig.description });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: imageUrl });
    upsertMeta('meta[property="og:locale"]', { property: "og:locale", content: seoConfig.locale });

    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: seoConfig.title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: seoConfig.description });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: imageUrl });

    let script = document.getElementById("structured-data");
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "structured-data";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, []);

  return null;
}
