export interface ReleaseAsset {
  name: string;
  downloadUrl: string;
  size: number;
  sizeFormatted: string;
  downloadCount: number;
}

export interface ReleaseInfo {
  version: string;
  title: string;
  publishedAt: string;
  releaseUrl: string;
  apkAsset: ReleaseAsset;
  body: string;
}

export interface DesktopReleaseInfo {
  version: string;
  title: string;
  publishedAt: string;
  releaseUrl: string;
  windowsExeUrl?: string;
  windowsMsiUrl?: string;
  macDmgUrl?: string;
  linuxDebUrl?: string;
  linuxAppImageUrl?: string;
}

const FALLBACK_RELEASE: ReleaseInfo = {
  version: "v0.0.1",
  title:
    "UTH Flow v0.0.1 - Chào sân phiên bản đầu tiên (Initial Alpha Release) 🎉",
  publishedAt: "2026-10-20",
  releaseUrl: "https://github.com/vntez-labs/uth_flow/releases/latest",
  apkAsset: {
    name: "app-release.apk",
    downloadUrl:
      "https://github.com/vntez-labs/uth_flow/releases/download/v0.0.1/app-release.apk",
    size: 53688138,
    sizeFormatted: "51.2 MB",
    downloadCount: 120,
  },
  body: "Trợ lý học tập thông minh dành riêng cho sinh viên Trường Đại học Giao thông vận tải TP.HCM (UTH).",
};

const FALLBACK_DESKTOP_RELEASE: DesktopReleaseInfo = {
  version: "v0.3.0",
  title: "UTH Flow Desktop v0.3.0",
  publishedAt: "2026-10-21",
  releaseUrl: "https://github.com/vntez-labs/uth_flow_desktop/releases/latest",
  windowsExeUrl: "https://github.com/vntez-labs/uth_flow_desktop/releases/latest",
  macDmgUrl: "https://github.com/vntez-labs/uth_flow_desktop/releases/latest",
  linuxDebUrl: "https://github.com/vntez-labs/uth_flow_desktop/releases/latest",
  linuxAppImageUrl: "https://github.com/vntez-labs/uth_flow_desktop/releases/latest",
};

export async function getLatestRelease(): Promise<ReleaseInfo> {
  try {
    const res = await fetch(
      "https://api.github.com/repos/vntez-labs/uth_flow/releases/latest",
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "uth-flow-landing-page",
        },
        next: { revalidate: 1800 }, // Cache 30 minutes
      },
    );

    if (!res.ok) {
      return FALLBACK_RELEASE;
    }

    const data = await res.json();
    const apk = data.assets?.find((a: { name: string }) =>
      a.name.endsWith(".apk"),
    );

    const sizeInMb = apk
      ? `${(apk.size / (1024 * 1024)).toFixed(1)} MB`
      : "51.2 MB";

    return {
      version: data.tag_name || "v0.0.1",
      title: data.name || FALLBACK_RELEASE.title,
      publishedAt: data.published_at
        ? data.published_at.slice(0, 10)
        : "2026-10-20",
      releaseUrl: data.html_url || FALLBACK_RELEASE.releaseUrl,
      apkAsset: {
        name: apk?.name || "app-release.apk",
        downloadUrl:
          apk?.browser_download_url || FALLBACK_RELEASE.apkAsset.downloadUrl,
        size: apk?.size || 53688138,
        sizeFormatted: sizeInMb,
        downloadCount: apk?.download_count || 120,
      },
      body: data.body || FALLBACK_RELEASE.body,
    };
  } catch {
    return FALLBACK_RELEASE;
  }
}

export async function getLatestDesktopRelease(): Promise<DesktopReleaseInfo> {
  try {
    const res = await fetch(
      "https://api.github.com/repos/vntez-labs/uth_flow_desktop/releases/latest",
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "uth-flow-landing-page",
        },
        next: { revalidate: 1800 }, // Cache 30 minutes
      },
    );

    if (!res.ok) {
      return FALLBACK_DESKTOP_RELEASE;
    }

    const data = await res.json();
    const assets = (data.assets || []) as Array<{ name: string; browser_download_url: string }>;

    const windowsExe = assets.find((a) => a.name.endsWith(".exe"))?.browser_download_url;
    const windowsMsi = assets.find((a) => a.name.endsWith(".msi"))?.browser_download_url;
    const macDmg = assets.find((a) => a.name.endsWith(".dmg"))?.browser_download_url;
    const linuxDeb = assets.find((a) => a.name.endsWith(".deb"))?.browser_download_url;
    const linuxAppImage = assets.find((a) => a.name.endsWith(".AppImage"))?.browser_download_url;

    const rawTag = data.tag_name || "";
    const isOldPreRebrand = rawTag.startsWith("v0.2") || rawTag === "";
    const finalVersion = isOldPreRebrand ? "v0.3.0" : rawTag;

    return {
      version: finalVersion,
      title: isOldPreRebrand ? "UTH Flow Desktop v0.3.0" : (data.name || "UTH Flow Desktop"),
      publishedAt: data.published_at
        ? data.published_at.slice(0, 10)
        : "2026-10-21",
      releaseUrl:
        "https://github.com/vntez-labs/uth_flow_desktop/releases/latest",
      windowsExeUrl: windowsExe || "https://github.com/vntez-labs/uth_flow_desktop/releases/latest",
      windowsMsiUrl: windowsMsi,
      macDmgUrl: macDmg || "https://github.com/vntez-labs/uth_flow_desktop/releases/latest",
      linuxDebUrl: linuxDeb,
      linuxAppImageUrl: linuxAppImage || "https://github.com/vntez-labs/uth_flow_desktop/releases/latest",
    };
  } catch {
    return FALLBACK_DESKTOP_RELEASE;
  }
}
