import {
  BackgroundService,
  createBackgroundService,
  createFeatureActivationService,
  createLoadingWaitTimeSettingsService,
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
import { createUserVideoFilterSettingsService } from "../domain/video-filter/UserVideoFilterSettingsService";

type AppContext = {
  featureActivationService: FeatureActivationService;
  userVideoFilterSettingsService: UserVideoFilterSettingsService;
  avFilterSettingsService: VideoFilterSettingsService;
  amateurFilterSettingsService: VideoFilterSettingsService;
  animeFilterSettingsService: VideoFilterSettingsService;
  loadingWaitTimeSettingsService: LoadingWaitTimeSettingsService;
  backgroundService: BackgroundService;
};

// prd repository
const featureActivationRepository = createFeatureActivationRepository();
const avFilterSettingsRepository = createAvFilterSettingsRepository();
const amateurFilterSettingsRepository = createAmateurFilterSettingsRepository();
const animeFilterSettingsRepository = createAnimeFilterSettingsRepository();
const loadingWaitTimeSettingsRepository =
  createLoadingWaitTimeSettingsRepository();
const backgroundRepository = createBackgroundRepository();

// service
const featureActivationService = createFeatureActivationService(
  featureActivationRepository,
);
const avFilterSettingsService = createVideoFilterSettingsService(
  avFilterSettingsRepository,
);
const amateurFilterSettingsService = createVideoFilterSettingsService(
  amateurFilterSettingsRepository,
);
const animeFilterSettingsService = createVideoFilterSettingsService(
  animeFilterSettingsRepository,
);
const loadingWaitTimeSettingsService = createLoadingWaitTimeSettingsService(
  loadingWaitTimeSettingsRepository,
);
const backgroundService = createBackgroundService(backgroundRepository);

const userVideoFilterSettingsService = createUserVideoFilterSettingsService(
  featureActivationService,
  avFilterSettingsService,
  amateurFilterSettingsService,
  animeFilterSettingsService,
);

export const context: AppContext = {
  featureActivationService,
  userVideoFilterSettingsService,
  avFilterSettingsService,
  amateurFilterSettingsService,
  animeFilterSettingsService,
  loadingWaitTimeSettingsService,
  backgroundService,
};
