import { Metadata } from "next";
import axios from "axios";

export const metadata: Metadata = {
    title: "Terms and Conditions | UtsavVerse",
    description: "Terms and conditions of use for UtsavVerse.",
};

async function getTerms() {
    try {
        const res = await axios.get("https://vamxm.webtechnomind.in/api/v1/mobile/terms-and-conditions");
        return res.data;
    } catch {
        return null;
    }
}

export default async function TermsAndConditionsPage() {
    const data = await getTerms();

    return (
        <main className="min-h-screen bg-white pt-28 pb-16 sm:pt-30 sm:pb-24">
            <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
                <h1 className="section-title text-[38px] sm:text-[56px] mb-8">
                    <span className="display-gradient">{data?.data?.title || "Terms and Conditions"}</span>
                </h1>
                {data?.data?.content ? (
                    <div
                        className="text-black/70 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mb-6 [&_h1]:text-[#d80117] [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:text-[#d80117] [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_li]:mb-1 [&_a]:text-[#d80117] hover:[&_a]:text-[#b00113] [&_strong]:text-black/90 [&_.updated]:text-sm [&_.updated]:text-gray-500 [&_.updated]:block [&_.updated]:mb-6 [&_.no-data]:p-4 [&_.no-data]:bg-gray-100 [&_.no-data]:rounded-lg [&_.no-data]:mb-6"
                        dangerouslySetInnerHTML={{ __html: data.data.content }}
                    />
                ) : (
                    <p>Failed to load content. Please try again later.</p>
                )}
            </div>
        </main>
    );
}
