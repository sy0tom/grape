import { context } from "#/context";
import useSWR from "swr";
import { FilterSettingsBoard } from "../features/user-video-filter-settings";
import ActivationSettingsBoard from "../features/user-video-filter-settings/components/activation-settings/ActivationSettingsBoard";

function FilterSettingsPage() {
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
        <div className="flex flex-col w-full h-full">
          <div className="text-2xl font-bold">フィルター設定</div>
          <div className="px-2 text-gray-500">
            よく使うフィルターを保存してから作品一覧から選択できます。
          </div>
        </div>
        <div className="p-4">
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
      </div>
    );
  }
}

export default FilterSettingsPage;
