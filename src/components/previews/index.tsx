import type { PreviewId } from "../../projects";
import { BlindspotPreview } from "./BlindspotPreview";
import { CongressPreview } from "./CongressPreview";
import { DeforestationPreview } from "./DeforestationPreview";
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
    case "deforestation":
      return <DeforestationPreview />;
    case "congress":
      return <CongressPreview />;
  }
}
