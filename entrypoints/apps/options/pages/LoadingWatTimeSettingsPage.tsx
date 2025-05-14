import { UIconst } from "#/constants";
import { context } from "#/context";
import useSWR from "swr";
import { LoadingWaitTimeSettingsForm } from "../features/loading-wait-time-settings";

function LoadingWatTimeSettingsPage() {
  const { data, error } = useSWR("loadingWaitTimeSettingsService", () =>
    context.loadingWaitTimeSettingsService?.get(),
  );

  if (!data && !error) {
    return <span>{UIconst.msg.loading}</span>;
  }
  if (error) {
    return <span>{UIconst.msg.loadingError}</span>;
  }

  if (data) {
    return <LoadingWaitTimeSettingsForm initialValues={data} />;
  }
}

export default LoadingWatTimeSettingsPage;
