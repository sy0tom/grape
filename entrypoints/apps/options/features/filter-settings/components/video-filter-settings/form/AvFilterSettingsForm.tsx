import { FormInput, FormSelect } from "#/components/form-field";
import { Button } from "#/components/ui/button";
import { AvFilter, AvFilterConfig } from "#/types/fanza";
import { useForm } from "react-hook-form";

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
    <div className="form-container">
      <form>
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
                  group: "2D/VR",
                  items: AvFilterConfig.filterOptions.mediaTypes.map((it) => ({
                    label: it.label,
                    value: it.value,
                  })),
                },
              ]}
              placeholder="2D/VR"
              name={"mediaType"}
              control={control}
            />
            <FormSelect
              options={[
                {
                  group: "配信形式",
                  items: AvFilterConfig.filterOptions.qualities.map((it) => ({
                    label: it.label,
                    value: it.value,
                  })),
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
                  items: AvFilterConfig.filterOptions.prices.map((it) => ({
                    label: it.label,
                    value: it.value,
                  })),
                },
              ]}
              placeholder="価格"
              name={`price`}
              control={control}
            />
            <FormSelect
              options={[
                {
                  group: "配信開始日",
                  items: AvFilterConfig.filterOptions.releases.map((it) => ({
                    label: it.label,
                    value: it.value,
                  })),
                },
              ]}
              placeholder="配信開始日"
              name={`release`}
              control={control}
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
        <div>
          <Button type="button" onClick={onReset}>
            リセット
          </Button>
          <Button type="button" onClick={handleSubmit(_onSave)}>
            保存
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AvFilterSettingsForm;
