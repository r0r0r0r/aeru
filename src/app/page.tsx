import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { FlavorExplosion } from "@/components/FlavorExplosion";
import { Marquee } from "@/components/Marquee";
import { SocialGrid } from "@/components/SocialGrid";
import { MerchDrop } from "@/components/MerchDrop";
import { Footer } from "@/components/Footer";

import { client } from "../../sanity/lib/client";
import { SanityDocument } from "next-sanity";
import { flavors as localFlavors } from "@/lib/flavors";

const FLAVORS_QUERY = `*[_type == "product"]{
  _id,
  name,
  "id": _id, 
  tagline,
  price,
  "bg": backgroundColor,
  "image": image.asset->url,
  "slug": slug.current
}`;

export default async function Home() {
  let sanityFlavors: SanityDocument[] = [];
  try {
    sanityFlavors = await client.fetch<SanityDocument[]>(FLAVORS_QUERY);
  } catch (error) {
    console.error("Failed to fetch Sanity flavors:", error);
    // Fallback to empty array, loop will just use local
  }

  // HYBRID MERGE: Combine Sanity (Live) + Local (Backup)
  // Converting local flavors to match Sanity shape for consistency if needed, 
  // or just merging arrays if shapes align well enough.
  // We filter out local flavors that already exist in Sanity (by ID slug match) to avoid duplicates.
  const sanityIds = new Set(sanityFlavors?.map((f: any) => f.slug) || []);
  const filteredLocal = localFlavors.filter(f => !sanityIds.has(f.id));

  const allFlavors = [...(sanityFlavors || []), ...filteredLocal];

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Marquee />
      <FlavorExplosion flavors={allFlavors} />
      <SocialGrid />
      <MerchDrop />
      <Footer />
    </main>
  );
}
