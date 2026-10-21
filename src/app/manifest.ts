import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "UTH Flow - Trợ lý sinh viên UTH",
    short_name: "UTH Flow",
    description:
      "Trợ lý học tập thông minh, tra cứu thời khóa biểu, một chạm vào LMS Courses cho sinh viên UTH.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF9F5",
    theme_color: "#008689",
    icons: [
      {
        src: "/app_logo.png",
        sizes: "192x192 512x512 1024x1024",
        type: "image/png",
      },
    ],
  };
}
