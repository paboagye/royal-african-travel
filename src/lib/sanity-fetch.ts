import { client } from "./sanity";

const isSanityConfigured =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== "your-project-id";

/**
 * Fetch data from Sanity with fallback.
 * Returns null if Sanity is not configured, allowing pages to use static fallbacks.
 */
export async function sanityFetch<T>(
  query: string,
  params?: Record<string, unknown>
): Promise<T | null> {
  if (!isSanityConfigured) return null;

  try {
    return await client.fetch<T>(query, params ?? {}, {
      next: { revalidate: 60 },
    });
  } catch (err) {
    console.error("Sanity fetch error:", err);
    return null;
  }
}
