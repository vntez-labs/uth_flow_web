"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function MobilePreview() {
  const screenshots = [
    {
      title: "Trang chủ & Lịch học",
      desc: "Tự động nhắc ca học kế tiếp nếu hôm nay được nghỉ, tổng hợp hạn nộp bài tập LMS trong 30 ngày.",
      src: "/screenshots/screen_home.png",
      tag: "Trang chủ",
    },
    {
      title: "Thời khóa biểu tháng",
      desc: "Lưới lịch trực quan, chấm màu phân biệt ngày có môn học, hiển thị rõ phòng học và ca online.",
      src: "/screenshots/screen_calendar.png",
      tag: "Lịch học",
    },
    {
      title: "Widget màn hình chính",
      desc: "Ghim lịch học trực tiếp ra màn hình điện thoại, xem ca học sắp tới mà không cần mở app.",
      src: "/screenshots/screen_widget_home.png",
      tag: "Tiện ích Widget",
    },
    {
      title: "Tiến độ học tập & Tín chỉ",
      desc: "Biểu đồ tỷ lệ hoàn thành khung chương trình đào tạo và tra cứu kết quả học kỳ.",
      src: "/screenshots/screen_gpa.png",
      tag: "Hồ sơ & GPA",
    },
    {
      title: "Một chạm vào LMS Courses",
      desc: "Tích hợp token SSO mở thẳng lớp học Moodle (courses.ut.edu.vn) không cần nhập lại mật khẩu.",
      src: "/screenshots/screen_utilities.png",
      tag: "Cổng tiện ích",
    },
    {
      title: "Hỗ trợ ghim Widget Android",
      desc: "Thao tác thêm tiện ích nhanh trên HyperOS, One UI, ColorOS và mọi dòng máy Android.",
      src: "/screenshots/screen_widget_guide.png",
      tag: "Cài đặt Widget",
    },
  ];

  return (
    <section
      id="mobile-preview"
      className="py-16 md:py-24 bg-muted/40 border-y border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge
            variant="outline"
            className="border-primary/40 text-primary bg-primary/5 mb-3"
          >
            Hình ảnh thực tế
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-foreground tracking-tight">
            Giao Diện Ứng Dụng UTH Flow
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            Ảnh chụp trực tiếp từ ứng dụng thực tế trên thiết bị di động.
          </p>
        </div>

        {/* 6 Real Screenshots Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {screenshots.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-3xl bg-card border border-border overflow-hidden shadow-xs hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Phone Mockup Frame containing Real Screenshot */}
              <div className="p-6 bg-muted/30 flex items-center justify-center">
                <div className="relative w-full max-w-[220px] aspect-[9/20] rounded-[34px] overflow-hidden bg-gradient-to-b from-slate-800 to-black p-2 ring-1 ring-white/10 shadow-xl group-hover:scale-[1.02] transition-transform duration-300">
                  <div className="relative w-full h-full rounded-[26px] overflow-hidden bg-background">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="220px"
                    />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 flex-1 flex flex-col justify-between text-left">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-primary font-mono tracking-wider uppercase">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-foreground mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
