import { TradeI } from "./TradeI";

export interface TradeStateI {
  trade: TradeI;
  isLoading: boolean;
  isError: boolean;
}
