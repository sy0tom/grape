import { Button } from "#/components/ui/button";
import { VideoFilterSettingsService } from "#/services";
import {
  amateurOptionFilterConfig,
  animeOptionFilterConfig,
  avOptionFilterConfig,
  VideoFilter,
} from "#/types";
import { ReactNode } from "react";
import VideoFilterSettingsDialog from "../dialog/VideoFilterSettingsDialog";
import VideoFilterSettingsForm from "../form/VideoFilterSettingsForm";
import FilterItem from "./FilterItem";

type FilterFormType = "av" | "amateur" | "anime";

interface Props<> {
  title: string;
  initialValues: VideoFilter[];
  videoFilterSettingsService: VideoFilterSettingsService;
  formType: FilterFormType;
}

function FilterSettingsBoard({
  title,
  initialValues,
  videoFilterSettingsService,
  formType,
}: Props) {
  const [filters, setFilters] = useState<VideoFilter[]>(initialValues);

  const [selectedFilter, setSelectedFilter] = useState<
    VideoFilter | undefined
  >();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const onOpenDialog = (filter?: VideoFilter) => {
    setSelectedFilter(filter ?? ({} as VideoFilter));
    setIsDialogOpen(true);
  };

  const onCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const onSave = async (data: VideoFilter) => {
    console.log(`${JSON.stringify(data)}`);
    await videoFilterSettingsService.save(data);
    const newData = await videoFilterSettingsService.getAll();
    setFilters(newData);
    setIsDialogOpen(false);
  };

  const onDelete = async (id: string) => {
    await videoFilterSettingsService.delete(id);
    const newData = await videoFilterSettingsService.getAll();
    setFilters(newData);
  };

  const getForm = (formType: FilterFormType): ReactNode => {
    switch (formType) {
      case "av":
        return (
          <VideoFilterSettingsForm
            initialValues={selectedFilter}
            optionFilterConfig={avOptionFilterConfig}
            onSave={(data) => onSave(data)}
          />
        );
      case "amateur":
        return (
          <VideoFilterSettingsForm
            initialValues={selectedFilter}
            optionFilterConfig={amateurOptionFilterConfig}
            onSave={(data) => onSave(data)}
          />
        );
      case "anime":
        return (
          <VideoFilterSettingsForm
            initialValues={selectedFilter}
            optionFilterConfig={animeOptionFilterConfig}
            onSave={(data) => onSave(data)}
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
