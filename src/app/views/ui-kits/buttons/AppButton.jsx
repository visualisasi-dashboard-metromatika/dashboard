import { Breadcrumb } from "@gull";
import SimpleCard from "@gull/components/cards/SimpleCard";
import { Row, Col, Button, ButtonToolbar } from "react-bootstrap";
import LoadingButton from "@gull/components/buttons/LoadingButton";

const AppButton = () => {
  return (
    <div>
      <Breadcrumb
        routeSegments={[
          { name: "MSD", path: "/uikits" },
          { name: "Manajemen Respon Darurat" },
        ]}
      ></Breadcrumb>
    </div>
  );
};

export default AppButton;
