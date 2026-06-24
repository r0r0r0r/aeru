import dynamic from "next/dynamic";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";

const WhatIsAeru = dynamic(() => import("@/components/WhatIsAeru").then((mod) => mod.WhatIsAeru), {
  ssr: true,
});

const FlavorExplosion = dynamic(() => import("@/components/FlavorExplosion").then((mod) => mod.FlavorExplosion), {
  ssr: true,
});

const SocialGrid = dynamic(() => import("@/components/SocialGrid").then((mod) => mod.SocialGrid), {
  ssr: true,
});

const Footer = dynamic(() => import("@/components/Footer").then((mod) => mod.Footer), {
  ssr: true,
});

import { client } from "../../sanity/lib/client";
import { SanityDocument } from "next-sanity";
import { flavors as localFlavors } from "@/lib/flavors";

export const revalidate = 60;

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
    <main id="main-content" className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <Hero />
      <Marquee />
      <WhatIsAeru />
      <FlavorExplosion flavors={allFlavors} />
      <SocialGrid />
      <Footer />
    </main>
  );
}
