import React, { FC } from "react";
import MaterialTable, { Column } from "material-table";

import { Character } from "types/Character";
import { getClassIcon, getCharacterIcon } from "styles/assets/load-image";

import { useApp } from "app/context/AppContext";

import { ImageContainer, NameWrapper, CharImage, RankingText } from "./styles";

const TableColumns: Array<Column<Character>> = [
  {
    field: "Name",
    render: rowData => (
      <NameWrapper>
        <RankingText>{rowData.index + 1}</RankingText>
        <ImageContainer>
          <CharImage src={getCharacterIcon(rowData.Race, rowData.Gender)} />
          <CharImage src={getClassIcon(rowData.Class)} />
        </ImageContainer>
        <div>{rowData.Name + " <" + rowData.GuildName + ">"}</div>
      </NameWrapper>
    )
  },
  {
    field: "GuildName",
    hidden: true,
    searchable: true
  },
  {
    field: "Points",
    align: "right",
    width: "25%"
  }
];

const Ladder: FC = () => {
  const { characters } = useApp();

  const table = (
    <MaterialTable
      title="Achievement Ladder"
      columns={TableColumns}
      data={characters}
      options={{
        pageSize: 25,
        pageSizeOptions: [10, 25, 50, 100, 500],
        maxBodyHeight: "750px",
        header: false
      }}
    />
  );

  return <>{table}</>;
};

export default Ladder;
