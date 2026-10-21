"use client";

import { Download, Menu, Monitor, Smartphone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { GithubIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  apkDownloadUrl: string;
  version: string;
}

export function Navbar({ apkDownloadUrl, version }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Bản máy tính", href: "#desktop-version" },
    { label: "Tải ứng dụng", href: "#download" },
    { label: "Cài đặt", href: "#install-guide" },
    { label: "Hỏi đáp", href: "#faq" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-xs"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative size-9 rounded-xl overflow-hidden shadow-xs ring-1 ring-border group-hover:scale-105 transition-transform duration-200">
            <Image
              src="/app_logo.png"
              alt="UTH Flow Logo"
              width={36}
              height={36}
              className="object-cover"
              priority
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-foreground">
              UTH <span className="text-primary font-bold">Flow</span>
            </span>
            <Badge
              variant="outline"
              className="hidden sm:inline-flex text-[11px] font-mono border-primary/30 text-primary bg-primary/5 py-0 px-1.5"
            >
              {version}
            </Badge>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground/75">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA & Actions */}
        <div className="hidden md:flex items-center gap-2.5">
          <ThemeToggle />

          <a
            href="https://github.com/vntez-labs/uth_flow"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
            title="Mã nguồn GitHub"
            aria-label="GitHub Repository"
          >
            <GithubIcon className="size-4" />
          </a>

          <a
            href="#download"
            className="inline-flex items-center justify-center gap-1.5 bg-[#008689] hover:bg-[#006f72] dark:bg-[#2DD4BF] dark:hover:bg-[#20bbaa] text-white dark:text-[#042f2e] font-bold px-4 py-2 rounded-xl text-xs sm:text-sm shadow-sm hover:opacity-90 active:scale-95 transition-all cursor-pointer"
          >
            <Download className="size-4" />
            <span>Tải ứng dụng</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Mở menu điều hướng"
          >
            {mobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background/95 backdrop-blur-lg px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium rounded-lg text-foreground hover:bg-muted transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-border flex flex-col gap-2">
            <a
              href={apkDownloadUrl}
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold py-2.5 rounded-xl text-sm shadow-sm"
            >
              <Smartphone className="size-4" />
              Tải APK cho Android ({version})
            </a>
            <Link
              href="#desktop-version"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 border border-border bg-muted/50 text-foreground font-medium py-2.5 rounded-xl text-sm hover:bg-muted"
            >
              <Monitor className="size-4" />
              Tải bản máy tính Native (Desktop)
            </Link>
            <a
              href="https://github.com/vntez-labs/uth_flow"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 text-xs text-muted-foreground py-2"
            >
              <GithubIcon className="size-3.5" />
              Mã nguồn mở trên GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
