import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "#/components/ui/select";

interface Props {
  options: { group: string; items: { label: string; value: string }[] }[];
  placeholder: string;
  initialValue?: string;
  onChange?: (value: string) => void;
}

function CSelect({ options, placeholder, onChange }: Props) {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option, index) => (
          <SelectGroup key={index}>
            <SelectLabel>{option.group}</SelectLabel>
            {option.items.map((item) => (
              <SelectItem
                key={item.value}
                value={item.value}
                onClick={() => onChange?.(item.value)}
              >
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
}

export default CSelect;
