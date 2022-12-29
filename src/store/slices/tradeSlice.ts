import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TradeApi } from "../../api/trade-service";
import { TradeI } from "../../models/TradeI";

import { TradeStateI } from "../../models/TradeStateI";

const initialState: TradeStateI = {
  trade: {
    title: "",
    participants: [],
    startTrade: "",
  },
  isLoading: true,
  isError: false,
};

export const getTradeThunk = createAsyncThunk("trade/fetchTrade", async () => {
  try {
    const response = await TradeApi.fetchTrade();
    if (response) return response.data;

    throw new Error("Response error");
  } catch (e) {
    console.error((e as Error).message);
  }
});

export const tradeSlice = createSlice({
  name: "trade",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTradeThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getTradeThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.trade = action.payload as TradeI;
      })
      .addCase(getTradeThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default tradeSlice.reducer;
