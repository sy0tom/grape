import { context } from "#/context";
import useSWR from "swr";
import { FilterSettingsBoard } from "../features/user-video-filter-settings";
import ActivationSettingsBoard from "../features/user-video-filter-settings/components/activation-settings/ActivationSettingsBoard";
import PageLayout from "./layout/PageLayout";

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
      <PageLayout
        title="フィルター設定"
        description="よく使うフィルターを保存してから作品一覧から選択できます。"
        content={
          <>
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
          </>
        }
      />
    );
  }
}

export default FilterSettingsPage;
