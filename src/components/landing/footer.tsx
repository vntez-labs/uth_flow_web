import { ExternalLink, Heart } from "lucide-react";
import Image from "next/image";
import { GithubIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/60 text-foreground text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-xl overflow-hidden ring-1 ring-border">
                <Image
                  src="/app_logo.png"
                  alt="UTH Flow Logo"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <span className="font-heading font-extrabold text-lg tracking-tight">
                UTH <span className="text-primary font-bold">Flow</span>
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Trợ lý học tập thông minh và thời khóa biểu 1 chạm dành riêng cho
              sinh viên Trường Đại học Giao thông Vận tải TP.HCM.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://github.com/vntez-labs/uth_flow"
                target="_blank"
                rel="noopener noreferrer"
                className="size-8 rounded-lg bg-muted flex items-center justify-center text-foreground/80 hover:text-foreground hover:bg-muted/80 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="size-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-foreground">
              Ứng Dụng
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <a
                  href="#mobile-preview"
                  className="hover:text-primary transition-colors"
                >
                  Ảnh chụp thực tế
                </a>
              </li>
              <li>
                <a
                  href="#desktop-version"
                  className="hover:text-primary transition-colors"
                >
                  Bản Cho Máy Tính
                </a>
              </li>
              <li>
                <a
                  href="#download"
                  className="hover:text-primary transition-colors"
                >
                  Tải về (Android & Desktop)
                </a>
              </li>
              <li>
                <a
                  href="#install-guide"
                  className="hover:text-primary transition-colors"
                >
                  Hướng dẫn cài đặt
                </a>
              </li>
            </ul>
          </div>

          {/* External UTH Resources */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-foreground">
              Cổng Đào Tạo UTH
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <a
                  href="https://dangkyhoc.ut.edu.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  Portal Đăng Ký Học <ExternalLink className="size-2.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://courses.ut.edu.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  LMS Moodle Courses <ExternalLink className="size-2.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://ut.edu.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  Website UTH Chính thức <ExternalLink className="size-2.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://lib.ut.edu.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  Thư Viện Trường UTH <ExternalLink className="size-2.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Open-Source & Community */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-foreground">
              Mã Nguồn Mở
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Dự án mã nguồn mở theo giấy phép MIT. Phát triển bởi VNTEZ Labs
              cùng cộng đồng sinh viên công nghệ thông tin UTH.
            </p>
            <div className="pt-1">
              <a
                href="https://github.com/vntez-labs/uth_flow/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary font-semibold hover:underline inline-flex items-center gap-1"
              >
                Góp ý hoặc báo lỗi trên GitHub{" "}
                <ExternalLink className="size-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-muted-foreground">
          <p className="max-w-2xl leading-relaxed">
            <strong>Tuyên bố từ chối trách nhiệm:</strong> UTH Flow là dự án
            cộng đồng độc lập phi lợi nhuận, không phải sản phẩm trực thuộc hay
            được phát hành chính thức bởi Ban Giám hiệu Trường ĐH Giao thông Vận
            tải TP.HCM.
          </p>
          <p className="shrink-0 flex items-center justify-center gap-1">
            Xây dựng với{" "}
            <Heart className="size-3.5 text-rose-500 fill-rose-500" /> cho Sinh
            viên UTH
          </p>
        </div>
      </div>
    </footer>
  );
}
