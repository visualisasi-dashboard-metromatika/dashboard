import { Breadcrumb } from "@gull";
import { Carousel } from "react-bootstrap";

const AppCarousel = () => {
  const state = {
    carouselImageList: [
      "/assets/images/products/iphone-1.jpg",
      "/assets/images/products/headphone-1.jpg",
      "/assets/images/products/iphone-1.jpg",
    ],
  };

  let { carouselImageList } = state;

  return (
    <div>
      <Breadcrumb
        routeSegments={[
          { name: "MSD", path: "/uikits" },
          { name: "Analisis Data" },
        ]}
      />
    </div>
  );
};

export default AppCarousel;
