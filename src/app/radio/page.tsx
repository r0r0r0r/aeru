import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function RadioPage() {
    return (
        <main className="min-h-screen bg-[var(--c-background)]">
            <Navigation />
            <div className="pt-32 pb-24 px-6 min-h-[60vh] flex flex-col items-center justify-center text-center">
                <h1 className="font-[Arial_Black] text-6xl md:text-9xl uppercase tracking-tighter mb-4 text-[var(--c-brand-violet)]">
                    AERU RADIO
                </h1>
                <div className="bg-[var(--c-brand-violet)] text-white px-4 py-2 font-bold uppercase rotate-3">
                    OFF AIR
                </div>
                <p className="mt-8 max-w-2xl font-medium text-xl">
                    Curated frequencies for high-speed hydration. Lo-fi beats, jungle rhythms, and static noise.
                </p>
            </div>
            <Footer />
        </main>
    );
}
