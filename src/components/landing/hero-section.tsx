"use client";

import {
  Download,
  ExternalLink,
  Monitor,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import * as React from "react";
import type { DesktopReleaseInfo } from "@/lib/release";

interface HeroSectionProps {
  version: string;
  apkDownloadUrl: string;
  sizeFormatted: string;
  publishedAt: string;
  desktopRelease?: DesktopReleaseInfo;
}

const SCREENS = [
  {
    id: "home",
    label: "Trang chủ & Lịch học",
    src: "/screenshots/screen_home.png",
    alt: "Màn hình trang chủ UTH Flow và hạn nộp deadlines",
  },
  {
    id: "calendar",
    label: "Lịch tháng",
    src: "/screenshots/screen_calendar.png",
    alt: "Thời khóa biểu dạng lưới tháng trực quan",
  },
  {
    id: "widget",
    label: "Widget màn hình chính",
    src: "/screenshots/screen_widget_home.png",
    alt: "Tiện ích Widget UTH Flow ghim ra màn hình điện thoại",
  },
  {
    id: "gpa",
    label: "Tiến độ tín chỉ",
    src: "/screenshots/screen_gpa.png",
    alt: "Biểu đồ tiến độ hoàn thành tín chỉ chương trình",
  },
  {
    id: "utilities",
    label: "Dịch vụ & LMS",
    src: "/screenshots/screen_utilities.png",
    alt: "Cổng tiện ích và một chạm vào LMS Moodle",
  },
];

export function HeroSection({
  version,
  apkDownloadUrl,
  sizeFormatted,
  desktopRelease,
}: HeroSectionProps) {
  const [activeScreenIndex, setActiveScreenIndex] = React.useState(0);

  const activeScreen = SCREENS[activeScreenIndex];
  const desktopVersion = desktopRelease?.version || "v0.3.0";
  const desktopReleaseUrl =
    desktopRelease?.releaseUrl ||
    "https://github.com/vntez-labs/uth_flow_desktop/releases/latest";

  const windowsDownloadUrl =
    desktopRelease?.windowsExeUrl || desktopReleaseUrl;
  const macDownloadUrl = desktopRelease?.macDmgUrl || desktopReleaseUrl;
  const linuxDownloadUrl =
    desktopRelease?.linuxAppImageUrl ||
    desktopRelease?.linuxDebUrl ||
    desktopReleaseUrl;

  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-14 md:pb-28 overflow-hidden">
      {/* Aurora Ambient Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="aurora-bg aurora-mask" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Release Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/25 text-[#008689] dark:text-[#2DD4BF] text-xs sm:text-sm font-semibold mb-6 shadow-2xs">
          <span className="relative flex size-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full size-2 bg-emerald-500" />
          </span>
          <span>Phiên bản mới nhất {version} (Mobile) & {desktopVersion} (Desktop)</span>
          <span className="opacity-40">•</span>
          <a
            href="https://github.com/vntez-labs/uth_flow/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:opacity-80 inline-flex items-center gap-1 font-bold"
          >
            Changelog <ExternalLink className="size-3" />
          </a>
        </div>

        {/* Main Title - Bold & Modern Typography */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-foreground max-w-4xl mx-auto leading-[1.14]">
          Trợ Lý Sinh Viên{" "}
          <span className="bg-gradient-to-r from-[#008689] via-teal-600 to-emerald-600 dark:from-[#2DD4BF] dark:via-teal-300 dark:to-cyan-200 bg-clip-text text-transparent">
            UTH Flow
          </span>
        </h1>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-col items-center justify-center max-w-2xl mx-auto">
          {/* Main 2 Platform Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full">
            {/* Primary APK Download */}
            <a
              href={apkDownloadUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-2xl bg-[#008689] hover:bg-[#006f72] dark:bg-[#2DD4BF] dark:hover:bg-[#20bbaa] text-white dark:text-[#042f2e] font-extrabold text-sm sm:text-base shadow-xl shadow-teal-700/20 hover:shadow-teal-700/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all cursor-pointer"
            >
              <Smartphone className="size-5 shrink-0" />
              <span className="text-left">
                <span className="block text-[11px] font-medium leading-tight opacity-90">
                  Android 6.0+ ({sizeFormatted})
                </span>
                <span className="block text-sm sm:text-base font-extrabold">
                  Tải file app-release.apk
                </span>
              </span>
              <Download className="size-4.5 shrink-0 ml-1 opacity-90" />
            </a>

            {/* Desktop App Primary CTA */}
            <a
              href={desktopReleaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl border-2 border-border bg-card hover:bg-muted text-foreground font-extrabold text-sm sm:text-base hover:border-primary/40 active:scale-[0.98] transition-all shadow-xs cursor-pointer"
            >
              <Monitor className="size-5 text-primary shrink-0" />
              <span className="text-left">
                <span className="block text-[11px] font-medium leading-tight text-primary">
                  Native Desktop ({desktopVersion})
                </span>
                <span className="block text-sm sm:text-base font-extrabold text-foreground">
                  Tải Bản Cài Cho Máy Tính
                </span>
              </span>
              <Download className="size-4.5 shrink-0 text-muted-foreground ml-1" />
            </a>
          </div>

          {/* Quick Direct One-Click Desktop Downloads (All on 1 single row) */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-muted-foreground text-[11px] font-medium mr-1">
              Tải trực tiếp máy tính:
            </span>

            <a
              href={windowsDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-border bg-card hover:bg-muted hover:border-primary/50 text-foreground font-semibold text-xs transition-all hover:scale-[1.02] shadow-2xs cursor-pointer"
              title="Tải trực tiếp bộ cài đặt Windows (.exe)"
            >
              <span>🪟 Windows (.exe)</span>
              <Download className="size-3 text-muted-foreground" />
            </a>

            <a
              href={macDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-border bg-card hover:bg-muted hover:border-primary/50 text-foreground font-semibold text-xs transition-all hover:scale-[1.02] shadow-2xs cursor-pointer"
              title="Tải trực tiếp bộ cài đặt macOS (.dmg)"
            >
              <span>🍎 macOS (.dmg)</span>
              <Download className="size-3 text-muted-foreground" />
            </a>

            <a
              href={linuxDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-border bg-card hover:bg-muted hover:border-primary/50 text-foreground font-semibold text-xs transition-all hover:scale-[1.02] shadow-2xs cursor-pointer"
              title="Tải trực tiếp bộ cài đặt Linux (.AppImage / .deb)"
            >
              <span>🐧 Linux (.AppImage)</span>
              <Download className="size-3 text-muted-foreground" />
            </a>
          </div>
        </div>

        {/* ----------------- REAL APP SCREENSHOT SHOWCASE IN HERO ----------------- */}
        <div className="mt-12 sm:mt-16 relative max-w-5xl mx-auto">
          {/* Ambient Spotlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[420px] bg-primary/10 blur-[130px] rounded-full pointer-events-none -z-10" />

          {/* Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {SCREENS.map((item, idx) => (
              <button
                type="button"
                key={item.id}
                onClick={() => setActiveScreenIndex(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeScreenIndex === idx
                    ? "bg-[#008689] dark:bg-[#2DD4BF] text-white dark:text-[#042f2e] shadow-md shadow-teal-700/20 scale-105"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border hover:border-primary/40"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Triple Screen Layered Composition */}
          <div className="relative flex items-center justify-center pt-2">
            {/* Left Preview Screen (Desktop Only) */}
            <button
              type="button"
              aria-label="Xem ảnh màn hình trước"
              className="hidden lg:block absolute left-8 w-[270px] aspect-[9/20] rounded-[40px] bg-slate-900 p-2.5 shadow-2xl ring-1 ring-border/60 opacity-60 -rotate-6 translate-y-6 hover:opacity-95 hover:scale-105 hover:z-20 transition-all duration-300 cursor-pointer text-left"
              onClick={() =>
                setActiveScreenIndex(
                  (activeScreenIndex - 1 + SCREENS.length) % SCREENS.length,
                )
              }
            >
              <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-background">
                <Image
                  src={
                    SCREENS[
                      (activeScreenIndex - 1 + SCREENS.length) % SCREENS.length
                    ].src
                  }
                  alt="Ảnh ứng dụng UTH Flow"
                  fill
                  className="object-cover"
                  sizes="270px"
                />
              </div>
            </button>

            {/* Main Center Smartphone Frame */}
            <div className="relative z-10 w-full max-w-[320px] sm:max-w-[350px] aspect-[9/20] rounded-[48px] bg-gradient-to-b from-slate-800 via-slate-900 to-black p-3 sm:p-3.5 device-shadow ring-1 ring-white/20 ring-offset-4 ring-offset-background">
              {/* Dynamic camera notch */}
              <div className="absolute top-4.5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30 flex items-center justify-center">
                <div className="size-2 rounded-full bg-slate-900 border border-slate-700/80" />
              </div>

              {/* Inner Smartphone Screen */}
              <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-background border border-border/40 shadow-inner">
                <Image
                  src={activeScreen.src}
                  alt={activeScreen.alt}
                  fill
                  priority
                  loading="eager"
                  className="object-cover transition-opacity duration-300"
                  sizes="(max-width: 640px) 320px, 350px"
                />
              </div>
            </div>

            {/* Right Preview Screen (Desktop Only) */}
            <button
              type="button"
              aria-label="Xem ảnh màn hình tiếp theo"
              className="hidden lg:block absolute right-8 w-[270px] aspect-[9/20] rounded-[40px] bg-slate-900 p-2.5 shadow-2xl ring-1 ring-border/60 opacity-60 rotate-6 translate-y-6 hover:opacity-95 hover:scale-105 hover:z-20 transition-all duration-300 cursor-pointer text-left"
              onClick={() =>
                setActiveScreenIndex((activeScreenIndex + 1) % SCREENS.length)
              }
            >
              <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-background">
                <Image
                  src={SCREENS[(activeScreenIndex + 1) % SCREENS.length].src}
                  alt="Ảnh ứng dụng UTH Flow"
                  fill
                  className="object-cover"
                  sizes="270px"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
