import { VideoFilter } from "#/types";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
interface Props {
  filter: VideoFilter;
  onEdit: (filter: VideoFilter) => void;
  onRemove: (id: string) => void;
}

function FilterItem({ filter, onEdit, onRemove }: Props) {
  return (
    <div className="flex items-center gap-1 bg-gray-400 rounded-md">
      <div className="p-2 w-full" onClick={() => onEdit(filter)}>
        <span>{filter.name}</span>
      </div>
      <button onClick={() => onRemove(filter.id)} className="p-2 ml-auto">
        <DeleteForeverIcon
          fontSize="medium"
          className="text-white hover:text-gray-300"
        />
      </button>
    </div>
  );
}

export default FilterItem;
