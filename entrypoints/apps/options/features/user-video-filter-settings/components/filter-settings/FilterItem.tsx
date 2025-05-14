import { VideoFilter } from "#/types";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
interface Props<T extends VideoFilter> {
  filter: T;
  handleEdit: () => void;
  handleCopy: () => void;
  handleDelete: () => void;
}

function FilterItem<T extends VideoFilter>({
  filter,
  handleEdit,
  handleCopy,
  handleDelete,
}: Props<T>) {
  return (
    <div className="w-96 flex items-center gap-1 border shadow-md bg-white rounded-md p-1">
      <div className="p-2" onClick={handleEdit}>
        <span className="truncate w-64 inline-block overflow-hidden text-ellipsis whitespace-nowrap">
          {filter.name}
        </span>
      </div>
      <div className="flex items-center gap-1 ml-auto p-2">
        <button onClick={handleCopy}>
          <ContentCopyIcon
            fontSize="medium"
            className="text-gray-600 hover:text-gray-400"
          />
        </button>
        <button onClick={handleDelete}>
          <DeleteForeverIcon
            fontSize="medium"
            className="text-gray-600 hover:text-gray-400"
          />
        </button>
      </div>
    </div>
  );
}

export default FilterItem;
