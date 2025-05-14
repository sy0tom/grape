import { UIconst } from "#/constants";
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
    return <span>{UIconst.msg.loading}</span>;
  }

  if (error) {
    return <span>{UIconst.msg.loadingError}</span>;
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
        title={UIconst.menu.filterSettings}
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
                  title={UIconst.label.avFilter}
                  initialValues={data.avFilters}
                  videoFilterSettingsService={context.avFilterSettingsService}
                />
                <FilterSettingsBoard
                  title={UIconst.label.amateurFilter}
                  initialValues={data.amateurFilters}
                  videoFilterSettingsService={
                    context.amateurFilterSettingsService
                  }
                />
                <FilterSettingsBoard
                  title={UIconst.label.animeFilter}
                  initialValues={data.animeFilters}
                  videoFilterSettingsService={
                    context.animeFilterSettingsService
                  }
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
