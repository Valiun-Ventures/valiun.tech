import { Users, Megaphone, FileText, Search, UserCheck, Trophy } from "lucide-react";

export interface Job {
    id: string;
    title: string;
    category: string;
    location: string;
    type: string;
    experience: string;
    posted: string;
    description: string;
    image: string;
    categoryIcon: string;
    content: {
        about: string;
        responsibilities: string[];
        requirements: string[];
        benefits: {
            title: string;
            description: string;
            icon: string;
        }[];
    };
}

export const jobs: Job[] = [
    {
        id: "hr-executive",
        title: "Human Resources Executive",
        category: "Operations",
        location: "Indore (On-site)",
        type: "Full-Time",
        experience: "Relevant Exp.",
        posted: "1d ago",
        description: "Manage HR operations, recruitment, and employee engagement while fostering a positive workplace culture.",
        image: "/images/careers/hr-executive.png",
        categoryIcon: "users",
        content: {
            about: "Valiun Ventures is a comprehensive digital product development partner offering end-to-end services including AI & Automation, Web and Mobile App Development, Data Analytics, DevOps & Cloud Solutions, Cybersecurity, and UI/UX Design.\n\nWith expertise across FinTech, Healthcare IT, EdTech, Real Estate, and more, we deliver outcome-driven solutions such as Startup MVPs, Enterprise Digital Transformation, SaaS Product Development, and Legacy Modernization. Our team combines strong engineering capabilities with product-focused thinking to create innovative, scalable, and impactful solutions.\n\nRole Overview:\nWe are looking for a dynamic and detail-oriented Human Resources Executive to join our Indore office. This role involves managing HR operations, recruitment, employee engagement, compliance, and performance management processes while fostering a positive workplace culture.",
            responsibilities: [
                "Manage day-to-day HR operations and administrative processes.",
                "Draft, implement, and update company policies and internal frameworks.",
                "Ensure compliance with labor laws and company standards.",
                "Handle end-to-end recruitment for IT and non-IT roles.",
                "Source, screen, and coordinate interviews with candidates.",
                "Manage offer letters, appointment letters, contracts, and onboarding documentation.",
                "Maintain accurate employee records and HR documentation.",
                "Support employee engagement, conflict resolution, and retention initiatives.",
                "Assist in performance management and employee development programs."
            ],
            requirements: [
                "Bachelor’s degree in Human Resources, Business Administration, or related field.",
                "Strong understanding of HR operations and employee relations.",
                "Proven experience in IT industry recruitment.",
                "Proficiency in employee documentation and HR record management.",
                "Strong communication, interpersonal, and problem-solving skills.",
                "Experience with HR tools and software is a plus.",
                "HR certifications such as PHR or SHRM-CP are an advantage."
            ],
            benefits: [
                {
                    title: "5-day Working Week",
                    description: "Enjoy a balanced life with our Monday to Friday work schedule.",
                    icon: "schedule"
                },
                {
                    title: "Competitive Salary",
                    description: "We offer a package that matches your skills and experience.",
                    icon: "payments"
                },
                {
                    title: "Growth Environment",
                    description: "Work in a fast-growing tech company with a collaborative culture.",
                    icon: "trending_up"
                },
                {
                    title: "Impactful Work",
                    description: "Contribute to innovative solutions for global clients.",
                    icon: "rocket"
                }
            ]
        }
    },
    {
        id: "junior-seo-specialist",
        title: "Junior SEO Specialist",
        category: "Marketing",
        location: "Indore (On-site)",
        type: "Full-Time",
        experience: "0.6 – 1.5 Years",
        posted: "2d ago",
        description: "Handle on-page/off-page SEO, keyword research, and performance tracking.",
        image: "/images/careers/seo-specialist.png",
        categoryIcon: "megaphone",
        content: {
            about: "Valiun Ventures is a comprehensive digital product development partner offering services in AI & Automation, Web and Mobile App Development, Data Analytics, DevOps & Cloud Solutions, Cybersecurity, and UI/UX Design. We work across industries including FinTech, Healthcare IT, EdTech, Real Estate, and more, delivering scalable and outcome-driven digital solutions.\n\nRole Overview:\nWe are looking for a motivated and detail-oriented Junior SEO Specialist with 6 months to 1.5 years of hands-on experience. The ideal candidate should have a strong understanding of on-page and off-page SEO techniques, keyword research, and performance tracking. This role offers an excellent opportunity to grow within a fast-paced digital environment.",
            responsibilities: [
                "Conduct keyword research using tools like Google Keyword Planner, Ahrefs, SEMrush, or similar.",
                "Perform on-page optimization including meta tags, headings, internal linking, and content optimization.",
                "Implement off-page SEO strategies including backlink building and outreach.",
                "Optimize website content for better search engine visibility and rankings.",
                "Monitor website performance using Google Analytics and Google Search Console.",
                "Track rankings, traffic, and conversions and prepare SEO performance reports.",
                "Conduct competitor analysis and identify growth opportunities.",
                "Collaborate with content, development, and marketing teams to implement SEO best practices."
            ],
            requirements: [
                "0.6 to 1.5 years of practical SEO experience.",
                "Basic understanding of on-page, off-page, and technical SEO.",
                "Familiarity with SEO tools such as Google Analytics, Google Search Console, Ahrefs, SEMrush, etc.",
                "Knowledge of keyword research and content optimization techniques.",
                "Basic understanding of HTML and website structure is a plus.",
                "Strong analytical and problem-solving skills.",
                "Good written and verbal communication skills.",
                "Experience working on WordPress or other CMS platforms is a plus.",
                "Understanding of local SEO and schema markup is a plus."
            ],
            benefits: [
                {
                    title: "5-day Working Week",
                    description: "Enjoy a balanced life with our Monday to Friday work schedule.",
                    icon: "schedule"
                },
                {
                    title: "Competitive Salary",
                    description: "We offer a package that matches your skills and experience.",
                    icon: "payments"
                },
                {
                    title: "Growth Environment",
                    description: "Work in a fast-growing tech company with a collaborative culture.",
                    icon: "trending_up"
                },
                {
                    title: "Impactful Work",
                    description: "Contribute to innovative solutions for global clients.",
                    icon: "rocket"
                }
            ]
        }
    }
];
