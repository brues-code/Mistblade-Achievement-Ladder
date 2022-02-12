import React, { FC } from "react";
import MaterialTable, { Column } from "material-table";

import { Character } from "types/Character";

import { useApp } from "app/context/AppContext";

import { ImageContainer, NameWrapper, CharImage } from "./styles";

const TableColumns: Array<Column<Character>> = [
  {
    field: "Name",
    render: (rowData) => {
      const portraitUrl =
        "/assets/race/" + rowData.Race + "_" + rowData.Gender + ".jpg";
      const classUrl = "/assets/class/" + rowData.Class + ".png";
      return (
        <NameWrapper>
          <ImageContainer>
            <CharImage src={portraitUrl} />
            <CharImage src={classUrl} />
          </ImageContainer>
          <div>{rowData.Name + " <" + rowData.GuildName + ">"}</div>
        </NameWrapper>
      );
    },
  },
  {
    title: "Points",
    field: "Points",
    align: "right",
    width: 100
  },
];

const Ladder: FC = () => {
  const { characters } = useApp();

  const table = (
    <MaterialTable
      title="Achievement Ladder"
      columns={TableColumns}
      data={characters}
    />
  );

  return <>{table}</>;
};

export default Ladder;
