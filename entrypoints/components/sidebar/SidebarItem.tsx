import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { tv } from "tailwind-variants";

const style = tv({
  base: "flex items-center hover:bg-primary-light px-4 py-4",
  variants: {
    selected: {
      true: "bg-primary-dark",
      false: "",
    },
  },
});

interface Props {
  item: {
    title: string;
    link: string;
    icon: OverridableComponent<SvgIconTypeMap>;
  };
  selected: boolean;
}

function SidebarItem({ item, selected }: Props) {
  return (
    <>
      <div className={style({ selected: selected })}>
        <item.icon />
        <div className="text-white font-sans text-2xl px-2">{item.title}</div>
      </div>
    </>
  );
}

export default SidebarItem;
