"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import { m } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";

const featuredBlogs = [
    {
        id: 1,
        title: "The Future of Agentic AI in Enterprise Software",
        excerpt: "Discover how autonomous AI agents are revolutionizing business processes and decision-making in modern enterprises.",
        category: "AI & Automation",
        date: "Jan 25, 2026",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
        href: "/blog/future-of-agentic-ai"
    },
    {
        id: 2,
        title: "Building Scalable SaaS Applications with Next.js 15",
        excerpt: "Learn the best practices and architecture patterns for creating high-performance SaaS platforms using the latest Next.js features.",
        category: "Web Development",
        date: "Jan 22, 2026",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
        href: "/blog/scalable-saas-nextjs"
    },
    {
        id: 3,
        title: "Cloud Migration Strategies for Modern Businesses",
        excerpt: "A comprehensive guide to successfully migrating your infrastructure to the cloud with minimal downtime and maximum efficiency.",
        category: "DevOps & Cloud",
        date: "Jan 20, 2026",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
        href: "/blog/cloud-migration-strategies"
    }
];

export function BlogsPreview() {
    return (
        <Section className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            Latest{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                                Insights
                            </span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Expert perspectives on technology, innovation, and digital transformation
                        </p>
                    </Reveal>
                </div>

                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {featuredBlogs.map((blog, index) => (
                        <Reveal key={blog.id} delay={index * 0.1}>
                            <Link href={blog.href}>
                                <m.article
                                    whileHover={{ y: -8 }}
                                    transition={{ duration: 0.3 }}
                                    className="group h-full flex flex-col rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 overflow-hidden transition-all"
                                >
                                    {/* Image */}
                                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                                        <Image
                                            src={blog.image}
                                            alt={blog.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 text-xs font-semibold bg-blue-600/90 backdrop-blur-sm text-white rounded-full">
                                                {blog.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 p-6 flex flex-col">
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                                            {blog.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-1">
                                            {blog.excerpt}
                                        </p>

                                        {/* Meta */}
                                        <div className="flex items-center gap-4 text-xs text-gray-500 pt-4 border-t border-white/5">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {blog.date}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-3.5 h-3.5" />
                                                {blog.readTime}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Read More Arrow */}
                                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowRight className="w-5 h-5 text-blue-400" />
                                    </div>
                                </m.article>
                            </Link>
                        </Reveal>
                    ))}
                </div>

                {/* CTA */}
                <Reveal delay={0.3}>
                    <div className="text-center">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                        >
                            Read All Articles
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </Reveal>
            </div>
        </Section>
    );
}
