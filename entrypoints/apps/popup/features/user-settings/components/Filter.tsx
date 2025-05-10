import { FormInput, FormSelect } from "#/components/form-field";
import { filterOptions } from "#/types";
import { Control, FieldErrors, UseFormRegister } from "react-hook-form";
import { UserSettingsFormData } from "./UserSettingsForm";

interface Props {
  index: number;
  register: UseFormRegister<UserSettingsFormData>;
  control: Control<UserSettingsFormData>;
  errors?: FieldErrors<UserSettingsFormData>;
}

export function Filter({ index, register, control, errors }: Props) {
  return (
    <>
      <div>
        <FormInput
          label="フィルター名"
          type="text"
          placeholder="お気に入り"
          name={`filters.${index}.name`}
          register={register}
          error={errors?.filters?.[index]?.name}
          className="w-2/3"
        />
      </div>

      <div className="flex items-center gap-1">
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
          name={`filters.${index}.mediaType`}
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
          name={`filters.${index}.quality`}
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
          name={`filters.${index}.price`}
          control={control}
        />
      </div>
      <div className="flex items-center gap-1">
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
          name={`filters.${index}.release`}
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
          name={`filters.${index}.sort`}
          control={control}
        />
      </div>
      <div className="">
        <FormInput
          label="キーワード"
          type="text"
          placeholder="+巨乳 -ベスト"
          name={`filters.${index}.keywords`}
          register={register}
          className="w-2/3"
        />
      </div>
    </>
  );
}
