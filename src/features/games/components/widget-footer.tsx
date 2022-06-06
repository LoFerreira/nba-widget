import { ChevronDownIcon } from "@heroicons/react/solid";
import Column from "components/column";
import Divider from "components/divider";
import Row from "components/row";
import Separator from "components/separator";
import Text from "components/text";
import React from "react";

export type WidgetFooterProps = {};

const WidgetFooter = ({}: WidgetFooterProps) => {
  return (
    <Column className="relative flex-1 flex-grow justify-center items-center pb-4">
      <Row className="pl-4 pr-4 pt-2 justify-between w-full">
        <Text size="xs" color="secondary">
          Todos os horários estão no: Horário de Brasília
        </Text>
        <Text size="xs" color="secondary">
          Feedback
        </Text>
      </Row>
      <Separator size="lg" />
      <Row className="w-full relative">
        <Row className="absolute bottom-0 w-full justify-center">
          <Row className="w-10 h-10 rounded-full bg-info-200 bottom-0 justify-center items-center hover:cursor-pointer hover:bg-info-100">
            <ChevronDownIcon className="w-5 h-5" />
          </Row>
        </Row>
        <Divider />
      </Row>
      <Separator size="xs" />
      <Text color="light">Ver mais</Text>
    </Column>
  );
};

export default WidgetFooter;
