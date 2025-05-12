import {
  AmateurFilterSettingsRepository,
  AnimeFilterSettingsRepository,
} from "#/repositories";
import { VideoFilterSettingsService } from "#/services";
import { UserFilterSettings } from "#/types";
import { VideoFilter } from "#/types/fanza";
import { AvFilterSettingsRepository } from "../repositories/AvFilterSettingsRepository";
import { createVideoFilterSettingsService } from "./VideoFilterSettingsService";

export function createUserFilterSettingsService(
  avFilterSettingsRepository: AvFilterSettingsRepository,
  amateurFilterSettingsRepository: AmateurFilterSettingsRepository,
  animeFilterSettingsRepository: AnimeFilterSettingsRepository,
) {
  const avService = createVideoFilterSettingsService(
    avFilterSettingsRepository,
  );
  const amateurService = createVideoFilterSettingsService(
    amateurFilterSettingsRepository,
  );
  const animeService = createVideoFilterSettingsService(
    animeFilterSettingsRepository,
  );

  const getAll = async (): Promise<UserFilterSettings> => {
    const [avFilters, amateurFilters, animeFilters] = await Promise.all([
      avService.getAll(),
      amateurService.getAll(),
      animeService.getAll(),
    ]);

    return {
      avFilters: avFilters ?? [],
      amateurFilters: amateurFilters ?? [],
      animeFilters: animeFilters ?? [],
    };
  };

  const addSavedOptions = (value: string | undefined): string => {
    if (value && value !== " ") {
      return `${value}&`;
    }
    return "";
  };

  return {
    getInitializeData: async (): Promise<UserFilterSettings> => getAll(),
    getAvService: (): VideoFilterSettingsService => avService,
    getAmateurService: (): VideoFilterSettingsService => amateurService,
    getAnimeService: (): VideoFilterSettingsService => animeService,
    convertUrl: (url: string, filter: VideoFilter): string => {
      const [baseUrl, paramString] = url.split("?");
      let newParams = "";
      newParams += addSavedOptions(filter.params.mediaOption);
      newParams += addSavedOptions(filter.params.qualityOption);
      newParams += addSavedOptions(filter.params.priceOption);
      newParams += addSavedOptions(filter.params.releaseOption);
      newParams += addSavedOptions(filter.params.sortOption);

      let keywords = [...(filter.params.keywords ?? [])];

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

export type UserFilterSettingsService = ReturnType<
  typeof createUserFilterSettingsService
>;
