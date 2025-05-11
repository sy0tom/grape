import { ReactNode } from "react";

interface Props {
  title: string;
  formNode: ReactNode;
  controlNode: ReactNode;
}

function FilterSettingsFormLayout({ title, formNode, controlNode }: Props) {
  return (
    <>
      <span>{title}</span>
      {formNode}
      {controlNode}
    </>
  );
}

export default FilterSettingsFormLayout;
