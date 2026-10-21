"use client";

import {
  AlertCircle,
  Bell,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  X,
} from "lucide-react";
import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface IosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function IosModal({ isOpen, onClose }: IosModalProps) {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        // Reset after 3s
        setTimeout(() => {
          onClose();
          setSubmitted(false);
          setEmail("");
        }, 1200);
      }, 500);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="ios-modal-title"
      tabIndex={-1}
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        role="document"
        className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-card border border-border shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          aria-label="Đóng"
        >
          <X className="size-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            <AlertCircle className="size-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3
                id="ios-modal-title"
                className="text-xl font-bold font-heading text-foreground"
              >
                Thông tin bản iOS / iPhone
              </h3>
              <Badge
                variant="outline"
                className="border-amber-500/40 text-amber-600 dark:text-amber-400 text-xs"
              >
                Đang phát triển
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">
              Dành cho người dùng thiết bị Apple (iPhone / iPad)
            </p>
          </div>
        </div>

        {/* Modal Content */}
        <div className="space-y-4 text-sm text-foreground/80 leading-relaxed">
          <div className="rounded-xl bg-muted/60 p-4 border border-border/60 space-y-2">
            <p className="font-medium text-foreground text-sm flex items-center gap-2">
              <Sparkles className="size-4 text-primary" />
              Tại sao hiện tại chưa có trên App Store?
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              UTH Flow là dự án phi lợi nhuận do cộng đồng sinh viên UTH phát
              triển. Chi phí duy trì tài khoản Apple Developer hàng năm
              ($99/năm) cùng quy trình kiểm duyệt chứng chỉ ngặt nghèo của Apple
              là một thách thức đối với team.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-foreground text-sm">
              Lộ trình dự kiến cho iPhone:
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-500/10 text-primary font-bold text-[10px]">
                  1
                </span>
                <span>
                  <strong className="text-foreground">
                    Bản Web PWA (Sắp ra mắt):
                  </strong>{" "}
                  Cho phép mở bằng Safari trên iPhone và bấm{" "}
                  <em>&quot;Thêm vào Màn hình chính&quot;</em> để dùng mượt như
                  ứng dụng gốc, có thông báo.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-500/10 text-primary font-bold text-[10px]">
                  2
                </span>
                <span>
                  <strong className="text-foreground">
                    Bản thử nghiệm TestFlight:
                  </strong>{" "}
                  Gửi link cài đặt trực tiếp qua Apple TestFlight không cần qua
                  App Store.
                </span>
              </li>
            </ul>
          </div>

          {/* Subscription or GitHub Star */}
          <div className="pt-2 border-t border-border">
            {submitted ? (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-medium">
                <CheckCircle2 className="size-4 shrink-0" />
                Cảm ơn bạn! Chúng mình sẽ thông báo ngay khi có bản thử nghiệm
                cho iPhone.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2">
                <label
                  htmlFor="ios-notify-email"
                  className="block text-xs font-medium text-foreground"
                >
                  Để lại email để nhận thông báo sớm nhất:
                </label>
                <div className="flex gap-2">
                  <input
                    id="ios-notify-email"
                    type="email"
                    required
                    placeholder="email_sinh_vien@ut.edu.vn"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-3 py-2 text-xs rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                  <Button type="submit" size="sm" className="gap-1.5 shrink-0">
                    <Bell className="size-3.5" />
                    Đăng ký
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-6 flex flex-col sm:flex-row gap-2.5 justify-end pt-3 border-t border-border">
          <a
            href="https://github.com/vntez-labs/uth_flow"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 text-xs text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg hover:bg-muted transition-colors"
          >
            Theo dõi trên GitHub <ExternalLink className="size-3" />
          </a>
          <Button variant="outline" size="sm" onClick={onClose}>
            Đã hiểu
          </Button>
        </div>
      </div>
    </div>
  );
}
