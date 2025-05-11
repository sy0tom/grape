import FilterSettingsFormLayout from "./FilterSettingsFormLayout";

function FilterSettingsBoard() {
  return (
    <>
      <div>
        <FilterSettingsFormLayout
          title="ビデオ"
          formNode={<span>Form Node</span>}
          controlNode={<span>Control Node</span>}
        />
      </div>
      <div>
        <FilterSettingsFormLayout
          title="素人"
          formNode={<span>Form Node</span>}
          controlNode={<span>Control Node</span>}
        />
      </div>
      <div>
        <FilterSettingsFormLayout
          title="アニメ"
          formNode={<span>Form Node</span>}
          controlNode={<span>Control Node</span>}
        />
      </div>
    </>
  );
}

export default FilterSettingsBoard;
