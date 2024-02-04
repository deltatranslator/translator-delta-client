import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  reload: false,
  show: true,
  translationHistory: [],
};

export const translationHistorySlice = createSlice({
  name: "translation-history",
  initialState,
  reducers: {
    setTranslationHistory: (state, action) => {
      state.translationHistory = [...action.payload] || [];
    },
    setHistoryDisplay: (state, action) => {
      state.show = !state.show;
    },
    reloadHistory: (state, action) => {
      state.reload = !state.reload;
    },
  },
});

const selectTranslationHistory = (state) => state.translationHistory;

export const selectReloadState = createSelector(
  [selectTranslationHistory],
  (translationHistory) => translationHistory.reload
);

export const { setTranslationHistory, setHistoryDisplay, reloadHistory } =
  translationHistorySlice.actions;

export default translationHistorySlice.reducer;
