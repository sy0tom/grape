import { FormInput, FormSelect } from "#/components/form-field";
import { Button } from "#/components/ui/button";
import { filterOptions, VideoFilter } from "#/types";
import { useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";

interface Props {
  initialValues?: VideoFilter | null;
  onSave: (data: VideoFilter) => void;
}

function FilterForm({ initialValues, onSave }: Props) {
  const createFilter = (filter?: VideoFilter | null): VideoFilter => {
    return filter ? { ...filter } : ({ id: uuid() } as VideoFilter);
  };

  const defaultValues = createFilter(initialValues);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<VideoFilter>({ defaultValues: defaultValues });

  const onReset = () => {
    reset(defaultValues);
  };

  return (
    <div form-container>
      <form>
        <div className="p-2">
          <FormInput
            label="フィルター名"
            type="text"
            placeholder="お気に入り"
            name="name"
            register={register}
            error={errors.name}
          />
          {/* <FormInput
            label="フィルターの説明"
            name="description"
            type="text"
            placeholder="フィルターの説明を入力してください"
            register={register}
            error={errors.description}
          /> */}
        </div>
        <div className="p-2 flex gap-1">
          <FormSelect
            options={[
              {
                group: "2D/VR",
                items: filterOptions.mediaTypes.map((it) => ({
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
                items: filterOptions.qualities.map((it) => ({
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
                items: filterOptions.prices.map((it) => ({
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
                items: filterOptions.releases.map((it) => ({
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
                items: filterOptions.sorts.map((it) => ({
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
        <div className="p-2">
          <FormInput
            label="キーワード"
            type="text"
            placeholder="+巨乳 -ベスト"
            name={`keywords`}
            register={register}
          />
        </div>
        <div className="flex">
          <div className="p-2">
            <Button type="button" onClick={() => onReset()}>
              リセット
            </Button>
          </div>
          <div className="p-2">
            <Button
              type="button"
              onClick={() => handleSubmit(onSave)}
              disabled={isSubmitting}
            >
              保存する
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FilterForm;
