import { FormInput } from "#/components/form-field";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { UserSettingsFormData } from "./UserSettingsForm";

interface Props {
  register: UseFormRegister<UserSettingsFormData>;
  errors?: FieldErrors<UserSettingsFormData>;
}

function WaitTimeBoard({ register, errors }: Props) {
  return (
    <>
      <div className="p-2">
        <span>読み込み時間設定</span>
      </div>
      <div className="p-2">
        <FormInput
          label="リスト読み込み時間"
          type="number"
          placeholder="100(ミリ秒)"
          name="injectWaitTime.listLoadingWaitMs"
          register={register}
          error={errors?.injectWaitTime?.listLoadingWaitMs}
        />
        <FormInput
          label="バケット保存時間"
          type="number"
          placeholder="100(ミリ秒)"
          name="injectWaitTime.addBasketWaitMs"
          register={register}
          error={errors?.injectWaitTime?.addBasketWaitMs}
        />
      </div>
    </>
  );
}

export default WaitTimeBoard;
