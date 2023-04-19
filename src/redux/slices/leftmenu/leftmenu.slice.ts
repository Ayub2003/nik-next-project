import { createSlice } from "@reduxjs/toolkit";
import { leftMenuInit } from "./leftmenu.init";
import { extraReducers, leftMenuReducers } from "./leftmenu.reducers";

export const leftMenuSlice = createSlice({
  name: "leftMenu",
  initialState: leftMenuInit,
  reducers: leftMenuReducers,
  extraReducers,
});

export const { setLeftMenu } = leftMenuSlice.actions;
export const leftMenuReducer = leftMenuSlice.reducer;
