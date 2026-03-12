import { Metadata } from "next";
import { ServicesPageClient } from "./ServicesPageClient";

export const metadata: Metadata = {
    title: "Services",
    description: "Valiun Ventures delivers world-class software engineering. From custom Agentic AI workflows to resilient cloud architecture.",
    alternates: {
        canonical: "/services",
    },
};

export default function ServicesPage() {
    return <ServicesPageClient />;
}
