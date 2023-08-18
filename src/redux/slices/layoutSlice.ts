import { createSlice } from "@reduxjs/toolkit";
import { LayoutSliceInterface } from "@/interface";

const initialState: LayoutSliceInterface = {
  activeNavbarDocument: "resume",
  navbarDropdownIsVisible: false,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setActiveNavbarDocument: (state, { payload }) => {
      state.activeNavbarDocument = payload;
    },
    showNavbarDropdown: (state) => {
      state.navbarDropdownIsVisible = true;
    },
    hideNavbarDropdown: (state) => {
      state.navbarDropdownIsVisible = false;
    },
  },
});

export const {
  setActiveNavbarDocument,
  showNavbarDropdown,
  hideNavbarDropdown,
} = layoutSlice.actions;

export default layoutSlice.reducer;
