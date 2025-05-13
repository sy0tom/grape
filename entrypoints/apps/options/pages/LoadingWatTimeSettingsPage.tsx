import { context } from "#/context";
import useSWR from "swr";
import { LoadingWaitTimeSettingsForm } from "../features/loading-wait-time-settings";

function LoadingWatTimeSettingsPage() {
  const { data, error } = useSWR("loadingWaitTimeSettingsService", () =>
    context.loadingWaitTimeSettingsService?.get(),
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
