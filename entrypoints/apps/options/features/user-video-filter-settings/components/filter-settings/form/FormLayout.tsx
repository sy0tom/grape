import { Button } from "#/components/ui/button";
import { ReactNode } from "react";

interface Props {
  child: ReactNode;
  handleSave: () => void;
  handleReset: () => void;
}

function FormLayout({ child, handleSave, handleReset }: Props) {
  return (
    <div className="form-container">
      <form>
        <div>
          <div>{child}</div>
          <div className="mr-3 flex justify-end gap-2">
            <Button type="button" onClick={handleReset} className="w-24">
              リセット
            </Button>
            <Button type="button" onClick={handleSave} className="w-24">
              保存
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormLayout;
