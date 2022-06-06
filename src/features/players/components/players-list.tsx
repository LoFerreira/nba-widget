import Column from "components/column";
import LoadingContent from "components/loading-content";
import useRequest from "hooks/use-request";
import React from "react";
import { getAllPlayers, PATH } from "../action";
import PlayerListItem from "./player-list-item";

export type PlayersListProps = {};

const PlayersList = ({}: PlayersListProps) => {
  const { data, loading } = useRequest({
    requestFn: getAllPlayers,
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
    <Column className="grid grid-cols-3">
      {data?.data?.map((player) => (
        <PlayerListItem player={player} />
      ))}
    </Column>
  );
};

export default PlayersList;
