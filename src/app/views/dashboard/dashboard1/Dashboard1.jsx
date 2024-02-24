import { Breadcrumb } from "@gull";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import PieChart from "app/views/charts/echarts/PieChart";
import SimpleCard from "@gull/components/cards/SimpleCard";
import LineChart3 from "app/views/charts/echarts/LineChart3";
import LineChart1 from "app/views/charts/echarts/LineChart1";
import LineChart2 from "app/views/charts/echarts/LineChart2";
import ComparisonChart from "app/views/charts/echarts/ComparisonChart";
import DashboardSatuData from "./DashboardSatuData"

const Dashboard1 = () => {
  return (
    <div>
      {/* <Breadcrumb
        routeSegments={[
          { name: "Dashboard", path: "/dashboard" },
          { name: "Medan Satu Data" },
        ]}
      ></Breadcrumb> */}
      <DashboardSatuData></DashboardSatuData>
    </div>
  );
};

export default Dashboard1;
