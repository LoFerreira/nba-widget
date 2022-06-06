import Column from "components/column";
import Image from "components/image";
import Separator from "components/separator";
import Text from "components/text";
import React from "react";

export type PlayerListItemProps = {
  player: any;
};

const PlayerListItem = ({ player }: PlayerListItemProps) => {
  const firstName = player?.first_name;
  const lastName = player?.last_name;
  return (
    <Column className="border justify-center items-center m-2 pb-2 pt-2">
      <Image
        alt={`${firstName} ${lastName}`}
        width={96}
        src={`https://nba-players.herokuapp.com/players/${firstName}_${lastName}`}
      />
      <Separator size="sm" />
      <Text color="light">
        {firstName} {lastName}
      </Text>
      <Separator size="xs" />
      <Text color="secondary">
        {PositionsMap[player?.position] || "Sem posição"}
      </Text>
      <Separator size="xs" />
      <Column className="w-24">
        <Text color="secondary">{player?.team?.full_name}</Text>
      </Column>
    </Column>
  );
};

export default PlayerListItem;

const PositionsMap = {
  PG: "Armador",
  SG: "Ala-armador",
  SF: "Ala",
  PF: "Ala de força",
  C: "Pivô",
};
