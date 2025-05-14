import { FormInput, FormTag } from "#/components/form-field";
import { Filter, OptionFilterConfig, VideoFilter } from "#/types";
import { ReactNode } from "react";
import { Path, useForm } from "react-hook-form";
import FilterOptions from "./FilterOptions";
import FormLayout from "./FormLayout";

interface Props<T extends VideoFilter> {
  initialValues?: T;
  optionFilterConfig: OptionFilterConfig;
  handleSave: (data: VideoFilter) => Promise<void>;
}

function VideoFilterSettingsForm<T extends VideoFilter>({
  initialValues,
  optionFilterConfig,
  handleSave,
}: Props<T>) {
  const createDefaultValues = (data?: VideoFilter): VideoFilter => {
    return data ? { ...data } : ({} as VideoFilter);
  };

  const defaultValues = createDefaultValues(initialValues);

  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<VideoFilter>({
    defaultValues: defaultValues,
  });

  const optionFilterValues: { name: Path<T>; filter: Filter }[] = [
    { name: "params.mediaOption", filter: optionFilterConfig.mediaFilter },
    { name: "params.qualityOption", filter: optionFilterConfig.qualityFilter },
    { name: "params.priceOption", filter: optionFilterConfig.priceFilter },
    { name: "params.releaseOption", filter: optionFilterConfig.releaseFilter },
    { name: "params.sortOption", filter: optionFilterConfig.sortFilter },
  ]
    .filter((it) => it.filter !== undefined)
    .map((it) => ({
      name: it.name as Path<T>,
      filter: it.filter as Filter,
    }));

  const onReset = () => {
    reset(defaultValues);
  };

  const fieldRender = (title: string, content: ReactNode) => {
    return (
      <div className="p-1">
        <span>{title}</span>
        {content}
      </div>
    );
  };

  return (
    <>
      <FormLayout
        handleSave={handleSubmit(handleSave)}
        handleReset={onReset}
        child={
          <>
            <div className="p-2">
              {fieldRender(
                "フィルター名",
                <FormInput
                  type="text"
                  placeholder="お気に入り"
                  name="name"
                  register={register}
                  error={errors.name}
                  requiredMessage="フィルター名は必須です"
                />,
              )}
              {fieldRender(
                "フィルター条件",
                <div className="flex gap-1">
                  {optionFilterValues.map((value) => (
                    <FilterOptions
                      key={value.filter.label}
                      filter={value.filter}
                      name={value.name}
                      control={control}
                    />
                  ))}
                </div>,
              )}
              {fieldRender(
                "キーワード",
                <FormTag
                  placeholder="+巨乳 -ベスト"
                  name="params.keywords"
                  control={control}
                  errors={errors.params?.keywords}
                />,
              )}
            </div>
          </>
        }
      />
    </>
  );
}

export default VideoFilterSettingsForm;
