"use client";

import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import * as React from "react";
import { Badge } from "@/components/ui/badge";

export function FAQSection() {
  const faqs = [
    {
      q: "Tài khoản Portal UTH của tôi có an toàn khi đăng nhập trên app không?",
      a: "Hoàn toàn an toàn. UTH Flow là dự án mã nguồn mở 100% minh bạch trên GitHub. Toàn bộ thông tin đăng nhập và JWT Token được lưu trữ mã hóa trực tiếp trong bộ nhớ bảo mật phần cứng của thiết bị (thông qua flutter_secure_storage). Ứng dụng kết nối trực tiếp đến máy chủ Cổng thông tin đào tạo UTH và Moodle LMS qua HTTPS, tuyệt đối không gửi dữ liệu tới bất kỳ máy chủ trung gian nào.",
    },
    {
      q: "Tại sao khi cài file APK, điện thoại Android lại cảnh báo 'Tệp có thể gây hại'?",
      a: "Đây là thông báo bảo mật mặc định của Android khi bạn tải file cài đặt ngoài kho ứng dụng Google Play Store. File APK phát hành trên GitHub Releases là bản build chính thức từ mã nguồn sạch của team, không có quảng cáo hay mã độc theo dõi. Bạn chỉ cần chọn 'Vẫn tải xuống' hoặc 'Vẫn cài đặt' là có thể sử dụng bình thường.",
    },
    {
      q: "Bao giờ sẽ có bản dành cho iPhone (Apple iOS)?",
      a: "UTH Flow là dự án phi lợi nhuận do sinh viên phát triển. Chi phí duy trì tài khoản Apple Developer ($99/năm) là rào cản lớn. Để giải quyết, team đang gấp rút hoàn thiện phiên bản Web App (PWA) tối ưu riêng cho Safari trên iPhone (bạn chỉ cần mở web và chọn 'Thêm vào MH chính' là dùng mượt mà như app gốc) cùng bản thử nghiệm TestFlight trong các bản cập nhật sắp tới.",
    },
    {
      q: "Bản dành cho máy tính (Desktop) sử dụng như thế nào?",
      a: "UTH Flow có phiên bản ứng dụng Native cài đặt độc lập dành riêng cho máy tính (hỗ trợ Windows, macOS và Linux). Ứng dụng được xây dựng trên công nghệ Rust + Tauri v2 siêu nhẹ (chỉ khoảng 10-15MB), khởi động tức thì và tiết kiệm RAM tối đa so với Electron hay trình duyệt thông thường. Bạn chỉ cần tải file cài đặt (.exe cho Windows, .dmg cho macOS hoặc .deb/.AppImage cho Linux) trong mục Tải về hoặc qua GitHub Releases để sử dụng.",
    },
    {
      q: "Tính năng 'Một chạm vào LMS Courses' hoạt động ra sao?",
      a: "Khi bạn đăng nhập vào Portal UTH, ứng dụng trích xuất phiên làm việc SSO an toàn. Khi bạn nhấn vào bất kỳ ca học nào trên thời khóa biểu, UTH Flow sẽ tự động mở trang khoá học tương ứng trên courses.ut.edu.vn và tự động đăng nhập mà bạn không cần phải gõ lại tài khoản hay mật khẩu.",
    },
    {
      q: "Tôi có thể đóng góp ý kiến, phản ánh lỗi hoặc tham gia phát triển ở đâu?",
      a: "Bạn có thể tạo Issue hoặc gửi Pull Request trực tiếp trên kho lưu trữ GitHub chính thức tại github.com/vntez-labs/uth_flow. Mọi đóng góp từ cộng đồng sinh viên Trường ĐH Giao thông Vận tải TP.HCM đều được trân trọng và ghi nhận!",
    },
  ];

  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="border-primary/40 text-primary bg-primary/5 mb-3"
          >
            <HelpCircle className="size-3 mr-1" /> Giải Đáp Thắc Mắc
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-foreground tracking-tight">
            Câu Hỏi Thường Gặp (FAQ)
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Những thắc mắc phổ biến nhất của sinh viên UTH khi tải và trải
            nghiệm UTH Flow.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.q}
                className={`rounded-2xl sm:rounded-3xl bg-card border transition-all duration-200 ${
                  isOpen ? "border-primary/50 shadow-md shadow-teal-500/5 ring-1 ring-primary/20" : "border-border hover:border-border/80"
                } overflow-hidden`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between text-left font-heading font-extrabold text-sm sm:text-base text-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  <span className="pr-4 leading-snug">{item.q}</span>
                  {isOpen ? (
                    <ChevronUp className="size-5 shrink-0 text-primary" />
                  ) : (
                    <ChevronDown className="size-5 shrink-0 text-muted-foreground" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-4 animate-in fade-in duration-200">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
