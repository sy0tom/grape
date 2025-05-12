import { Button } from "#/components/ui/button";
import { AppContext } from "#/context/AppContextProvider";
import { VideoFilter } from "#/types";
import useSWR from "swr";

export type FilterTye = "AvFilter" | "AmateurFilter" | "AnimeFilter";

interface Props {
  type: FilterTye;
}

function VideoFilterArea({ type }: Props) {
  const service = useContext(AppContext)?.userFilterSettingsService;
  const { data, error } = useSWR("service.getInitializeData", () =>
    service?.getInitializeData(),
  );

  const overrideUrl = (filter: VideoFilter) => {
    const newUrl = service?.convertUrl(window.location.href, filter);
    window.history.replaceState(null, "", newUrl);
    console.log(`newUrl: ${newUrl}`);
    //window.location.reload();
  };

  if (!data && !error) {
    return <div>Error loading data</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  switch (type) {
    case "AvFilter":
      return (
        <div className="flex items-center gap-1">
          {data?.avFilters.map((filter) => (
            <Button
              key={filter.id}
              className="bg-primary"
              onClick={() => overrideUrl(filter)}
            >
              {filter.name}
            </Button>
          ))}
        </div>
      );
  }
  return <div>VideoFilter</div>;
}

export default VideoFilterArea;
