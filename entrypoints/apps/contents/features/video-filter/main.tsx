import AppContextProvider from "#/context/AppContextProvider";
import "#/styles/globals.css";
import { createRoot, Root } from "react-dom/client";
import VideoFilterArea, { FilterTye } from "./components/VideoFilterArea";

export async function injectSavedFiltersMain(
  url: string,
  filterType: FilterTye,
) {
  const root = await getSavedFiltersInjectRoot(filterType);

  root.render(
    <AppContextProvider child={<VideoFilterArea type={filterType} />} />,
  );
}

async function getSavedFiltersInjectRoot(filterType: FilterTye): Promise<Root> {
  const queryPath =
    "body > main > div > div.ml-4.grow.min-w-0.z-0 > div:nth-child(4)";
  const grapeFilterInjectFieldId = `grape-filter-inject-field-${filterType}`;

  if (document.getElementById(grapeFilterInjectFieldId)) {
    throw new Error("Element already exists");
  }

  const retryMax = 5;
  for (let i = 0; i < retryMax; i++) {
    const element = document.querySelector(queryPath) as HTMLDivElement;
    if (element) {
      const rootElement = document.createElement("div");
      rootElement.id = grapeFilterInjectFieldId;
      element.prepend(rootElement);
      return createRoot(rootElement);
    }

    // wait 1s before next retry
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  throw new Error("Element not found after retries");
}
