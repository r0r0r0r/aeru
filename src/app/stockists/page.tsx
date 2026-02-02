import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function StockistsPage() {
    return (
        <main className="min-h-screen bg-[var(--c-background)]">
            <Navigation />
            <div className="pt-32 pb-24 px-6 min-h-[60vh] flex flex-col items-center justify-center text-center">
                <h1 className="font-[Arial_Black] text-6xl md:text-9xl uppercase tracking-tighter mb-4 text-[var(--c-brand-pink)]">
                    STOCKISTS
                </h1>
                <div className="bg-[var(--c-brand-pink)] text-white px-4 py-2 font-bold uppercase -rotate-1">
                    LOCATION SCOUTING
                </div>
                <p className="mt-8 max-w-2xl font-medium text-xl">
                    Global domination is in progress. Currently infiltrating select bodegas in Tokyo, NYC, and Berlin.
                </p>
            </div>
            <Footer />
        </main>
    );
}
