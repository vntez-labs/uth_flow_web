"use client";

import {
  Calendar,
  CheckCircle2,
  Clock,
  Download,
  ExternalLink,
  LayoutDashboard,
  Monitor,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import Image from "next/image";
import * as React from "react";
import { Badge } from "@/components/ui/badge";

const DESKTOP_VIEWS = [
  {
    id: "dashboard",
    label: "Tổng quan & LMS Deadlines",
    icon: LayoutDashboard,
    image: "/screenshots/desktop_dashboard.png",
    width: 1288,
    height: 1041,
    description: "Màn hình chính: Lịch học tháng, hạn nộp bài Moodle LMS trực tiếp, tiến độ tích luỹ và GPA học kỳ",
  },
  {
    id: "timetable",
    label: "Thời khóa biểu tuần",
    icon: Calendar,
    image: "/screenshots/desktop_timetable.png",
    width: 1355,
    height: 890,
    description: "Thời khóa biểu tuần trực quan: Timeline ca học chi tiết từ 06:45, thông tin giảng đường và ghi chú cá nhân",
  },
];

export function DesktopSection({
  desktopReleaseUrl = "https://github.com/vntez-labs/uth_flow_desktop/releases/latest",
}: {
  desktopReleaseUrl?: string;
}) {
  const [activeTab, setActiveTab] = React.useState<"dashboard" | "timetable">(
    "dashboard"
  );

  const currentView =
    DESKTOP_VIEWS.find((v) => v.id === activeTab) || DESKTOP_VIEWS[0];

  return (
    <section
      id="desktop-version"
      className="py-16 md:py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge
            variant="outline"
            className="border-primary/40 text-primary bg-primary/5 mb-3"
          >
            <Monitor className="size-3 mr-1" /> Ứng Dụng Máy Tính Native
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-foreground tracking-tight">
            Thời Khóa Biểu Trên Màn Hình Rộng
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Bản cài đặt Native độc lập cho Windows, macOS và Linux. Siêu nhẹ,
            tiết kiệm tài nguyên và không phụ thuộc vào trình duyệt web.
          </p>
        </div>

        {/* 3 Quick Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 max-w-5xl mx-auto">
          <div className="p-5 rounded-2xl bg-card border border-border text-left shadow-xs transition-colors hover:border-primary/40">
            <Zap className="size-5 text-primary mb-2.5" />
            <h3 className="font-heading font-bold text-sm text-foreground mb-1">
              Native siêu nhẹ & Tiết kiệm RAM
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Xây dựng với Rust + Tauri v2, dung lượng bộ cài chỉ ~10MB, tiêu tốn cực ít RAM và khởi động tức thì.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-card border border-border text-left shadow-xs transition-colors hover:border-primary/40">
            <Calendar className="size-5 text-primary mb-2.5" />
            <h3 className="font-heading font-bold text-sm text-foreground mb-1">
              Lịch tuần trực quan & Một chạm LMS
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Bao quát toàn bộ ca học trong tuần theo timeline trực quan, mở thẳng lớp Moodle LMS không cần đăng nhập lại.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-card border border-border text-left shadow-xs transition-colors hover:border-primary/40">
            <ShieldCheck className="size-5 text-primary mb-2.5" />
            <h3 className="font-heading font-bold text-sm text-foreground mb-1">
              Offline SQLite & Tự động cập nhật
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Cơ sở dữ liệu SQLite cục bộ an toàn trên máy, tự động thông báo và tải bản cập nhật mới nhất (In-app updater).
            </p>
          </div>
        </div>

        {/* Real Desktop Application Window Frame */}
        <div className="rounded-2xl border border-border bg-card shadow-2xl overflow-hidden text-left max-w-5xl mx-auto ring-1 ring-border/50">
          {/* Authentic Desktop Window Titlebar */}
          <div className="h-11 px-4 bg-muted/70 border-b border-border flex items-center justify-between select-none gap-2">
            {/* Window Controls (Mac / Desktop style) + Title */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="size-3 rounded-full bg-[#ff5f56] border border-[#e0443e] inline-block shadow-2xs" />
                <span className="size-3 rounded-full bg-[#ffbd2e] border border-[#dea123] inline-block shadow-2xs" />
                <span className="size-3 rounded-full bg-[#27c93f] border border-[#1aab29] inline-block shadow-2xs" />
              </div>

              <div className="h-4 w-px bg-border/70 hidden sm:block" />

              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-foreground tracking-tight font-heading">
                  UTH Flow Desktop
                </span>
                <Badge
                  variant="outline"
                  className="hidden sm:inline-flex text-[9px] py-0 px-1.5 border-primary/30 text-primary bg-primary/10 font-mono"
                >
                  v0.3.0 Native
                </Badge>
              </div>
            </div>

            {/* View Switcher Tabs */}
            <div className="flex items-center gap-1 p-0.5 rounded-lg bg-background/80 border border-border/60 text-xs">
              {DESKTOP_VIEWS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id as "dashboard" | "timetable")}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-xs font-bold"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    <Icon className="size-3.5" />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.id === "dashboard" ? "Tổng quan" : "Lịch tuần"}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Actual Desktop App Screenshot */}
          <div className="relative bg-muted/20 p-2 sm:p-4">
            <div className="relative rounded-xl overflow-hidden border border-border/60 shadow-inner bg-background">
              <Image
                key={currentView.id}
                src={currentView.image}
                alt={`UTH Flow Desktop - ${currentView.label}`}
                width={currentView.width}
                height={currentView.height}
                className="w-full h-auto object-cover rounded-xl transition-opacity duration-300"
                priority={false}
              />
            </div>

            {/* Screenshot Description Caption */}
            <div className="mt-2.5 px-1 flex items-center justify-between text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                <span className="text-[11px] sm:text-xs">
                  {currentView.description}
                </span>
              </span>
              <span className="hidden md:inline-flex items-center gap-1 text-[10px] text-muted-foreground/80 font-mono">
                Ảnh chụp thực tế UTH Flow Desktop
              </span>
            </div>
          </div>
        </div>

        {/* Minimal Link / Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs shadow-sm hover:opacity-95 transition-opacity"
          >
            <Download className="size-3.5" />
            <span>Tải bộ cài đặt Desktop (Windows, macOS, Linux)</span>
          </a>
          <a
            href={desktopReleaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-border bg-card hover:bg-muted text-foreground text-xs font-semibold transition-colors"
          >
            <span>Tất cả phiên bản trên GitHub Releases</span>
            <ExternalLink className="size-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
