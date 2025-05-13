import { Button } from "#/components/ui/button";
import { ReactNode } from "react";

interface Props {
  child: ReactNode;
  onSave: () => void;
  onReset: () => void;
}

function FormLayout({ child, onSave, onReset }: Props) {
  return (
    <div className="form-container">
      <form>
        <div>
          <div>{child}</div>
          <div>
            <Button type="button" onClick={onReset}>
              リセット
            </Button>
            <Button type="button" onClick={onSave}>
              保存
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormLayout;
