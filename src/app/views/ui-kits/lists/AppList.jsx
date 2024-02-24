import { Breadcrumb } from "@gull";
import { Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const AppList = () => {

  return (
    <div>
      <Breadcrumb
        routeSegments={[
          { name: "MSD", path: "/uikits" },
          { name: "Pemantauan Kesehatan Masyarakat" },
        ]}
      ></Breadcrumb>
    </div>
  );
};

export default AppList;
