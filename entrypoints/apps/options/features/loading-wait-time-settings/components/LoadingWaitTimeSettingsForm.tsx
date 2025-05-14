import { FormInput } from "#/components/form-field";
import { Button } from "#/components/ui/button";
import { UIconst } from "#/constants";
import { LoadingWaitTimeSettings } from "#/types";
import { useForm } from "react-hook-form";

interface LoadingWaitTimeSettingsData {
  listLoadingWaitMs: number;
  addBasketWaitMs: number;
}

interface Props {
  initialValues: LoadingWaitTimeSettings;
}

function LoadingWaitTimeSettingsForm({ initialValues }: Props) {
  const createDefaultValues = (
    settings: LoadingWaitTimeSettings,
  ): LoadingWaitTimeSettingsData => {
    return {
      listLoadingWaitMs: settings.listLoadingWaitMs ?? 1000,
      addBasketWaitMs: settings.addBasketWaitMs ?? 1000,
    };
  };

  const [defaultValues, setDefaultValues] =
    useState<LoadingWaitTimeSettingsData>(createDefaultValues(initialValues));

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoadingWaitTimeSettingsData>({
    defaultValues: defaultValues,
  });

  const onSubmit = async (data: LoadingWaitTimeSettingsData) => {
    setDefaultValues(data);
  };

  const onReset = async () => {
    reset(defaultValues);
  };

  return (
    <div className="form-container">
      <form>
        <div>
          <div>
            <label
              htmlFor="listLoadingWaitMs"
              className="px-1 text-sm text-gray-700"
            >
              作品一覧読み込み時間
            </label>
            <FormInput
              type="number"
              placeholder="100(ミリ秒)"
              name="listLoadingWaitMs"
              register={register}
              error={errors.listLoadingWaitMs}
            />
          </div>
          <div>
            <label
              htmlFor="addBasketWaitMs"
              className="px-1 text-sm text-gray-700"
            >
              バケット追加読み込み時間
            </label>
            <FormInput
              type="number"
              placeholder="100(ミリ秒)"
              name="addBasketWaitMs"
              register={register}
              error={errors.addBasketWaitMs}
            />
          </div>
        </div>
        <div>
          <Button
            type="button"
            className="bg-primary"
            onClick={onReset}
            disabled={isSubmitting}
          >
            {UIconst.button.reset}
          </Button>
          <Button
            type="button"
            className="bg-primary"
            onClick={handleSubmit(onSubmit)}
            disabled={isSubmitting}
          >
            {UIconst.button.save}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default LoadingWaitTimeSettingsForm;
