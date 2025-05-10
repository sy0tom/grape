import { InjectWaitTime } from "#/types/fanza";

interface Props {
  injectWaitTime?: InjectWaitTime;
}

function InjectWaitTimeForm({ injectWaitTime }: Props) {
  return (
    <div>
      <span>読み込み時間</span>
      <div>
        <label htmlFor="">checkbox表示読み込み時間(ミリ秒)</label>
        <input type="number" value={injectWaitTime?.checkboxWaitMs ?? 500} />
      </div>
      <div>
        <label htmlFor="">バスケット追加読み込み時間(ミリ秒)</label>
        <input type="number" value={injectWaitTime?.addBasketWaitMs ?? 1000} />
      </div>
    </div>
  );
}

export default InjectWaitTimeForm;
