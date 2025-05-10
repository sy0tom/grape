import { Button } from "#/components/ui/button";
import { UserSettings } from "#/types";
import InjectWaitTimeForm from "./inject-wait-time-form/InjectWaitTimeForm";
import VideoFilterForm from "./video-filter-form/VideFilterForm";

interface Props {
  userSettings: UserSettings;
}
function UserSettingsForm({ userSettings }: Props) {
  return (
    <>
      <div className="form-container">
        <div>
          <VideoFilterForm initialValues={userSettings.filters} />
        </div>
        <div>
          <InjectWaitTimeForm injectWaitTime={userSettings.injectWaitTime} />
        </div>
        <div>
          <Button type="button" color="secondary">
            リセット
          </Button>
          <Button type="button" color="primary">
            保存
          </Button>
        </div>
      </div>
    </>
  );
}

export default UserSettingsForm;
