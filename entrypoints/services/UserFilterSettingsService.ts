import {
  AmateurFilterSettingsRepository,
  AnimeFilterSettingsRepository,
  AvFilterSettingsRepository,
} from "#/repositories";
import {
  AmateurFilter,
  AnimeFilter,
  AvFilter,
  UserFilterSettings,
} from "#/types";

export function createUserFilterSettingsService(
  avRepository: AvFilterSettingsRepository,
  amateurRepository: AmateurFilterSettingsRepository,
  animeRepository: AnimeFilterSettingsRepository,
) {
  const getAvFilters = async (): Promise<AvFilter[]> => {
    return (await avRepository.getAll()) ?? [];
  };

  const getAmateurFilters = async (): Promise<AmateurFilter[]> => {
    return (await amateurRepository.getAll()) ?? [];
  };

  const getAnimeFilters = async (): Promise<AnimeFilter[]> => {
    return (await animeRepository.getAll()) ?? [];
  };

  const getAll = async (): Promise<UserFilterSettings> => {
    const [avFilters, amateurFilters, animeFilters] = await Promise.all([
      getAvFilters(),
      getAmateurFilters(),
      getAnimeFilters(),
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

    getAvFilters: async (): Promise<AvFilter[]> => {
      return await getAvFilters();
    },

    registryOrEditAvFilter: async (data: AvFilter): Promise<AvFilter[]> => {
      await avRepository.save(data);
      return getAvFilters();
    },

    deleteAvFilter: async (id: string): Promise<AvFilter[]> => {
      await avRepository.delete(id);
      return getAvFilters();
    },

    getAmateurFilters: async (): Promise<AmateurFilter[]> => {
      return await getAmateurFilters();
    },

    registryOrEditAmateurFilter: async (
      data: AmateurFilter,
    ): Promise<AmateurFilter[]> => {
      await amateurRepository.save(data);
      return getAmateurFilters();
    },

    deleteAmateurFilter: async (id: string): Promise<AmateurFilter[]> => {
      await amateurRepository.delete(id);
      return getAmateurFilters();
    },

    getAnimeFilters: async (): Promise<AnimeFilter[]> => {
      return await getAnimeFilters();
    },

    registryOrEditAnimeFilter: async (
      data: AnimeFilter,
    ): Promise<AnimeFilter[]> => {
      await animeRepository.save(data);
      return getAnimeFilters();
    },

    deleteAnimeFilter: async (id: string): Promise<AnimeFilter[]> => {
      await animeRepository.delete(id);
      return getAnimeFilters();
    },
  };
}

export type UserFilterSettingsService = ReturnType<
  typeof createUserFilterSettingsService
>;
