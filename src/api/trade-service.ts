import { TradeI } from "../models/TradeI";
import { data } from "./mockData";

export class TradeApi {
  static async fetchTrade() {
    return new Promise<{ data: TradeI }>((resolve) =>
      setTimeout(() => resolve({ data }), 500)
    );
  }
}
