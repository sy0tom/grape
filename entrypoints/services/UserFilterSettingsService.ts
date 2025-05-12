import {
  AmateurFilterSettingsRepository,
  AnimeFilterSettingsRepository,
} from "#/repositories";
import { VideoFilterSettingsService } from "#/services";
import { UserFilterSettings } from "#/types";
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

  return {
    getInitializeData: async (): Promise<UserFilterSettings> => getAll(),
    getAvService: (): VideoFilterSettingsService => avService,
    getAmateurService: (): VideoFilterSettingsService => amateurService,
    getAnimeService: (): VideoFilterSettingsService => animeService,
  };
}

export type UserFilterSettingsService = ReturnType<
  typeof createUserFilterSettingsService
>;
