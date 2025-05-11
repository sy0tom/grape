import { Button } from "#/components/ui/button";
import { AppContext } from "#/context/AppContextProvider";
import { AvFilter } from "#/types";
import AvFilterSettingsDialog from "../av-filter-dialog/AvFilterSettingsDialog";
import FilterItem from "./FilterItem";

interface Props {
  title: string;
  initialValues: AvFilter[];
}

function FilterSettingsBoard({ title, initialValues }: Props) {
  const filterService = useContext(AppContext)?.userFilterSettingsService;

  const [filters, setFilters] = useState<AvFilter[]>(initialValues);

  const [selectedFilter, setSelectedFilter] = useState<AvFilter | undefined>();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const onOpenDialog = (filter?: AvFilter) => {
    setSelectedFilter(filter);
    setIsDialogOpen(true);
  };

  const onCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const onSave = async (data: AvFilter) => {
    await filterService?.registryOrEditAvFilter(data);
    const avFilters = await filterService?.getAvFilters();
    if (avFilters) {
      setFilters(avFilters);
      setIsDialogOpen(false);
      return;
    }
    throw new Error("Failed to load AvFilters");
  };

  const onDelete = async (id: string) => {
    await filterService?.deleteAvFilter(id);
    const avFilters = await filterService?.getAvFilters();
    if (avFilters) {
      setFilters(avFilters);
      return;
    }
    throw new Error("Failed to load AvFilters");
  };

  return (
    <>
      <div>
        <span>{title}</span>
      </div>

      {filters.length ? (
        filters.map((filter) => (
          <div key={filter.id}>
            <FilterItem
              filter={filter}
              onEdit={() => onOpenDialog(filter)}
              onDelete={() => onDelete(filter.id)}
            />
          </div>
        ))
      ) : (
        <span>フィルターはありません</span>
      )}
      <div>
        <Button onClick={() => onOpenDialog()}>追加する</Button>
      </div>

      {isDialogOpen && (
        <AvFilterSettingsDialog
          title="ビデオのフィルター"
          initialValues={selectedFilter}
          onSave={onSave}
          onClose={onCloseDialog}
        />
      )}
    </>
  );
}

export default FilterSettingsBoard;
