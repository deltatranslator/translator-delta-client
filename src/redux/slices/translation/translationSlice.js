import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sourceLang: '',
    targetLang: '',
    sourceText: '',
    translatedText: '',
    translatedDate: ''
}

export const translationSlice = createSlice({
    name: 'translation',
    initialState,
    reducers: {
        targetLang: (state, action) => {
            state.targetLang = action.payload;
        },
        sourceLangInfo: (state, action) => {
            state.sourceLang = action.payload.sourceLang;
            state.sourceText = action.payload.sourceText;
            state.translatedDate = action.payload.translatedDate;
        },
        translatedText: (state, action) => {
            state.translatedText = action.payload;
        }
    }
})

export const { targetLang, sourceLangInfo, translatedText } = translationSlice.actions;

export default translationSlice.reducer;