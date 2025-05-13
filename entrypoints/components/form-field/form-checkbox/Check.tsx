import { Checkbox } from "#/components/ui/checkbox";
import { Switch } from "#/components/ui/switch";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface Props<T extends FieldValues> {
  type: "checkbox" | "toggle";
  name: Path<T>;
  register: UseFormRegister<T>;
  className?: string;
}

function Check({ type, name, register, className }: Props<FieldValues>) {
  const render = () => {
    switch (type) {
      case "checkbox":
        return <Checkbox {...register(name)} className={className} />;
      case "toggle":
        return <Switch {...register(name)} />;
    }
  };
  return render();
}

export default Check;
