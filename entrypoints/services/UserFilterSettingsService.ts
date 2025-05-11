import { UserFilterSettings } from "#/types";
import { AmateurFilterSettingsService } from "./AmateurFilterSettingsService";
import { AnimeFilterSettingsService } from "./AnimeFilterSettingsService";
import { AvFilterSettingsService } from "./AvFilterSettingsService";

export function createUserFilterSettingsService(
  avService: AvFilterSettingsService,
  amateurService: AmateurFilterSettingsService,
  animeService: AnimeFilterSettingsService,
) {
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
    getInitializeData: async (): Promise<UserFilterSettings> => {
      return await getAll();
    },
  };
}

export type UserFilterSettingsService = ReturnType<
  typeof createUserFilterSettingsService
>;
