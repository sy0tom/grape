import { FilterSettingsBoard } from "../features/filter-settings";

function FilterSettingsPage() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="text-2xl font-bold">Filter Settings</div>
        <div className="text-gray-500">
          Configure your filter settings here.
        </div>
      </div>
      <FilterSettingsBoard />
    </div>
  );
}

export default FilterSettingsPage;
