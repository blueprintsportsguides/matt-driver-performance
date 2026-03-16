"use client";

import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  scrolled?: boolean;
  className?: string;
}

export default function Logo({ scrolled = false, className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center group ${className}`}
      aria-label="Matt Driver Performance - Home"
    >
      <Image
        src="/logo-wordmark-2.png"
        alt="Matt Driver Performance"
        width={220}
        height={48}
        className="h-10 w-auto object-contain object-left"
        priority
      />
    </Link>
  );
}
