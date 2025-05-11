import { AppContext } from "#/context/AppContextProvider";
import { AmateurFilter, AnimeFilter, AvFilter } from "#/types";
import useSWR from "swr";
import { FilterSettingsBoard } from "../features/filter-settings";
import AmateurFilterSettingsForm from "../features/filter-settings/components/form/AmateurFilterSettingsForm";
import AnimeFilterSettingsForm from "../features/filter-settings/components/form/AnimeFilterSettingsForm";
import AvFilterSettingsForm from "../features/filter-settings/components/form/AvFilterSettingsForm";

function FilterSettingsPage() {
  const filterService = useContext(AppContext)?.userFilterSettingsService;
  const avFilterService = useContext(AppContext)?.avFilterSettingsService;
  const amateurFilterService =
    useContext(AppContext)?.amateurFilterSettingsService;
  const animeFilterService = useContext(AppContext)?.animeFilterSettingsService;
  const { data, error } = useSWR("filterService.getInitializeData", () =>
    filterService?.getInitializeData(),
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
        <FilterSettingsBoard<AvFilter>
          title="ビデオ"
          initialValues={data.avFilters!}
          videoFilterService={avFilterService!}
          formType={AvFilterSettingsForm}
        />
        <FilterSettingsBoard<AmateurFilter>
          title="素人"
          initialValues={data.amateurFilters!}
          videoFilterService={amateurFilterService!}
          formType={AmateurFilterSettingsForm}
        />
        <FilterSettingsBoard<AnimeFilter>
          title="アニメ"
          initialValues={data.animeFilters!}
          videoFilterService={animeFilterService!}
          formType={AnimeFilterSettingsForm}
        />
      </div>
    );
  }
}

export default FilterSettingsPage;
