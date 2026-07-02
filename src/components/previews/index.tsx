import type { PreviewId } from "../../projects";
import { BlindspotPreview } from "./BlindspotPreview";
import { GlobePreview } from "./GlobePreview";
import { ToesDownPreview } from "./ToesDownPreview";

export function ProjectPreview({ id }: { id: PreviewId }) {
  switch (id) {
    case "globe":
      return <GlobePreview />;
    case "blindspot":
      return <BlindspotPreview />;
    case "toes-down":
      return <ToesDownPreview />;
  }
}
