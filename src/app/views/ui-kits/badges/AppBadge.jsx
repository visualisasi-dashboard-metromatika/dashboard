import { Breadcrumb } from "@gull";
import { Link } from "react-router-dom";
import { Badge, Row, Col } from "react-bootstrap";
import SimpleCard from "@gull/components/cards/SimpleCard";

const AppBadge = () => {
  return (
    <div>
      <Breadcrumb
        routeSegments={[
          { name: "MSD", path: "/uikits" },
          { name: "Manajemen Kejadian" },
        ]}
      ></Breadcrumb>
    </div>
  );
};

export default AppBadge;
