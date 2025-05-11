import { AppContext } from "#/context/AppContextProvider";
import useSWR from "swr";
import { LoadingWaitTimeSettingsForm } from "../features/loading-wait-time-settings";

function LoadingWatTimeSettingsPage() {
  const service = useContext(AppContext);

  const { data, error } = useSWR("loadingWaitTimeSettingsService", () =>
    service?.loadingWaitTimeSettingsService?.get(),
  );

  if (!data && !error) {
    return <span>Loading...</span>;
  }
  if (error) {
    return <span>Error: {error.message}</span>;
  }

  if (data) {
    return <LoadingWaitTimeSettingsForm initialValues={data} />;
  }
}

export default LoadingWatTimeSettingsPage;
