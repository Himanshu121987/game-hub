import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  Score: number;
}

const CriticScore = ({ Score }: Props) => {
  let color = Score > 75 ? "green" : Score > 60 ? "Yellow" : "";
  return (
    <Badge colorScheme={color} fontSize={"14px"} paddingX={2} borderRadius={50}>
      {Score}
    </Badge>
  );
};

export default CriticScore;
