import {
  BackgroundService,
  createBackgroundService,
  createFeatureActivationService,
  createLoadingWaitTimeSettingsService,
  createUserVideoFilterSettingsService,
  createVideoFilterSettingsService,
  FeatureActivationService,
  LoadingWaitTimeSettingsService,
  UserVideoFilterSettingsService,
  VideoFilterSettingsService,
} from "#/domain";
import {
  createAmateurFilterSettingsRepository,
  createAnimeFilterSettingsRepository,
  createAvFilterSettingsRepository,
  createBackgroundRepository,
  createFeatureActivationRepository,
  createLoadingWaitTimeSettingsRepository,
} from "#/lib";

import { createContext, ReactNode } from "react";

type AppContext = {
  featureActivationService: FeatureActivationService;
  userVideoFilterSettingsService: UserVideoFilterSettingsService;
  avFilterSettingsService: VideoFilterSettingsService;
  amateurFilterSettingsService: VideoFilterSettingsService;
  animeFilterSettingsService: VideoFilterSettingsService;
  loadingWaitTimeSettingsService: LoadingWaitTimeSettingsService;
  backgroundService: BackgroundService;
};

export const AppContext = createContext<AppContext | null>(null);

interface Props {
  child: ReactNode;
}

function AppContextProvider({ child }: Props) {
  const featureActivationRepository = createFeatureActivationRepository();
  const featureActivationService = createFeatureActivationService(
    featureActivationRepository,
  );

  const avFilterRepository = createAvFilterSettingsRepository();
  const avFilterSettingsService =
    createVideoFilterSettingsService(avFilterRepository);

  const amateurFilterRepository = createAmateurFilterSettingsRepository();
  const amateurFilterSettingsService = createVideoFilterSettingsService(
    amateurFilterRepository,
  );

  const animeFilterRepository = createAnimeFilterSettingsRepository();
  const animeFilterSettingsService = createVideoFilterSettingsService(
    animeFilterRepository,
  );

  const userVideoFilterSettingsService = createUserVideoFilterSettingsService(
    featureActivationService,
    avFilterSettingsService,
    amateurFilterSettingsService,
    animeFilterSettingsService,
  );

  const waitTimeSettingsRepository = createLoadingWaitTimeSettingsRepository();
  const loadingWaitTimeSettingsService = createLoadingWaitTimeSettingsService(
    waitTimeSettingsRepository,
  );

  const backgroundRepository = createBackgroundRepository();
  const backgroundService = createBackgroundService(backgroundRepository);

  const services: AppContext = {
    featureActivationService,
    userVideoFilterSettingsService,
    avFilterSettingsService,
    amateurFilterSettingsService,
    animeFilterSettingsService,
    loadingWaitTimeSettingsService,
    backgroundService,
  };

  return <AppContext.Provider value={services}>{child}</AppContext.Provider>;
}

export default AppContextProvider;
