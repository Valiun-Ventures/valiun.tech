export type NavItem = {
    label: string;
    href: string;
    description?: string;
    children?: NavItem[];
};

export const navigation: NavItem[] = [
    {
        label: "Services",
        href: "/services",
        children: [
            {
                label: "AI & Automation",
                href: "/services/ai-automation",
                children: [
                    { label: "Generative AI Development", href: "/services/ai-automation/generative-ai" },
                    { label: "AI Chatbot Development", href: "/services/ai-automation/ai-chatbot" },
                    { label: "Agentic AI Solutions", href: "/services/ai-automation/agentic-ai" },
                    { label: "AI Integration Services", href: "/services/ai-automation/ai-integration" },
                ]
            },
            {
                label: "Web Development",
                href: "/services/web-development",
                children: [
                    { label: "Custom Web Development", href: "/services/web-development/custom" },
                    { label: "SaaS Development", href: "/services/web-development/saas" },
                    { label: "CMS Development", href: "/services/web-development/cms" },
                    { label: "E-Commerce Development", href: "/services/web-development/ecommerce" },
                ]
            },
            {
                label: "Mobile App Development",
                href: "/services/mobile-app-development",
                children: [
                    { label: "iOS App Development", href: "/services/mobile-app-development/ios" },
                    { label: "Android App Development", href: "/services/mobile-app-development/android" },
                    { label: "Cross-Platform Apps", href: "/services/mobile-app-development/cross-platform" },
                ]
            },
            {
                label: "DevOps & Cloud",
                href: "/services/devops-cloud",
                children: [
                    { label: "Cloud Migration", href: "/services/devops-cloud/migration" },
                    { label: "AWS / Azure / GCP", href: "/services/devops-cloud/providers" },
                    { label: "CI/CD Automation", href: "/services/devops-cloud/ci-cd" },
                ]
            },
            {
                label: "Data & Analytics",
                href: "/services/data-analytics",
                children: [
                    { label: "Data Engineering", href: "/services/data-analytics/engineering" },
                    { label: "Business Intelligence", href: "/services/data-analytics/bi" },
                    { label: "Power BI / Tableau", href: "/services/data-analytics/visualization" },
                ]
            },
            {
                label: "UI/UX Design",
                href: "/services/ui-ux-design",
                children: [
                    { label: "Product Design", href: "/services/ui-ux-design/product" },
                    { label: "UX Research", href: "/services/ui-ux-design/research" },
                    { label: "UI Prototyping", href: "/services/ui-ux-design/prototyping" },
                ]
            },
            {
                label: "QA & Testing",
                href: "/services/qa-testing",
                children: [
                    { label: "Manual Testing", href: "/services/qa-testing/manual" },
                    { label: "Automation Testing", href: "/services/qa-testing/automation" },
                ]
            },
            {
                label: "Cybersecurity",
                href: "/services/cybersecurity",
                children: [
                    { label: "App Security", href: "/services/cybersecurity/app-security" },
                    { label: "Cloud Security", href: "/services/cybersecurity/cloud-security" },
                ]
            }
        ],
    },
    {
        label: "Industries",
        href: "/industries",
        children: [
            { label: "FinTech", href: "/industries/fintech" },
            { label: "Healthcare IT", href: "/industries/healthcare" },
            { label: "EdTech", href: "/industries/edtech" },
            { label: "HRTech", href: "/industries/hrtech" },
            { label: "Real Estate", href: "/industries/real-estate" },
            { label: "Travel & Hospitality", href: "/industries/travel-hospitality" },
            { label: "E-Commerce", href: "/industries/e-commerce" },
            { label: "Enterprise", href: "/industries/enterprise" },
        ],
    },
    {
        label: "Technologies",
        href: "/technologies",
    },
    {
        label: "Solutions",
        href: "/solutions",
        children: [
            { label: "Startup MVP", href: "/solutions/startup-mvp" },
            { label: "Enterprise Digital Transformation", href: "/solutions/enterprise-digital-transformation" },
            { label: "SaaS Product Development", href: "/solutions/saas-product" },
            { label: "Legacy Modernization", href: "/solutions/legacy-modernization" },
            { label: "AI-Driven Automation", href: "/solutions/ai-automation" },
        ]
    },
    {
        label: "Case Studies",
        href: "/case-studies",
    },
    {
        label: "Blog",
        href: "/blog",
    },
    {
        label: "Company",
        href: "/company",
        children: [
            { label: "About Us", href: "/company/about" },
            { label: "Why Choose Us", href: "/company/why-choose-us" },
            { label: "Careers", href: "/company/careers" },
            { label: "Contact", href: "/contact" },
        ]
    }
];
