import { Breadcrumb } from "@gull";
import { Row, Col, Tab, Tabs, Nav } from "react-bootstrap";
import SimpleCard from "@gull/components/cards/SimpleCard";

const AppTab = () => {
  return (
    <div>
      <Breadcrumb
        routeSegments={[{ name: "MSD", path: "/uikits" }, { name: "Pemantauan Cuaca dan Bencana" }]}
      />
    </div>
  );
};

export default AppTab;
