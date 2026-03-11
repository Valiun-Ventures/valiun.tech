import { Metadata } from "next";
import { SolutionsPageClient } from "./SolutionsPageClient";

export const metadata: Metadata = {
    title: "Solutions | Valiun Ventures",
    description: "Tailored software solutions designed for maximum business impact. From startup MVPs to enterprise modernization.",
};

export default function SolutionsPage() {
    return <SolutionsPageClient />;
}
