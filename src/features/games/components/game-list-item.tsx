import { ChevronLeftIcon } from "@heroicons/react/solid";
import Column from "components/column";
import Row from "components/row";
import Separator from "components/separator";
import Text from "components/text";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import React from "react";

export type GameListItemProps = {
  data: any;
};

const GameListItem = ({ data }: GameListItemProps) => {
  const { game, index } = data;
  const homeTeamScore = game?.home_team_score;
  const visitorTeamScore = game?.visitor_team_score;

  return (
    <Column className="border-r border-b border-gray-500 p-4">
      <Text color="secondary">Jogo {index}</Text>
      <Row className="justify-between items-center">
        <Column className="flex-1 pr-1">
          <Row className="relative items-center justify-between pr-4 flex-1">
            <Row className="items-center">
              <Row className="w-4 h-4 bg-gray-400" />
              <Separator size="sm" />
              <Text color="secondary">{game?.home_team?.abbreviation}</Text>
            </Row>
            <Row className="items-center">
              <Text color="secondary">{game?.home_team_score}</Text>
              {homeTeamScore > visitorTeamScore && (
                <ChevronLeftIcon className="absolute right-0 w-4 h-4 text-secondary-300" />
              )}
            </Row>
          </Row>
          <Separator size="xs" />
          <Row className="relative items-center justify-between pr-4 flex-1">
            <Row className="items-center">
              <Row className="w-4 h-4 bg-gray-400" />
              <Separator size="sm" />
              <Text color="secondary">{game?.visitor_team?.abbreviation}</Text>
            </Row>
            <Row className="items-center">
              <Text color="secondary">{game?.visitor_team_score}</Text>
              {homeTeamScore < visitorTeamScore && (
                <ChevronLeftIcon className="absolute right-0 w-4 h-4 text-secondary-300" />
              )}
            </Row>
          </Row>
        </Column>
        <Column className="border-l border-gray-500 pl-3 pt-2 items-center w-2/5">
          {game?.status === "Final" && <Text color="light">Encerrado</Text>}
          <Text color="secondary">
            {`${format(new Date(game?.date), "EE", {
              locale: ptBR,
            }).substring(0, 3)}.,
                  ${format(new Date(game?.date), "dd/MM", {
                    locale: ptBR,
                  })}`}
          </Text>
          <Separator size="xs" />
          <Row className="w-16 h-8 bg-gray-400" />
        </Column>
      </Row>
    </Column>
  );
};

export default GameListItem;
