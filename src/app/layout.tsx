import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-body",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://uthflow.vntez.com"),
  title: {
    default: "UTH Flow 🎓⚡ | Trợ lý học tập thông minh cho sinh viên UTH",
    template: "%s | UTH Flow",
  },
  description:
    "Ứng dụng tra cứu thời khóa biểu thông minh, một chạm vào thẳng lớp học LMS Moodle courses.ut.edu.vn, quản lý điểm số GPA và thẻ sinh viên số hóa cho sinh viên Trường Đại học Giao thông Vận tải TP.HCM (UTH). Hỗ trợ Android (APK) và Native Desktop (Windows, macOS, Linux).",
  keywords: [
    "UTH",
    "UTH Flow",
    "Trường Đại học Giao thông vận tải TP.HCM",
    "Thời khóa biểu UTH",
    "Lịch học UTH",
    "LMS UTH",
    "Courses UTH",
    "courses.ut.edu.vn",
    "GPA UTH",
    "Điểm số UTH",
    "Tra cứu thời khóa biểu sinh viên UTH",
    "APK UTH Flow",
    "UTH Flow Desktop",
    "Widget lịch học UTH",
    "Đăng ký học phần UTH",
    "Portal sinh viên UTH",
  ],
  authors: [
    {
      name: "UTH Flow Team & VNTEZ Labs",
      url: "https://github.com/vntez-labs/uth_flow",
    },
  ],
  creator: "VNTEZ Labs",
  publisher: "UTH Flow",
  applicationName: "UTH Flow",
  category: "education",
  alternates: {
    canonical: "https://uthflow.vntez.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "256x256", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "UTH Flow - Trợ lý học tập thông minh cho sinh viên UTH",
    description:
      "Tự động đồng bộ thời khóa biểu, một chạm vào thẳng LMS Moodle courses.ut.edu.vn không cần đăng nhập lại. Hỗ trợ Android (APK) và Native Desktop (Windows, macOS, Linux).",
    url: "https://uthflow.vntez.com",
    siteName: "UTH Flow",
    images: [
      {
        url: "/app_logo.png",
        width: 1024,
        height: 1024,
        alt: "UTH Flow Logo",
        type: "image/png",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UTH Flow - Trợ lý học tập thông minh cho sinh viên UTH",
    description:
      "Tự động đồng bộ thời khóa biểu, một chạm vào thẳng LMS Moodle courses.ut.edu.vn không cần đăng nhập lại. Tải ngay cho Android & Desktop.",
    images: ["/app_logo.png"],
    creator: "@vntez_labs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF9F5" },
    { media: "(prefers-color-scheme: dark)", color: "#14171A" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "UTH Flow",
  operatingSystem: "Android, Windows, macOS, Linux",
  applicationCategory: "EducationalApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "VND",
  },
  description:
    "Trợ lý học tập thông minh cho sinh viên Đại học Giao thông Vận tải TP.HCM (UTH). Tự động đồng bộ thời khóa biểu, một chạm vào LMS Moodle courses.ut.edu.vn không cần đăng nhập lại, theo dõi GPA chi tiết và thẻ sinh viên số hóa.",
  image: "https://uthflow.vntez.com/app_logo.png",
  url: "https://uthflow.vntez.com",
  author: {
    "@type": "Organization",
    name: "UTH Flow Team & VNTEZ Labs",
    url: "https://github.com/vntez-labs/uth_flow",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${beVietnamPro.variable} ${jetBrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
