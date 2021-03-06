import { Class, Gender, Race } from "enums";

export interface Character {
  index: number;
  Name: string;
  Class: Class;
  Race: Race;
  Gender: Gender;
  Points: number;
  GuildName: string;
  LastUpdated: number;
}
