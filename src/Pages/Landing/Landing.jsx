import React from "react";
import LayOut from "../../components/LayOUt/LayOut";
import CarouselEffect from "../../components/Carousel/Carousel";
import Category from "../../components/Category/Category";
import LowerPage from "../../components/LowerPage/LowerPage";

function Landing() {
  return (
    <LayOut>
      <CarouselEffect />
      <Category />
      <LowerPage />
    </LayOut>
  );
}

export default Landing;
