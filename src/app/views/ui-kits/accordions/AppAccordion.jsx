import React, { useEffect, useRef } from "react";
import Breadcrumb from "@gull/components/Breadcrumb";
import SimpleAccordion from "./SimpleAccordion";
import { Row, Col } from "react-bootstrap";
import IconAccordin from "./IconAccordin";
import IconlessAccordin from "./IconlessAccordin";
import RightArrowLessAccordion from "./RightArrowLessAccordin";
import { useLocation } from "react-router-dom";

const AppAccordion = () => {
  const location = useLocation();
  const prevLocation = useRef();
  useEffect(() => {
    if (prevLocation.current !== location.pathname) {
      window.scrollTo(0, 0);
      prevLocation.current = location.pathname;
    }
  }, [location]);

  return (
    <div>
      <Breadcrumb
        routeSegments={[
          { name: "MSD", path: "/uikits" },
          { name: "Monitoring Operasional" },
        ]}
      ></Breadcrumb>
    </div>
  );
};

export default AppAccordion;
