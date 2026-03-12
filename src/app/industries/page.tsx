import { Metadata } from "next";
import { IndustriesPageClient } from "./IndustriesPageClient";

export const metadata: Metadata = {
    title: "Industries | Valiun Ventures",
    description: "Discover how Valiun Ventures transforms industries with next-generation software engineering and intelligent systems.",
    alternates: {
        canonical: "/industries",
    },
};

export default function IndustriesPage() {
    return <IndustriesPageClient />;
}
