import Column from "components/column";
import LoadingContent from "components/loading-content";
import Tabs from "components/tabs";
import useRequest from "hooks/use-request";
import React from "react";
import { getAllTeams, PATH } from "../action";
import EastConference from "./east-conference";
import WestConference from "./west-conference";

export type ClassificationListProps = {};

const ClassificationList = ({}: ClassificationListProps) => {
  const [tabSelected, setTabSelected] = React.useState<number>(0);
  const { data, loading } = useRequest({
    requestFn: getAllTeams,
    requestKey: PATH,
  });

  if (loading) {
    return (
      <Column className="p-6">
        <LoadingContent />
      </Column>
    );
  }

  const westTeams = data?.data.filter((team) => team?.conference === "West");
  const eastTeams = data?.data.filter((team) => team?.conference === "East");
  console.log(westTeams);

  return (
    <Column>
      <Tabs
        tabIndex={tabSelected}
        onIndexChange={(index) => setTabSelected(index)}
        data={[
          {
            label: "Conferência Leste",
            content: <EastConference teams={eastTeams} />,
          },
          {
            label: "Conferência Oeste",
            content: <WestConference teams={westTeams} />,
          },
        ]}
        bgColor={"secondary"}
        fontWeight={"semi-bold"}
      />
    </Column>
  );
};

export default ClassificationList;
