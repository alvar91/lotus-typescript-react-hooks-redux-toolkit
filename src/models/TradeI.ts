import { ParticipantsI } from "./ParticipantsI";

export interface TradeI {
  title: string;
  participants: ParticipantsI[];
  startTrade: string;
}
