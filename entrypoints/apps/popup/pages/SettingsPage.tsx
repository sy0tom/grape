import { AppContext } from "#/context/AppContextProvider";
import useSWR from "swr";
import { UserSettingsForm } from "../features/user-settings";

function SettingsPage() {
  const userSettingsService = useContext(AppContext);
  const { data, error } = useSWR("getUserSettings", () =>
    userSettingsService?.userSettingsService.getUserSettings(),
  );

  if (!data && !error) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  return <UserSettingsForm userSettings={data!} />;
}

export default SettingsPage;
