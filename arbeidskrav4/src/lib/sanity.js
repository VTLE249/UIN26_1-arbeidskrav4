import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "qqybnztc", // Hardkoder prosjekt-ID så det ikke krasjer
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-01-01",
  // Setter token kun hvis det er nødvendig
  token: import.meta.env.VITE_SANITY_TOKEN || "",
});
