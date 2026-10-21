"use client";

import {
  AlertCircle,
  Download,
  ExternalLink,
  Monitor,
  Smartphone,
  CheckCircle2,
  Laptop,
} from "lucide-react";
import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IosModal } from "./ios-modal";
import type { DesktopReleaseInfo } from "@/lib/release";

interface DownloadSectionProps {
  version: string;
  apkDownloadUrl: string;
  sizeFormatted: string;
  releaseUrl: string;
  desktopRelease?: DesktopReleaseInfo;
}

export function DownloadSection({
  version,
  apkDownloadUrl,
  sizeFormatted,
  releaseUrl,
  desktopRelease,
}: DownloadSectionProps) {
  const [showIosModal, setShowIosModal] = React.useState(false);

  const desktopVersion = desktopRelease?.version || "v0.3.0";
  const desktopReleaseUrl =
    desktopRelease?.releaseUrl ||
    "https://github.com/vntez-labs/uth_flow_desktop/releases/latest";

  return (
    <section id="download" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge
            variant="outline"
            className="border-primary/40 text-primary bg-primary/5 mb-3"
          >
            Tải về
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-foreground tracking-tight">
            Nền Tảng Hỗ Trợ
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            Tải gói APK cho Android hoặc bộ cài đặt Native cho máy tính (Windows, macOS, Linux).
          </p>
        </div>

        {/* 3 Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Card 1: Android */}
          <div className="rounded-3xl bg-card border-2 border-[#008689] shadow-xl shadow-teal-500/10 p-6 sm:p-7 flex flex-col justify-between text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#008689] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
              Khuyên dùng
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-1">
                <div className="size-12 rounded-2xl bg-teal-500/10 text-[#008689] dark:text-[#2DD4BF] flex items-center justify-center font-bold">
                  <Smartphone className="size-6" />
                </div>
                <Badge
                  variant="outline"
                  className="border-primary/40 text-primary text-xs font-mono"
                >
                  {version}
                </Badge>
              </div>

              <h3 className="font-heading font-extrabold text-lg text-foreground">
                Android (APK)
              </h3>
              <p className="text-xs text-muted-foreground mt-1 mb-4 leading-relaxed">
                Cài đặt trực tiếp file APK cho điện thoại và máy tính bảng Android 6.0 trở lên.
              </p>

              <div className="space-y-2 py-3.5 border-y border-border text-xs text-foreground/85">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
                  <span>Dung lượng siêu gọn: {sizeFormatted}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
                  <span>Tự động đồng bộ thời khóa biểu & LMS SSO</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
                  <span>Hỗ trợ Widget trực quan ngoài màn hình chính</span>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-2.5">
              <a
                href={apkDownloadUrl}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#008689] hover:bg-[#006f72] text-white font-bold text-xs shadow-md shadow-teal-700/20 active:scale-[0.98] transition-all cursor-pointer"
              >
                <Download className="size-4" />
                <span>Tải app-release.apk ({sizeFormatted})</span>
              </a>

              <a
                href="#install-guide"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl border border-border bg-muted/40 hover:bg-muted text-foreground text-xs font-semibold transition-colors"
              >
                <span>Xem hướng dẫn cài đặt 3 bước</span>
              </a>
            </div>
          </div>

          {/* Card 2: Desktop (Windows, macOS, Linux) */}
          <div className="rounded-3xl bg-card border border-border hover:border-primary/40 transition-colors p-6 sm:p-7 flex flex-col justify-between text-left shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="size-12 rounded-2xl bg-teal-500/10 text-primary flex items-center justify-center font-bold">
                  <Monitor className="size-6" />
                </div>
                <Badge
                  variant="outline"
                  className="border-primary/40 text-primary bg-primary/5 text-[11px] font-mono font-semibold"
                >
                  {desktopVersion} Native
                </Badge>
              </div>

              <h3 className="font-heading font-extrabold text-lg text-foreground">
                Máy tính / Desktop
              </h3>
              <p className="text-xs text-muted-foreground mt-1 mb-4 leading-relaxed">
                Ứng dụng Native độc lập cho Windows, macOS và Linux xây dựng với Rust + Tauri v2.
              </p>

              <div className="space-y-2 py-3.5 border-y border-border text-xs text-foreground/85">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
                  <span>Dung lượng siêu nhẹ: ~10MB (Rust + Tauri v2)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
                  <span>Bao quát thời khóa biểu tuần & deadline LMS</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
                  <span>Tự động thông báo cập nhật (In-app updater)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-2.5">
              {/* Primary Download Button */}
              <a
                href={desktopReleaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-card hover:bg-muted border-2 border-primary text-primary font-bold text-xs shadow-xs active:scale-[0.98] transition-all cursor-pointer"
              >
                <Download className="size-4" />
                <span>Tải bộ cài đặt Desktop ({desktopVersion})</span>
              </a>

              {/* Direct OS Links */}
              <div className="grid grid-cols-3 gap-1.5 pt-1">
                <a
                  href={desktopRelease?.windowsExeUrl || desktopReleaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-center rounded-lg border border-border bg-muted/30 hover:bg-muted text-[11px] font-semibold text-foreground transition-colors"
                  title="Tải cho Windows (.exe)"
                >
                  🪟 Windows
                </a>
                <a
                  href={desktopRelease?.macDmgUrl || desktopReleaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-center rounded-lg border border-border bg-muted/30 hover:bg-muted text-[11px] font-semibold text-foreground transition-colors"
                  title="Tải cho macOS (.dmg)"
                >
                  🍎 macOS
                </a>
                <a
                  href={
                    desktopRelease?.linuxAppImageUrl ||
                    desktopRelease?.linuxDebUrl ||
                    desktopReleaseUrl
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-center rounded-lg border border-border bg-muted/30 hover:bg-muted text-[11px] font-semibold text-foreground transition-colors"
                  title="Tải cho Linux (.deb / .AppImage)"
                >
                  🐧 Linux
                </a>
              </div>

              <a
                href={desktopReleaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 text-muted-foreground hover:text-foreground text-[11px] font-medium transition-colors"
              >
                <span>Xem kho phát hành trên GitHub</span>
                <ExternalLink className="size-3" />
              </a>
            </div>
          </div>

          {/* Card 3: iOS / iPhone */}
          <div className="rounded-3xl bg-card border border-amber-500/30 p-6 sm:p-7 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="size-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                  <Smartphone className="size-6" />
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-500/40 text-amber-600 dark:text-amber-400 text-[10px]"
                >
                  Đang phát triển
                </Badge>
              </div>

              <h3 className="font-heading font-extrabold text-lg text-foreground">
                iOS (iPhone / iPad)
              </h3>
              <p className="text-xs text-muted-foreground mt-1 mb-4 leading-relaxed">
                Phiên bản dành cho người dùng Apple iOS hiện đang được chuẩn bị để đưa lên TestFlight.
              </p>

              <div className="space-y-2 py-3.5 border-y border-border text-xs text-foreground/85">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-amber-500 shrink-0" />
                  <span>Kế hoạch phát hành: Quý 4/2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-amber-500 shrink-0" />
                  <span>Hỗ trợ iOS 15.0 trở lên</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-amber-500 shrink-0" />
                  <span>TestFlight Public Beta sắp mở đăng ký</span>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-2.5">
              <Button
                variant="outline"
                onClick={() => setShowIosModal(true)}
                className="w-full py-5 rounded-xl border-amber-500/40 text-amber-600 dark:text-amber-400 hover:bg-amber-500/10 font-bold text-xs cursor-pointer"
              >
                <AlertCircle className="size-4 mr-1.5" />
                <span>Xem thông tin bản iOS</span>
              </Button>

              <p className="text-[11px] text-center text-muted-foreground">
                Theo dõi GitHub để nhận thông báo TestFlight
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* iOS Modal */}
      <IosModal
        isOpen={showIosModal}
        onClose={() => setShowIosModal(false)}
      />
    </section>
  );
}
