import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

export const client = createClient({
  projectId: projectId || "missing-project-id",
  dataset,
  apiVersion,
  useCdn: false,
  perspective: "published",
});

/** Every query shares one cache tag. Publishing in Studio calls the webhook, which clears it. */
export const SANITY_TAG = "sanity";
