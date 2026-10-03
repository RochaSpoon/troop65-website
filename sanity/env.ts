export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2025-10-01";

/** False until the Sanity project ID is set. The site then shows the built-in starting content. */
export const isSanityConfigured = projectId.length > 0;
