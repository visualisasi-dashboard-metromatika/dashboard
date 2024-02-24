import React from "react";
import { Breadcrumb } from "@gull";
import { ProgressBar } from "react-bootstrap";
import Echart1 from "./Echart1";
import Echart2 from "./Echart2";
import Echart3 from "./Echart3";
import Echart4 from "./Echart4";
import Echart5 from "./Echart5";
import Echart6 from "./Echart6";
import Echart7 from "./Echart7";
import Echart8 from "./Echart8";
import Echart9 from "./Echart9";
import Echart10 from "./Echart10";

const CardMetrics = () => {
  return (
    <div>
      <Breadcrumb
        routeSegments={[
          { name: "MSD", path: "/uikits" },
          { name: "Manajemen Logistik" },
        ]}
      />
    </div>
  );
};

export default CardMetrics;
