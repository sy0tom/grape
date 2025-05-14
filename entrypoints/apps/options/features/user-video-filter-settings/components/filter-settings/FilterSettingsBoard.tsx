import { Button } from "#/components/ui/button";
import { VideoFilterSettingsService } from "#/domain";
import {
  amateurFilterConfig,
  animeFilterConfig,
  avFilterConfig,
  VideoFilter,
} from "#/types";
import { ReactNode } from "react";
import FilterItem from "./FilterItem";
import VideoFilterSettingsDialog from "./dialog/VideoFilterSettingsDialog";
import VideoFilterSettingsForm from "./form/VideoFilterSettingsForm";

type FilterFormType = "av" | "amateur" | "anime";

interface Props {
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

  const handleOpenDialog = (filter?: VideoFilter) => {
    setSelectedFilter(filter ?? ({} as VideoFilter));
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const onSave = async (data: VideoFilter) => {
    console.log(`${JSON.stringify(data)}`);
    await videoFilterSettingsService.save(data);
    const newData = await videoFilterSettingsService.getAll();
    setFilters(newData);
    setIsDialogOpen(false);
  };

  const handleCopy = (data: VideoFilter) => {
    const newData = { ...data, id: "" } as VideoFilter;
    setSelectedFilter(newData);
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
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
            optionFilterConfig={avFilterConfig}
            onSave={(data) => onSave(data)}
          />
        );
      case "amateur":
        return (
          <VideoFilterSettingsForm
            initialValues={selectedFilter}
            optionFilterConfig={amateurFilterConfig}
            onSave={(data) => onSave(data)}
          />
        );
      case "anime":
        return (
          <VideoFilterSettingsForm
            initialValues={selectedFilter}
            optionFilterConfig={animeFilterConfig}
            onSave={(data) => onSave(data)}
          />
        );
    }
  };

  return (
    <div className="p-2">
      <div className="">{title}</div>
      <div className="px-2">
        {filters.length ? (
          filters.map((filter) => (
            <div key={filter.id} className="py-1">
              <FilterItem
                filter={filter}
                onEdit={() => handleOpenDialog(filter)}
                onCopy={() => handleCopy(filter)}
                onDelete={() => handleDelete(filter.id)}
              />
            </div>
          ))
        ) : (
          <span>フィルターはありません</span>
        )}
      </div>

      <div className="flex justify-end">
        <Button onClick={() => handleOpenDialog()}>追加</Button>
      </div>

      {isDialogOpen && (
        <VideoFilterSettingsDialog
          title={title}
          form={getForm(formType)}
          handleClose={handleCloseDialog}
        />
      )}
    </div>
  );
}

export default FilterSettingsBoard;
