import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import { m } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import Image from "next/image";

const blogPosts = [
    {
        id: 1,
        title: "The Future of Agentic AI in Enterprise Software",
        excerpt: "Discover how autonomous AI agents are revolutionizing business processes and decision-making in modern enterprises. Learn about the latest trends and implementation strategies.",
        category: "AI & Automation",
        date: "Jan 25, 2026",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
        href: "/blog/future-of-agentic-ai",
        featured: true
    },
    {
        id: 2,
        title: "Building Scalable SaaS Applications with Next.js 15",
        excerpt: "Learn the best practices and architecture patterns for creating high-performance SaaS platforms using the latest Next.js features and server components.",
        category: "Web Development",
        date: "Jan 22, 2026",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
        href: "/blog/scalable-saas-nextjs",
        featured: true
    },
    {
        id: 3,
        title: "Cloud Migration Strategies for Modern Businesses",
        excerpt: "A comprehensive guide to successfully migrating your infrastructure to the cloud with minimal downtime and maximum efficiency.",
        category: "DevOps & Cloud",
        date: "Jan 20, 2026",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
        href: "/blog/cloud-migration-strategies",
        featured: false
    },
    {
        id: 4,
        title: "Microservices Architecture: Best Practices for 2026",
        excerpt: "Explore modern microservices patterns, containerization strategies, and orchestration techniques for building resilient distributed systems.",
        category: "Architecture",
        date: "Jan 18, 2026",
        readTime: "10 min read",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
        href: "/blog/microservices-best-practices",
        featured: false
    },
    {
        id: 5,
        title: "Securing Your API: Authentication & Authorization Guide",
        excerpt: "Deep dive into modern API security practices including OAuth 2.0, JWT tokens, and zero-trust architecture implementation.",
        category: "Security",
        date: "Jan 15, 2026",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
        href: "/blog/api-security-guide",
        featured: false
    },
    {
        id: 6,
        title: "The Rise of Edge Computing in Web Applications",
        excerpt: "Understanding how edge computing is transforming web performance and user experience with reduced latency and improved reliability.",
        category: "Web Development",
        date: "Jan 12, 2026",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
        href: "/blog/edge-computing-web-apps",
        featured: false
    }
];

const categories = ["All", "AI & Automation", "Web Development", "DevOps & Cloud", "Architecture", "Security"];

export default function BlogPage() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <Section className="text-center">
                <Reveal>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Tech Insights &{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                            Innovation
                        </span>
                    </h1>
                </Reveal>
                <Reveal delay={0.1}>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                        Expert perspectives on technology, software development, and digital transformation
                    </p>
                </Reveal>

                {/* Search Bar */}
                <Reveal delay={0.2}>
                    <div className="max-w-2xl mx-auto mb-8">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                            />
                        </div>
                    </div>
                </Reveal>

                {/* Categories */}
                <Reveal delay={0.3}>
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className="px-6 py-2 bg-white/5 border border-white/10 hover:border-blue-500/50 rounded-full text-sm font-medium text-gray-300 hover:text-white transition-all"
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </Reveal>
            </Section>

            {/* Featured Posts */}
            <Section>
                <Reveal>
                    <h2 className="text-2xl md:text-3xl font-bold mb-8">Featured Articles</h2>
                </Reveal>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {blogPosts.filter(post => post.featured).map((post, index) => (
                        <Reveal key={post.id} delay={index * 0.1}>
                            <Link href={post.href}>
                                <article className="group h-full flex flex-col rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 overflow-hidden transition-all hover:shadow-lg hover:shadow-blue-500/10">
                                    {/* Image */}
                                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 text-xs font-semibold bg-blue-600/90 backdrop-blur-sm text-white rounded-full">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 p-8 flex flex-col">
                                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-400 mb-6 flex-1">
                                            {post.excerpt}
                                        </p>

                                        {/* Meta */}
                                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    {post.date}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    {post.readTime}
                                                </div>
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </Section>

            {/* All Posts */}
            <Section>
                <Reveal>
                    <h2 className="text-2xl md:text-3xl font-bold mb-8">All Articles</h2>
                </Reveal>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <Reveal key={post.id} delay={index * 0.05}>
                            <Link href={post.href}>
                                <article className="group h-full flex flex-col rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 overflow-hidden transition-all hover:-translate-y-2">
                                    {/* Image */}
                                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 text-xs font-semibold bg-blue-600/90 backdrop-blur-sm text-white rounded-full">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 p-6 flex flex-col">
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-1">
                                            {post.excerpt}
                                        </p>

                                        {/* Meta */}
                                        <div className="flex items-center gap-4 text-xs text-gray-500 pt-4 border-t border-white/5">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {post.date}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-3.5 h-3.5" />
                                                {post.readTime}
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </Section>

            {/* Newsletter CTA */}
            <Section>
                <Reveal>
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 p-12 text-center">
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,107,247,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shine_4s_linear_infinite]" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Stay Updated
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                                Get the latest insights on technology and innovation delivered to your inbox
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                                />
                                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </Section>
        </div>
    );
}
