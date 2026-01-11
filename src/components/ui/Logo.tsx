import Image from "next/image";
import Link from "next/link";

interface LogoProps {
    variant?: "black" | "white";
    className?: string;
}

export function Logo({ variant = "white", className }: LogoProps) {
    return (
        <Link href="/" className={`relative block w-32 h-10 ${className}`}>
            <Image
                src={variant === "white" ? "/images/logo-white.png" : "/images/logo-black.png"}
                alt="Valiun Tech"
                fill
                className="object-contain"
                priority
            />
        </Link>
    );
}
