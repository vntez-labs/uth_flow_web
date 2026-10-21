"use client";

import { HelpCircle, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function InstallGuide() {
  const steps = [
    {
      step: "01",
      title: "Tải file app-release.apk",
      desc: "Nhấn nút 'Tải APK' trên trang web để tải gói cài đặt chính thức từ GitHub Releases về thiết bị Android của bạn.",
      tip: "Tệp có dung lượng khoảng 51 MB.",
    },
    {
      step: "02",
      title: "Cho phép cài đặt từ nguồn này",
      desc: "Mở file vừa tải về. Nếu hệ điều hành Android hiển thị thông báo 'Tệp có thể gây hại' hoặc 'Chặn cài đặt từ nguồn không xác định', hãy bấm 'Cài đặt vô điều kiện' hoặc vào Cài đặt và gạt bật 'Cho phép từ nguồn này'.",
      tip: "Cơ chế cảnh báo bảo mật mặc định của Android khi cài file APK ngoài CH Play.",
    },
    {
      step: "03",
      title: "Cài đặt & Đăng nhập Portal UTH",
      desc: "Nhấn 'Cài đặt' để hoàn tất. Mở ứng dụng UTH Flow và đăng nhập bằng tài khoản Portal Sinh viên UTH để xem thời khóa biểu ngay lập tức.",
      tip: "Mật khẩu và phiên đăng nhập được mã hóa an toàn trên thiết bị.",
    },
  ];

  return (
    <section
      id="install-guide"
      className="py-16 md:py-24 bg-muted/30 border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge
            variant="outline"
            className="border-primary/40 text-primary bg-primary/5 mb-3"
          >
            <HelpCircle className="size-3 mr-1" /> Hướng Dẫn Cài Đặt
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-foreground tracking-tight">
            3 Bước Cài Đặt File APK Trên Android
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Chỉ mất chưa đầy 1 phút để cài đặt ứng dụng vào điện thoại của bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((item) => (
            <div
              key={item.step}
              className="rounded-3xl bg-card border border-border p-6 sm:p-7 shadow-xs hover:border-primary/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left relative group"
            >
              <div>
                <div className="size-10 rounded-2xl bg-teal-500/10 text-[#008689] dark:text-[#2DD4BF] font-black font-heading flex items-center justify-center text-sm mb-4 shadow-2xs group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="font-heading font-extrabold text-base sm:text-lg text-foreground mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3.5 border-t border-border/70 text-xs text-foreground/80 flex items-start gap-2">
                <span className="shrink-0 text-amber-500 font-bold">💡</span>
                <span className="leading-relaxed text-[11px] sm:text-xs text-muted-foreground">{item.tip}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
