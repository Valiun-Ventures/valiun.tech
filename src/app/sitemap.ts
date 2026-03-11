import { MetadataRoute } from "next";
import { navigation, NavItem } from "@/lib/navigation";

const baseUrl = "https://valiun.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const urls: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
    ];

    // Recursive function to extract all hrefs from the navigation structure
    const extractUrls = (items: NavItem[]) => {
        for (const item of items) {
            if (item.href && item.href !== "#") {
                // Determine priority and change frequency based on path depth
                const depth = item.href.split("/").filter(Boolean).length;

                let priority = 0.8;
                let changeFrequency: "daily" | "weekly" | "monthly" | "yearly" = "monthly";

                if (depth === 1) {
                    // Top level pages like /services, /industries
                    priority = 0.9;
                    changeFrequency = "weekly";
                } else if (depth === 2) {
                    // Mid level pages like /services/ai-automation
                    priority = 0.8;
                    changeFrequency = "weekly";
                } else {
                    // Deep pages
                    priority = 0.7;
                    changeFrequency = "monthly";
                }

                urls.push({
                    url: `${baseUrl}${item.href}`,
                    lastModified: new Date(),
                    changeFrequency,
                    priority,
                });
            }
            if (item.children) {
                extractUrls(item.children);
            }
        }
    };

    extractUrls(navigation);

    // Deduplicate URLs just in case multiple nav items point to the same href
    const uniqueUrls = urls.filter(
        (value, index, self) => self.findIndex((t) => t.url === value.url) === index
    );

    return uniqueUrls;
}
