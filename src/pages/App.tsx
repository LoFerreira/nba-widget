import Column from "components/column";
import Image from "components/image";
import Row from "components/row";
import Separator from "components/separator";
import Tabs from "components/tabs";
import Text from "components/text";
import ClassificationList from "features/classification/components/classification-list";
import GamesList from "features/games/components/games-list";
import PlayersList from "features/players/components/players-list";
import React from "react";

function App() {
  const [tabSelected, setTabSelected] = React.useState<number>(0);
  return (
    <Column className="border border-gray-500 rounded-md m-4">
      <Row className="bg-blueocean pl-3 py-3 rounded-t-md items-center">
        <Image
          alt={"logo nba"}
          width={32}
          src="data:image/png;base64,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"
        />
        <Separator size="sm" />
        <Text
          textTransform="uppercase"
          fontWeight="medium"
          color="light"
          size="lg"
        >
          Nba
        </Text>
      </Row>
      <Tabs
        tabIndex={tabSelected}
        onIndexChange={(index) => setTabSelected(index)}
        data={[
          { label: "Jogos", content: <GamesList /> },
          { label: "Notícias", content: <Text>Notícias</Text> },
          { label: "Classificação", content: <ClassificationList /> },
          { label: "Estatísticas", content: <Text>Estatísticas</Text> },
          { label: "Jogadores", content: <PlayersList /> },
        ]}
      />
    </Column>
  );
}

export default App;
