import { FormInput, FormSelect } from "#/components/form-field";

import { FormTag } from "#/components/form-field";
import { AnimeFilter, AnimeFilterConfig } from "#/types/fanza";
import { useForm } from "react-hook-form";
import FormLayout from "./FormLayout";

interface Props {
  initialValues?: AnimeFilter;
  onSave: (data: AnimeFilter) => Promise<void>;
}

function AnimeFilterSettingsForm({ initialValues, onSave }: Props) {
  const createDefaultValues = (data?: AnimeFilter): AnimeFilter => {
    return data ? { ...data } : ({} as AnimeFilter);
  };

  const defaultValues = createDefaultValues(initialValues);

  const _onSave = async (data: AnimeFilter) => {
    await onSave(data);
  };

  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<AnimeFilter>({
    defaultValues: defaultValues,
  });

  const onReset = () => {
    reset(defaultValues);
  };

  return (
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
              requiredMessage="フィルター名は必須です"
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
                    items: AnimeFilterConfig.filterOptions.qualities.map(
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
                    items: AnimeFilterConfig.filterOptions.prices.map((it) => ({
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
                    group: "並び替え",
                    items: AnimeFilterConfig.filterOptions.sorts.map((it) => ({
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
                placeholder="巨乳 -BEST"
                name="params.keyword"
                control={control}
                errors={errors.params?.keyword}
              />
            </div>
          </div>
        </>
      }
    />
  );
}

export default AnimeFilterSettingsForm;
