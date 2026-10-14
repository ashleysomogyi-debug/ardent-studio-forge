import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** The one host used in canonicals, og:url, the sitemap, robots.txt and schema. */
export const SITE_URL = "https://www.ardentstudio.io";

/** Full canonical URL for a route: no trailing slash, except the home page. */
export const canonicalUrlFor = (pathname: string) => {
  const clean = pathname.replace(/\/+$/, "");
  return `${SITE_URL}${clean === "" ? "/" : clean}`;
};

const upsertMeta = (attr: "name" | "property", key: string, value: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
};

export interface PageMetaProps {
  title: string;
  description: string;
  /** Defaults to the current route, so every page canonicalizes to itself. */
  path?: string;
}

/**
 * Sets the title, description, canonical URL and social tags for the current page.
 * Pages used to set only the title and description, which left every page
 * pointing its canonical at the home page.
 */
export function usePageMeta({ title, description, path }: PageMetaProps) {
  const { pathname } = useLocation();
  const url = canonicalUrlFor(path ?? pathname);

  useEffect(() => {
    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", url);
  }, [title, description, url]);
}

/** Component form of usePageMeta, for pages written as a single JSX expression. */
export const PageMeta = (props: PageMetaProps) => {
  usePageMeta(props);
  return null;
};
