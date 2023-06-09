import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformiconsList from "./PlatformiconsList";
import CriticScore from "./CriticScore";
import getCroopedImageUrl from "../Services/image-url";

interface props {
  game: Game;
}

const GameCard = ({ game }: props) => {
  return (
    <Card>
      <Image src={getCroopedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformiconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore Score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};
export default GameCard;
