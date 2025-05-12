import { AppContext } from "#/context/AppContextProvider";
import useSWR from "swr";
import { FilterSettingsBoard } from "../features/filter-settings";

function FilterSettingsPage() {
  const filterService = useContext(AppContext)?.userFilterSettingsService;
  if (!filterService) {
    return <span>Service not available</span>;
  }

  const { data, error } = useSWR("filterService.getInitializeData", () =>
    filterService.getInitializeData(),
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
        <FilterSettingsBoard
          title="ビデオ"
          initialValues={data.avFilters!}
          videoFilterSettingsService={filterService.getAvService()}
          formType="av"
        />
        <FilterSettingsBoard
          title="素人"
          initialValues={data.amateurFilters!}
          videoFilterSettingsService={filterService.getAmateurService()}
          formType="amateur"
        />
        <FilterSettingsBoard
          title="アニメ"
          initialValues={data.animeFilters}
          videoFilterSettingsService={filterService.getAnimeService()}
          formType="anime"
        />
      </div>
    );
  }
}

export default FilterSettingsPage;
