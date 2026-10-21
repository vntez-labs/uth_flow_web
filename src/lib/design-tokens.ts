/**
 * UTH Flow Design Tokens
 * Hệ thống định danh thiết kế đồng bộ theo phong cách Claude Warm Charcoal & Parchment
 * kết hợp màu xanh nhận diện thương hiệu Đại học Giao thông Vận tải TP.HCM (UTH).
 */

export const tokens = {
  colors: {
    brand: {
      primary: "#008689", // UTH Teal nhận diện cốt lõi
      primaryHover: "#006F72",
      primaryLight: "#E8F5F5",
      primaryDark: "#004D4E",
      accent: "#2DD4BF",
      navy: "#0A2540",
      claudeWarm: "#D97706",
    },
    canvas: {
      // Claude Light: Iconic warm parchment
      lightBg: "#FAF9F5",
      lightSurface: "#FFFFFF",
      lightSurfaceElevated: "#F5F2EB",
      lightText: "#1F1E1D",
      lightMuted: "#6B6860",
      lightBorder: "#E8E5DD",

      // Claude Dark: Iconic deep warm charcoal
      darkBg: "#1F1E1D",
      darkSurface: "#282724",
      darkSurfaceElevated: "#33312D",
      darkText: "#ECEAE2",
      darkMuted: "#9E9B93",
      darkBorder: "#383530",
    },
    semantic: {
      success: "#10B981", // GPA cao, đã nộp bài, hoàn thành
      warning: "#F59E0B", // Ca học sắp diễn ra, cảnh báo
      error: "#EF4444", // Deadline sát nút, quá hạn
      info: "#3B82F6", // Thông báo LMS, portal
    },
  },
  typography: {
    heading: "var(--font-heading), Plus Jakarta Sans, sans-serif",
    body: "var(--font-body), Be Vietnam Pro, sans-serif",
    mono: "var(--font-mono), monospace",
  },
  radii: {
    sm: "0.375rem", // 6px
    md: "0.625rem", // 10px
    lg: "0.875rem", // 14px
    xl: "1.125rem", // 18px
    "2xl": "1.5rem", // 24px
    full: "9999px",
  },
  shadows: {
    subtle: "0 2px 10px rgba(31, 30, 29, 0.04)",
    card: "0 12px 35px -10px rgba(0, 134, 137, 0.09)",
    cardHover: "0 24px 50px -15px rgba(0, 134, 137, 0.2)",
    glow: "0 0 60px -10px rgba(0, 134, 137, 0.35)",
  },
} as const;

export type DesignTokens = typeof tokens;
