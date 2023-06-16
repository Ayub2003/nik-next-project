import { createSlice } from "@reduxjs/toolkit";
import { mobileMenuInit } from "./mobileMenu.init";
import {
  mobileMenuExtraReducers,
  mobileMenuReducers,
} from "./mobileMenu.reducers";

export const mobileMenuSlice = createSlice({
  name: "mobileMenu",
  initialState: mobileMenuInit,
  reducers: mobileMenuReducers,
  extraReducers: mobileMenuExtraReducers,
});

export const { setMobileMenuData } = mobileMenuSlice.actions;
export const mobileMenuReducer = mobileMenuSlice.reducer;
