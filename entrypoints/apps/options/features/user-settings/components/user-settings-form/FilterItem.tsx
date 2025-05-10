import { VideoFilter } from "#/types";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
interface Props {
  filter: VideoFilter;
  onEdit: (filter: VideoFilter) => void;
  onRemove: (id: string) => void;
}

function FilterItem({ filter, onEdit, onRemove }: Props) {
  return (
    <div className="flex items-center gap-1" onClick={() => onEdit(filter)}>
      <span>{filter.name}</span>
      <button onClick={() => onRemove(filter.id)}>
        <DeleteForeverIcon
          fontSize="medium"
          className="text-white hover:text-gray-300"
        />
      </button>
    </div>
  );
}

export default FilterItem;
