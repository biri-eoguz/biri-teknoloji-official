"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { headerLinks } from "@/constants/header-links";
import Text from "@/components/text";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const BACKGROUND_CHANGE_THRESHOLD = 32;

export default function LayoutHeader() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > BACKGROUND_CHANGE_THRESHOLD);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "w-full h-[72px] transition-colors duration-100 bg-transparent",
        "sticky top-0 z-50",
        isScrolled && "bg-[#2c1e4a]"
      )}
    >
      <LayoutHeaderContent>
        <LayoutHeaderLogo />
        <div className="hidden md:block">
          <div className="flex items-center gap-4">
            {headerLinks.map((link) => (
              <LayoutHeaderLink key={link.href} {...link} />
            ))}
          </div>
        </div>
      </LayoutHeaderContent>
    </header>
  );
}

function LayoutHeaderContent({ children }: { children: React.ReactNode }) {
  return (
    <nav className="flex items-center justify-center md:justify-between gap-6 w-full h-full responsive-horizontal">
      {children}
    </nav>
  );
}

function LayoutHeaderLogo() {
  return (
    <figure className="min-w-[120px] min-h-[120px] max-w-[120px] max-h-[120px] select-none">
      <Image
        src="/vectors/logo.png"
        alt=""
        width={120}
        height={120}
        className="w-full h-full object-contain"
      />
    </figure>
  );
}

function LayoutHeaderLink({ title, href }: { title: string; href: string }) {
  return (
    <Link href={href}>
      <Button
        className="bg-transparent hover:bg-transparent hover:cursor-pointer transition-all duration-250 hover:scale-[1.1]"
        variant="ghost"
      >
        <Text weight="semibold">{title}</Text>
      </Button>
    </Link>
  );
}
