import {
  ActionReducerMapBuilder,
  PayloadAction,
  createAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { ILeftMenu, ItemNav } from "./leftmenu.model";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "@/redux/store/store";

export const leftMenuReducers = {
  setLeftMenu: (state: ILeftMenu, { payload }: PayloadAction<ItemNav[]>) => {
    state.data = payload;
  },
};

export const hydrate = createAction<AppState>(HYDRATE);

export const extraReducers = (builder: ActionReducerMapBuilder<ILeftMenu>) => {
  builder.addCase(hydrate, (state, { payload }) => {
    if (payload.leftMenu.data) {
      state.data = payload.leftMenu.data;
    }
  });

  // builder
  //   .addCase(getFileNameAll.pending, (state, action) => {})
  //   .addCase(getFileNameAll.rejected, (state, action) => {})
  //   .addCase(getFileNameAll.fulfilled, (state, action) => {
  //     const { payload } = action;

  //     state.data = payload;
  //   });
};

// export const getFileNameAll = createAsyncThunk<any, undefined>(
//   "FileName/getAll",
//   async () => {

//     return await fetch('');
//   }
// );
