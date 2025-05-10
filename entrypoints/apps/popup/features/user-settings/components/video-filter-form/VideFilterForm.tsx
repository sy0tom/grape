import { Button } from "#/components/ui/button";
import { Filter, FilterData } from "./Filter";

interface Props {
  initialValues?: FilterData[];
}

function VideoFilterForm({ initialValues }: Props) {
  const [filters, setFilters] = useState<FilterData[]>(initialValues ?? []);
  return (
    <div>
      <span className="text-base font-sans">フィルター</span>
      <div>
        {filters.map((filter, index) => (
          <Filter key={index} initialValue={filter} />
        ))}
      </div>
      <Button
        onClick={() => {
          setFilters([...filters, {}]);
        }}
      >
        追加
      </Button>
    </div>
  );
}

export default VideoFilterForm;
