import { Button } from "#/components/ui/button";
import { AppContext } from "#/context/AppContextProvider";
import { VideoFilter } from "#/types";
import useSWR from "swr";

export type FilterTye = "AvFilter" | "AmateurFilter" | "AnimeFilter";

interface Props {
  type: FilterTye;
}

function VideoFilterArea({ type }: Props) {
  const service = useContext(AppContext)?.userVideoFilterSettingsService;
  const { data, error } = useSWR("service.getInitializeData", () =>
    service?.get(),
  );

  const overrideUrl = (filter: VideoFilter) => {
    console.log(`filter: ${JSON.stringify(filter)}`);
    const url = window.location.href;
    console.log(`url: ${url}`);
    const newUrl = service?.convertUrl(url, filter);
    console.log(`newUrl: ${newUrl}`);
    window.history.replaceState(null, "", newUrl);
    window.location.reload();
  };

  if (!data && !error) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  const renderButtons = (filters: VideoFilter[] | undefined) => {
    return (
      <div className="flex items-center gap-1">
        {filters?.map((filter) => (
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
  };

  switch (type) {
    case "AvFilter":
      return renderButtons(data?.avFilters);
    case "AmateurFilter":
      return renderButtons(data?.amateurFilters);
    case "AnimeFilter":
      return renderButtons(data?.animeFilters);
  }
}

export default VideoFilterArea;
