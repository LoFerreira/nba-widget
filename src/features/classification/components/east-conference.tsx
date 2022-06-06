import Column from "components/column";
import Row from "components/row";
import Separator from "components/separator";
import Text from "components/text";
import React from "react";

export type EastConferenceProps = {
  teams: any;
};

const EastConference = ({ teams }: EastConferenceProps) => {
  return (
    <Column>
      <Row className="flex-1 justify-between pl-3 pr-3 pt-3 pb-2 border-t border-gray-400">
        <Text size="sm" color="secondary">
          Equipe
        </Text>
      </Row>
      {teams?.map((team, index) => (
        <Row className="border-t border-gray-400 pl-3 pr-3 items-center">
          <Row className="w-4">
            <Text color="secondary">{index}</Text>
          </Row>
          <Separator size="sm" />
          <Row className="w-4 h-4 bg-gray-400" />
          <Separator size="sm" />
          <Text size="sm" fontWeight="medium" color="secondary">
            {team?.full_name}
          </Text>
        </Row>
      ))}
    </Column>
  );
};

export default EastConference;
