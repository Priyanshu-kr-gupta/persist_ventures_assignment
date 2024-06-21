import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchdata: "",
  },
  reducers: {
    setSearchdata: (state, action) => {
      state.searchdata = action.payload;
    },
  },
});

export const { setSearchdata } = searchSlice.actions;
export default searchSlice.reducer;