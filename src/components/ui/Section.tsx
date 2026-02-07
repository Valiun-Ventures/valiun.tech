import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export function Section({ children, className, id, ...props }: SectionProps) {
    return (
        <section
            id={id}
            className={cn(
                "w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-20 lg:py-28",
                className
            )}
            {...props}
        >
            {children}
        </section>
    );
}
