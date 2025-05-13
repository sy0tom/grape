import { featureActivateService } from "#/context";
import { injectSavedFiltersMain } from "./contents/features/video-filter/main";

export default defineContentScript({
  matches: ["*://video.dmm.co.jp/*"],
  main() {
    setInterval(() => {
      try {
        const currentUrl = window.location.href;
        handleInjection(currentUrl);
      } catch (e) {
        alert(e);
      }
    });
  },
});

async function handleInjection(url: string) {
  const featureActivate = await featureActivateService.get();
  if (featureActivate.videoFilter) {
    if (url.startsWith("https://video.dmm.co.jp/av/")) {
      injectSavedFiltersMain(url, "AvFilter");
    } else if (url.startsWith("https://video.dmm.co.jp/amateur/")) {
      injectSavedFiltersMain(url, "AmateurFilter");
    } else if (url.startsWith("https://video.dmm.co.jp/anime/")) {
      injectSavedFiltersMain(url, "AnimeFilter");
    }
  }
}
