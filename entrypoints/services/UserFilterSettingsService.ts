import {
  AmateurFilterSettingsRepository,
  AnimeFilterSettingsRepository,
} from "#/repositories";
import { VideoFilterSettingsService } from "#/services";
import { UserFilterSettings } from "#/types";
import { Option, VideoFilter } from "#/types/fanza";
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

  const addFilterParams = (
    newParams: string,
    keyValue: string,
    option: Option | undefined,
  ): string => {
    if (option) {
      if (option.value === " ") {
        return newParams;
      }
      return `${newParams}${option.value}&`;
    }
    return `${newParams}${keyValue}&`;
  };

  return {
    getInitializeData: async (): Promise<UserFilterSettings> => getAll(),
    getAvService: (): VideoFilterSettingsService => avService,
    getAmateurService: (): VideoFilterSettingsService => amateurService,
    getAnimeService: (): VideoFilterSettingsService => animeService,
    convertUrl: (url: string, filter: VideoFilter): string => {
      const urlData = url.split("?");
      let newParams = "";
      for (const param of urlData[1].split("&")) {
        console.log(`param=${param}, newParams=${newParams}`);
        if (param.startsWith("mediaType") || filter.params.mediaOption) {
          newParams = addFilterParams(
            newParams,
            param,
            filter.params.mediaOption,
          );
        } else if (
          param.startsWith("max_quality") ||
          filter.params.qualityOption
        ) {
          newParams = addFilterParams(
            newParams,
            param,
            filter.params.qualityOption,
          );
        } else if (
          param.startsWith("price_min") ||
          param.startsWith("price_max") ||
          filter.params.priceOption
        ) {
          newParams = addFilterParams(
            newParams,
            param,
            filter.params.priceOption,
          );
        } else if (param.startsWith("release")) {
          newParams = addFilterParams(
            newParams,
            param,
            filter.params.releaseOption,
          );
        } else if (param.startsWith("sort")) {
          newParams = addFilterParams(
            newParams,
            param,
            filter.params.sortOption,
          );
        } else if (param.startsWith("key")) {
          newParams = `${newParams}${Array.from(
            new Set([
              ...param.split("=")[1].split(" "),
              ...(filter.params.keywords ?? []),
            ]),
          ).join(" ")}&`;
        } else {
          newParams = `${newParams}${param}&`;
        }
      }
      return `${urlData[0]}?${newParams}`;
    },
  };
}

export type UserFilterSettingsService = ReturnType<
  typeof createUserFilterSettingsService
>;
