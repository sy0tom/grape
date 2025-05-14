import { context } from "#/context";
import { ReactNode } from "react";
import useSWR from "swr";
import {
  ActivationSettingsBoard,
  FilterSettingsBoard,
} from "../features/user-video-filter-settings";
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
    const renderBoard = (title: string, content: ReactNode) => {
      return (
        <div className="p-2">
          <div className="text-base">{title}</div>
          <div className="p-2">{content}</div>
        </div>
      );
    };
    return (
      <PageLayout
        title="フィルター設定"
        description="よく使うフィルターを保存してから作品一覧から選択できます。"
        content={
          <>
            {renderBoard(
              "フィルター設定の有効化",
              <ActivationSettingsBoard
                isActive={data.isActive}
                activationService={context.featureActivationService}
              />,
            )}
            {renderBoard(
              "フィルター",
              <div>
                <FilterSettingsBoard
                  title="ビデオ"
                  initialValues={data.avFilters}
                  videoFilterSettingsService={context.avFilterSettingsService}
                  formType="av"
                />
                <FilterSettingsBoard
                  title="素人"
                  initialValues={data.amateurFilters}
                  videoFilterSettingsService={
                    context.amateurFilterSettingsService
                  }
                  formType="amateur"
                />
                <FilterSettingsBoard
                  title="アニメ"
                  initialValues={data.animeFilters}
                  videoFilterSettingsService={
                    context.animeFilterSettingsService
                  }
                  formType="anime"
                />
              </div>,
            )}
          </>
        }
      />
    );
  }
}

export default FilterSettingsPage;
