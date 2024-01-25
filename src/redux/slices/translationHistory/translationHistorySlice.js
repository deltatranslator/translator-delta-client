import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    show: false,
    translationHistory: []
}

export const translationHistorySlice = createSlice({
    name: 'translation-history',
    initialState,
    reducers: {
        setTranslationHistory: (state, action) => {
            state.translationHistory = [...action.payload] || [];
        },
        setHistoryDisplay: (state, action) => {
            state.show = !state.show
        }
    }
})

export const { setTranslationHistory, setHistoryDisplay } = translationHistorySlice.actions;

export default translationHistorySlice.reducer;