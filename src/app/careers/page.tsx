import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-[var(--c-background)]">
            <Navigation />
            <div className="pt-32 pb-24 px-6 min-h-[60vh] flex flex-col items-center justify-center text-center">
                <h1 className="font-[Arial_Black] text-6xl md:text-9xl uppercase tracking-tighter mb-4 text-gray-400">
                    CAREERS
                </h1>
                <div className="bg-black text-white px-4 py-2 font-bold uppercase rotate-1">
                    NO VACANCIES
                </div>
                <p className="mt-8 max-w-2xl font-medium text-xl">
                    The cult is currently full. Check back when someone drops out.
                </p>
            </div>
            <Footer />
        </main>
    );
}
