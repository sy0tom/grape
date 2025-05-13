import { AppContext } from "#/context/AppContextProvider";
import useSWR from "swr";
import { FilterSettingsBoard } from "../features/user-video-filter-settings";
import ActivationSettingsBoard from "../features/user-video-filter-settings/components/activation-settings/ActivationSettingsBoard";

function FilterSettingsPage() {
  const context = useContext(AppContext);

  if (!context) {
    return <span>Service not available</span>;
  }

  const userVideoFilterService = context.userVideoFilterSettingsService;

  const { data, error } = useSWR("filterService.getInitializeData", () =>
    userVideoFilterService.get(),
  );

  if (!data && !error) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  if (data) {
    return (
      <div>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="text-2xl font-bold">フィルター設定</div>
          <div className="text-gray-500">
            Configure your filter settings here.
          </div>
        </div>
        <ActivationSettingsBoard
          isActive={data.isActive}
          activationService={context.featureActivationService}
        />
        <FilterSettingsBoard
          title="ビデオ"
          initialValues={data.avFilters}
          videoFilterSettingsService={context.avFilterSettingsService}
          formType="av"
        />
        <FilterSettingsBoard
          title="素人"
          initialValues={data.amateurFilters}
          videoFilterSettingsService={context.amateurFilterSettingsService}
          formType="amateur"
        />
        <FilterSettingsBoard
          title="アニメ"
          initialValues={data.animeFilters}
          videoFilterSettingsService={context.animeFilterSettingsService}
          formType="anime"
        />
      </div>
    );
  }
}

export default FilterSettingsPage;
