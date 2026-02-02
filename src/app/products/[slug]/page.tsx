import { flavors } from "@/lib/flavors";
import { notFound } from "next/navigation";
import { ProductDetails } from "@/components/ProductDetails";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const flavor = flavors.find(f => f.id === slug);

    if (!flavor) return notFound();

    return <ProductDetails flavor={flavor} />;
}
