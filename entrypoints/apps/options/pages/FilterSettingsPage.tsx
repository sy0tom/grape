import { AppContext } from "#/context/AppContextProvider";
import useSWR from "swr";
import { FilterSettingsBoard } from "../features/filter-settings";

function FilterSettingsPage() {
  const filterService = useContext(AppContext)?.userFilterSettingsService;
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
          <div className="text-2xl font-bold">Filter Settings</div>
          <div className="text-gray-500">
            Configure your filter settings here.
          </div>
        </div>
        <FilterSettingsBoard title="ビデオ" initialValues={data.avFilters!} />
      </div>
    );
  }
}

export default FilterSettingsPage;
