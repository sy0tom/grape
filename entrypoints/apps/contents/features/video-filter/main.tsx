import "#/styles/globals.css";
import { VideoFilterType } from "#/types";
import { createRoot, Root } from "react-dom/client";
import VideoFilterArea from "./components/VideoFilterArea";

export async function injectSavedFiltersMain(filterType: VideoFilterType) {
  const root = getSavedFiltersInjectRoot(filterType);
  if (!root) {
    return;
  }

  root.render(<VideoFilterArea type={filterType} />);
}

function getSavedFiltersInjectRoot(filterType: VideoFilterType): Root | null {
  const queryPath =
    "body > main > div > div.ml-4.grow.min-w-0.z-0 > div:nth-child(4)";
  const grapeFilterInjectFieldId = `grape-filter-inject-field-${filterType}`;

  if (document.getElementById(grapeFilterInjectFieldId)) {
    return null;
  }

  const element = document.querySelector(queryPath) as HTMLDivElement;
  if (!element) {
    throw new Error("Element not found after retries");
  }

  const rootElement = document.createElement("div");
  rootElement.id = grapeFilterInjectFieldId;
  element.prepend(rootElement);
  return createRoot(rootElement);
}
