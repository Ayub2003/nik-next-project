import { createSlice } from "@reduxjs/toolkit";
import { leftMenuInit } from "./leftmenu.init";
import { leftMenuExtraReducers, leftMenuReducers } from "./leftmenu.reducers";

export const leftMenuSlice = createSlice({
  name: "leftMenu",
  initialState: leftMenuInit,
  reducers: leftMenuReducers,
  extraReducers: leftMenuExtraReducers,
});

export const { setLeftMenu } = leftMenuSlice.actions;
export const leftMenuReducer = leftMenuSlice.reducer;
