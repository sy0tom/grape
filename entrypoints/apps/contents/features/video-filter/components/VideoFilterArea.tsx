import { Button } from "#/components/ui/button";
import { UIconst } from "#/constants";
import { context } from "#/context";
import { VideoFilter, VideoFilterType } from "#/types";
import InfoIcon from "@mui/icons-material/Info";
import useSWR from "swr";

interface Props {
  type: VideoFilterType;
}

function VideoFilterArea({ type }: Props) {
  const service = context.userVideoFilterSettingsService;
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
    return <div>{UIconst.msg.loading}</div>;
  }

  if (error) {
    return <div>{UIconst.msg.loadingError}</div>;
  }

  const get = (label: string, option: string | undefined): string => {
    return option ? `${label}: ${option}\n` : "";
  };

  const getInfo = (filter: VideoFilter): string => {
    return (
      get(UIconst.label.mediaTypeFilter, filter.params?.mediaOption) +
      get(UIconst.label.qualityFilter, filter.params?.qualityOption) +
      get(UIconst.label.priceFilter, filter.params?.priceOption) +
      get(UIconst.label.releaseFilter, filter.params?.releaseOption) +
      get(UIconst.label.sortFilter, filter.params?.sortOption) +
      get(UIconst.label.keywordFilter, filter.params?.keywords?.join(","))
    ).slice(0, -1);
  };

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
            <button title={getInfo(filter)} disabled={false}>
              <InfoIcon />
            </button>
          </Button>
        ))}
      </div>
    );
  };

  switch (type) {
    case UIconst.label.avFilter:
      return renderButtons(data?.avFilters);
    case UIconst.label.amateurFilter:
      return renderButtons(data?.amateurFilters);
    case UIconst.label.animeFilter:
      return renderButtons(data?.animeFilters);
  }
}

export default VideoFilterArea;
