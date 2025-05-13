import { Checkbox } from "#/components/ui/checkbox";
import { Switch } from "#/components/ui/switch";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface Props<T extends FieldValues> {
  type: "checkbox" | "toggle";
  checked: boolean;
  name: Path<T>;
  register: UseFormRegister<T>;
  className?: string;
}

function Check<T extends FieldValues>({
  type,
  checked,
  name,
  register,
  className,
}: Props<T>) {
  const render = () => {
    switch (type) {
      case "checkbox":
        return (
          <Checkbox
            {...register(name)}
            checked={checked}
            className={className}
          />
        );
      case "toggle":
        return <Switch {...register(name)} />;
    }
  };
  return render();
}

export default Check;
