import { FormInput, FormSelect } from "#/components/form-field";
import { AmateurFilter, AmateurFilterConfig } from "#/types/fanza";
import { useForm } from "react-hook-form";
import FormLayout from "./FormLayout";

interface Props {
  initialValues?: AmateurFilter;
  onSave: (data: AmateurFilter) => Promise<void>;
}

function AmateurFilterSettingsForm({ initialValues, onSave }: Props) {
  const createDefaultValues = (data?: AmateurFilter): AmateurFilter => {
    return data ? { ...data } : ({} as AmateurFilter);
  };

  const defaultValues = createDefaultValues(initialValues);

  const _onSave = async (data: AmateurFilter) => {
    await onSave(data);
  };

  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<AmateurFilter>({
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
              />
            </div>
            <div>
              <span>フィルター条件</span>
              <div className="flex gap-1">
                <FormSelect
                  options={[
                    {
                      group: "配信形式",
                      items: AmateurFilterConfig.filterOptions.qualities.map(
                        (it) => ({
                          label: it.label,
                          value: it.value,
                        }),
                      ),
                    },
                  ]}
                  placeholder="配信形式"
                  name={`quality`}
                  control={control}
                />
                <FormSelect
                  options={[
                    {
                      group: "価格",
                      items: AmateurFilterConfig.filterOptions.prices.map(
                        (it) => ({
                          label: it.label,
                          value: it.value,
                        }),
                      ),
                    },
                  ]}
                  placeholder="価格"
                  name={`price`}
                  control={control}
                />
                <FormSelect
                  options={[
                    {
                      group: "並び替え",
                      items: AmateurFilterConfig.filterOptions.sorts.map(
                        (it) => ({
                          label: it.label,
                          value: it.value,
                        }),
                      ),
                    },
                  ]}
                  placeholder="並び替え"
                  name={`sort`}
                  control={control}
                />
              </div>
              <div>
                <span>キーワード</span>
                <FormInput
                  type="text"
                  placeholder="+巨乳 -ベスト -BEST"
                  name="keywords"
                  register={register}
                />
              </div>
            </div>
          </>
        }
      />
    </>
  );
}

export default AmateurFilterSettingsForm;
