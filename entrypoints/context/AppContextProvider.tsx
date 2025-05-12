import { createBackgroundRepository } from "#/lib/repositories/background/BackgroundRepositoryImpl";
import { createAmateurFilterSettingsRepository } from "#/lib/repositories/storage/AmateurFilterSettingsRepositoryImpl";
import { createAnimeFilterSettingsRepository } from "#/lib/repositories/storage/AnimeFilterSettingsRepositoryImpl";
import { createAvFilterSettingsRepository } from "#/lib/repositories/storage/AvFilterSettingsRepositoryImpl";
import { createLoadingWaitTimeSettingsRepository } from "#/lib/repositories/storage/LoadingWaitTimeSettingsRepositoryImpl";
import {
  BackgroundService,
  createBackgroundService,
} from "#/services/BackgroundService";
import {
  createLoadingWaitTimeSettingsService,
  LoadingWaitTimeSettingsService,
} from "#/services/LoadingWaitTimeSettingsService";
import {
  createUserFilterSettingsService,
  UserFilterSettingsService,
} from "#/services/UserFilterSettingsService";
import { createContext, ReactNode } from "react";

type AppContext = {
  userFilterSettingsService: UserFilterSettingsService;
  loadingWaitTimeSettingsService: LoadingWaitTimeSettingsService;
  backgroundService: BackgroundService;
};

export const AppContext = createContext<AppContext | null>(null);

interface Props {
  child: ReactNode;
}

function AppContextProvider({ child }: Props) {
  const avFilterRepository = createAvFilterSettingsRepository();
  const amateurFilterRepository = createAmateurFilterSettingsRepository();
  const animeFilterRepository = createAnimeFilterSettingsRepository();

  const userFilterSettingsService = createUserFilterSettingsService(
    avFilterRepository,
    amateurFilterRepository,
    animeFilterRepository,
  );

  const waitTimeSettingsRepository = createLoadingWaitTimeSettingsRepository();
  const loadingWaitTimeSettingsService = createLoadingWaitTimeSettingsService(
    waitTimeSettingsRepository,
  );

  const backgroundRepository = createBackgroundRepository();
  const backgroundService = createBackgroundService(backgroundRepository);

  const services: AppContext = {
    userFilterSettingsService,
    loadingWaitTimeSettingsService,
    backgroundService,
  };

  return <AppContext.Provider value={services}>{child}</AppContext.Provider>;
}

export default AppContextProvider;
