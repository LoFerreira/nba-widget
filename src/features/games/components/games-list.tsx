import Column from "components/column";
import LoadingContent from "components/loading-content";
import WidgetFooter from "features/widget/components/widget-footer";
import useRequest from "hooks/use-request";
import React from "react";
import { getAllGames, PATH } from "../actions";
import GameListItem from "./game-list-item";

export type GamesListProps = {};

const GamesList = () => {
  const { data, loading } = useRequest({
    requestFn: getAllGames,
    requestKey: PATH,
  });

  if (loading) {
    return (
      <Column className="p-6">
        <LoadingContent />
      </Column>
    );
  }

  return (
    <>
      <Column className="grid grid-cols-2">
        {data?.data?.map((game, index) => {
          if (index > 5) {
            return null;
          }
          return <GameListItem data={{ game, index } || {}} />;
        })}
      </Column>
      <WidgetFooter />
    </>
  );
};

export default GamesList;
