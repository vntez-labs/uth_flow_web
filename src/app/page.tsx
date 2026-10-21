import { DesktopSection } from "@/components/landing/desktop-section";
import { DownloadSection } from "@/components/landing/download-section";
import { FAQSection } from "@/components/landing/faq-section";
import { Footer } from "@/components/landing/footer";
import { HeroSection } from "@/components/landing/hero-section";
import { InstallGuide } from "@/components/landing/install-guide";
import { Navbar } from "@/components/landing/navbar";
import { getLatestRelease, getLatestDesktopRelease } from "@/lib/release";

export default async function HomePage() {
  const [release, desktopRelease] = await Promise.all([
    getLatestRelease(),
    getLatestDesktopRelease(),
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-teal-500/20 selection:text-teal-900 dark:selection:text-teal-200">
      {/* Navigation */}
      <Navbar
        apkDownloadUrl={release.apkAsset.downloadUrl}
        version={release.version}
      />

      <main className="flex-1">
        {/* 1. Hero with Real Screenshot Showcase */}
        <HeroSection
          version={release.version}
          apkDownloadUrl={release.apkAsset.downloadUrl}
          sizeFormatted={release.apkAsset.sizeFormatted}
          publishedAt={release.publishedAt}
          desktopRelease={desktopRelease}
        />

        {/* 2. Desktop Version */}
        <DesktopSection desktopReleaseUrl={desktopRelease.releaseUrl} />

        {/* 4. Download Center */}
        <DownloadSection
          version={release.version}
          apkDownloadUrl={release.apkAsset.downloadUrl}
          sizeFormatted={release.apkAsset.sizeFormatted}
          releaseUrl={release.releaseUrl}
          desktopRelease={desktopRelease}
        />

        {/* 5. 3-step APK install guide */}
        <InstallGuide />

        {/* 6. FAQ */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
