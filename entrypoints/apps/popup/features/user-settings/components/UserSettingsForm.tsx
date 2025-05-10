import { Button } from "#/components/ui/button";
import { InjectWaitTime, VideoFilter } from "#/types/fanza";
import { useForm } from "react-hook-form";
import FilterBoard from "./FilterBoard";
import WaitTimeBoard from "./WaitTimeBoard";

export interface UserSettingsFormData {
  filters?: VideoFilter[];
  injectWaitTime?: InjectWaitTime;
}

interface Props {
  initialValues: UserSettingsFormData;
}

function UserSettingsForm({ initialValues }: Props) {
  const [defaultValues, setDefaultValues] =
    useState<UserSettingsFormData>(initialValues);

  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<UserSettingsFormData>({ defaultValues: defaultValues });

  const onReset = () => {
    reset(defaultValues);
  };

  const onSubmit = async (data: UserSettingsFormData) => {
    console.log(`onSubmit: ${JSON.stringify(data)}`);
    setDefaultValues(data);
  };

  return (
    <>
      <div className="form-container">
        <FilterBoard
          watch={watch}
          setValue={setValue}
          register={register}
          control={control}
        />
        <WaitTimeBoard register={register} errors={errors} />
        <Button
          type="button"
          className="bg-secondary text-black"
          onClick={onReset}
        >
          リセット
        </Button>
        <Button
          type="button"
          className="bg-primary text-white"
          disabled={isSubmitting}
          onClick={handleSubmit(onSubmit)}
        >
          保存
        </Button>
      </div>
    </>
  );
}

export default UserSettingsForm;
