import { FormInput, FormSelect, FormTag } from "#/components/form-field";
import { AvFilter, AvFilterConfig } from "#/types/fanza";
import { useForm } from "react-hook-form";
import FormLayout from "./FormLayout";

interface Props {
  initialValues?: AvFilter;
  onSave: (data: AvFilter) => Promise<void>;
}

function AvFilterSettingsForm({ initialValues, onSave }: Props) {
  const createDefaultValues = (data?: AvFilter): AvFilter => {
    return data ? { ...data } : ({} as AvFilter);
  };

  const defaultValues = createDefaultValues(initialValues);

  const _onSave = async (data: AvFilter) => {
    await onSave(data);
  };

  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<AvFilter>({
    defaultValues: defaultValues,
  });

  const onReset = () => {
    reset(defaultValues);
  };

  return (
    <>
      <FormLayout
        onSave={handleSubmit(_onSave)}
        onReset={onReset}
        child={
          <>
            <div>
              <span>フィルター名</span>
              <FormInput
                type="text"
                placeholder="お気に入り"
                name="name"
                register={register}
                error={errors.name}
                requiredMessage="フィルター名は必須です"
              />
            </div>
            <div>
              <span>フィルター条件</span>
              <div className="flex gap-1">
                <FormSelect
                  options={[
                    {
                      group: "2D/VR",
                      items: AvFilterConfig.filterOptions.mediaTypes.map(
                        (it) => ({
                          label: it.label,
                          value: it.value,
                        }),
                      ),
                    },
                  ]}
                  placeholder="2D/VR"
                  name={"params.mediaType"}
                  control={control}
                  error={errors.params?.mediaType}
                />
                <FormSelect
                  options={[
                    {
                      group: "配信形式",
                      items: AvFilterConfig.filterOptions.qualities.map(
                        (it) => ({
                          label: it.label,
                          value: it.value,
                        }),
                      ),
                    },
                  ]}
                  placeholder="配信形式"
                  name={`params.quality`}
                  control={control}
                  error={errors.params?.quality}
                />
                <FormSelect
                  options={[
                    {
                      group: "価格",
                      items: AvFilterConfig.filterOptions.prices.map((it) => ({
                        label: it.label,
                        value: it.value,
                      })),
                    },
                  ]}
                  placeholder="価格"
                  name={`params.price`}
                  control={control}
                  error={errors.params?.price}
                />
                <FormSelect
                  options={[
                    {
                      group: "配信開始日",
                      items: AvFilterConfig.filterOptions.releases.map(
                        (it) => ({
                          label: it.label,
                          value: it.value,
                        }),
                      ),
                    },
                  ]}
                  placeholder="配信開始日"
                  name={`params.release`}
                  control={control}
                  error={errors.params?.release}
                />
                <FormSelect
                  options={[
                    {
                      group: "並び替え",
                      items: AvFilterConfig.filterOptions.sorts.map((it) => ({
                        label: it.label,
                        value: it.value,
                      })),
                    },
                  ]}
                  placeholder="並び替え"
                  name={`params.sort`}
                  control={control}
                  error={errors.params?.sort}
                />
              </div>
              <div>
                <span>キーワード</span>
                <FormTag
                  placeholder="+巨乳 -ベスト -BEST"
                  name="params.keyword"
                  control={control}
                  errors={errors.params?.keyword}
                />
              </div>
            </div>
          </>
        }
      />
    </>
  );
}

export default AvFilterSettingsForm;
