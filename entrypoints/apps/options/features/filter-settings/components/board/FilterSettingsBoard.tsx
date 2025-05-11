import { Button } from "#/components/ui/button";
import { VideoFilterSettingsService } from "#/services";
import { AmateurFilter, AnimeFilter, AvFilter, VideoFilter } from "#/types";
import { ReactNode } from "react";
import VideoFilterSettingsDialog from "../dialog/VideoFilterSettingsDialog";
import AmateurFilterSettingsForm from "../form/AmateurFilterSettingsForm";
import AnimeFilterSettingsForm from "../form/AnimeFilterSettingsForm";
import AvFilterSettingsForm from "../form/AvFilterSettingsForm";
import FilterItem from "./FilterItem";

type FilterFormType =
  | typeof AvFilterSettingsForm
  | typeof AmateurFilterSettingsForm
  | typeof AnimeFilterSettingsForm;

interface Props<T extends VideoFilter> {
  title: string;
  initialValues: T[];
  videoFilterService: VideoFilterSettingsService<T>;
  formType: FilterFormType;
}

function FilterSettingsBoard<T extends VideoFilter>({
  title,
  initialValues,
  videoFilterService,
  formType,
}: Props<T>) {
  const [filters, setFilters] = useState<T[]>(initialValues);

  const [selectedFilter, setSelectedFilter] = useState<T | undefined>();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const onOpenDialog = (filter?: T) => {
    setSelectedFilter(filter ?? ({} as T));
    setIsDialogOpen(true);
  };

  const onCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const onSave = async (data: T) => {
    console.log(`${JSON.stringify(data)}`);
    await videoFilterService.save(data);
    const newData = await videoFilterService.getAll();
    setFilters(newData);
    setIsDialogOpen(false);
  };

  const onDelete = async (id: string) => {
    await videoFilterService.delete(id);
    const newData = await videoFilterService.getAll();
    setFilters(newData);
  };

  const getForm = (formType: FilterFormType): ReactNode => {
    switch (formType) {
      case AvFilterSettingsForm:
        return (
          <AvFilterSettingsForm
            initialValues={selectedFilter as AvFilter}
            onSave={(data) => onSave(data as T)}
          />
        );
      case AmateurFilterSettingsForm:
        return (
          <AmateurFilterSettingsForm
            initialValues={selectedFilter as AmateurFilter}
            onSave={(data) => onSave(data as T)}
          />
        );
      case AnimeFilterSettingsForm:
        return (
          <AnimeFilterSettingsForm
            initialValues={selectedFilter as AnimeFilter}
            onSave={(data) => onSave(data as T)}
          />
        );
    }
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
        <VideoFilterSettingsDialog
          title={title}
          form={getForm(formType)}
          onClose={onCloseDialog}
        />
      )}
    </>
  );
}

export default FilterSettingsBoard;
