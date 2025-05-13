import { VideoFilter, VideoFilterSettings } from "#/types";
import { FeatureActivationService } from "../feature-activation/FeatureActivationService";
import { VideoFilterSettingsService } from "./VideoFilterSettingsService";

export function createUserVideoFilterSettingsService(
  featureActivationService: FeatureActivationService,
  avService: VideoFilterSettingsService,
  amateurService: VideoFilterSettingsService,
  animeService: VideoFilterSettingsService,
) {
  const addSavedOptions = (value: string | undefined): string => {
    if (value && value !== " ") {
      return `${value}&`;
    }
    return "";
  };

  return {
    get: async (): Promise<VideoFilterSettings> => {
      const [featureActivation, avFilters, amateurFilters, animeFilters] =
        await Promise.all([
          featureActivationService.get(),
          avService.getAll(),
          amateurService.getAll(),
          animeService.getAll(),
        ]);

      return {
        isActive: featureActivation.videoFilter,
        avFilters,
        amateurFilters,
        animeFilters,
      };
    },

    convertUrl: (url: string, filter: VideoFilter): string => {
      const [baseUrl, paramString] = url.split("?");
      let newParams = "";
      newParams += addSavedOptions(filter?.params?.mediaOption);
      newParams += addSavedOptions(filter?.params?.qualityOption);
      newParams += addSavedOptions(filter?.params?.priceOption);
      newParams += addSavedOptions(filter?.params?.releaseOption);
      newParams += addSavedOptions(filter?.params?.sortOption);

      let keywords = [...(filter?.params?.keywords ?? [])];

      const params = paramString.split("&");
      for (const param of params) {
        if (
          !param.startsWith("media_type") &&
          !param.startsWith("max_quality") &&
          !param.startsWith("price_min") &&
          !param.startsWith("price_max") &&
          !param.startsWith("release") &&
          !param.startsWith("sort") &&
          !param.startsWith("key")
        ) {
          newParams += `${param}&`;
        } else if (param.startsWith("key")) {
          keywords = [
            ...keywords,
            ...decodeURI(param.split("=")[1]).split(" "),
          ];
        }
        console.log(`newParams=${newParams}`);
      }

      if (keywords.length > 0) {
        newParams += encodeURI(
          `key=${Array.from(new Set([...keywords])).join(" ")}&`,
        );
      }
      return `${baseUrl}?${newParams.slice(0, -1)}`;
    },
  };
}

export type UserVideoFilterSettingsService = ReturnType<
  typeof createUserVideoFilterSettingsService
>;
