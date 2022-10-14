import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useWindowDimensions from "../../hooks/useWindowDimensions";

function CarouselSkeleton() {
  const { height, width } = useWindowDimensions();

  return (
    <div
      style={{
        marginBottom: "2rem",
      }}
    >
      <Skeleton
        height={width <= 800 ? "270px" : "330px"}
        baseColor={"#333335"}
        highlightColor={"#3a3939"}
        borderRadius={width <= 800 ? "0.5rem" : "0.7rem"}
      />
    </div>
  );
}

export default CarouselSkeleton;
