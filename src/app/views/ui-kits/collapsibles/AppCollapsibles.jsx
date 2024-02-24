import { Breadcrumb } from "@gull";
import { Accordion, useAccordionButton } from "react-bootstrap";

const AppCollapsible = () => {
  return (
    <div>
      <Breadcrumb
        routeSegments={[
          { name: "MSD", path: "/uikits" },
          { name: "Komunikasi dan Koordinasi" },
        ]}
      />
    </div>
  );
};

export default AppCollapsible;
