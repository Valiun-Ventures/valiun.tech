import Link from "next/link";
import Image from "next/image";

interface LogoProps {
    variant?: "black" | "white";
    className?: string;
}

export function Logo({ className }: LogoProps) {
    return (
        <Link
            href="/"
            className={`flex items-center ${className}`}
        >
            <Image
                src="https://ik.imagekit.io/q0gorn2pwv/Untitled%20design%20(19)%20(6).png"
                alt="Valiun Logo"
                width={160}
                height={50}
                className="h-12 w-auto md:h-14"
                priority
            />
        </Link>
    );
}
