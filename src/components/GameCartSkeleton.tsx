import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GameCartSkeleton = () => {
  return (
    <Card borderRadius={"10px"} overflow={"hidden"}>
      <Skeleton height={"200px"} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCartSkeleton;
