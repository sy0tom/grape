import { UIconst } from "#/constants";
import { context } from "#/context";
import { injectSavedFiltersMain } from "./contents/features/video-filter/main";

export default defineContentScript({
  matches: ["*://video.dmm.co.jp/*"],
  main() {
    setInterval(() => {
      try {
        const currentUrl = window.location.href;
        handleInjection(currentUrl);
      } catch (e) {
        console.log("Error in content script:", e);
      }
    }, 500);
  },
});

async function handleInjection(url: string) {
  const featureActivate = await context.featureActivationService.get();
  if (featureActivate.videoFilter) {
    if (url.startsWith("https://video.dmm.co.jp/av/")) {
      injectSavedFiltersMain(UIconst.label.avFilter);
    } else if (url.startsWith("https://video.dmm.co.jp/amateur/")) {
      injectSavedFiltersMain(UIconst.label.amateurFilter);
    } else if (url.startsWith("https://video.dmm.co.jp/anime/")) {
      injectSavedFiltersMain(UIconst.label.animeFilter);
    }
  }
}
