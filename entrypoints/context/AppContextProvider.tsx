import { createBackgroundRepository } from "#/lib/repositories/background/BackgroundRepositoryImpl";
import { createLoadingWaitTimeSettingsRepository } from "#/lib/repositories/storage/LoadingWaitTimeSettingsRepositoryImpl";
import { createStorageUserSettingsRepository } from "#/lib/repositories/storage/StorageUserSettingsRepositoryImpl";
import {
  BackgroundService,
  createBackgroundService,
} from "#/services/BackgroundService";
import {
  createLoadingWaitTimeSettingsService,
  LoadingWaitTimeSettingsService,
} from "#/services/LoadingWaitTimeSettingsService";
import {
  createUserSettingsService,
  UserSettingsService,
} from "#/services/UserSettingsService";
import { createContext, ReactNode } from "react";

type AppContext = {
  userSettingsService: UserSettingsService;
  backgroundService: BackgroundService;
  loadingWaitTimeSettingsService: LoadingWaitTimeSettingsService;
};

export const AppContext = createContext<AppContext | null>(null);

interface Props {
  child: ReactNode;
}

function AppContextProvider({ child }: Props) {
  const userSettingsRepository = createStorageUserSettingsRepository();
  const userSettingsService = createUserSettingsService(userSettingsRepository);

  const backgroundRepository = createBackgroundRepository();
  const backgroundService = createBackgroundService(backgroundRepository);

  const loadingWaitTimeSettingsRepository =
    createLoadingWaitTimeSettingsRepository();
  const loadingWaitTimeSettingsService = createLoadingWaitTimeSettingsService(
    loadingWaitTimeSettingsRepository,
  );

  const services: AppContext = {
    userSettingsService,
    backgroundService,
    loadingWaitTimeSettingsService,
  };

  return <AppContext.Provider value={services}>{child}</AppContext.Provider>;
}

export default AppContextProvider;
