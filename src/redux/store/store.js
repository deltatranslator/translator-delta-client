import { configureStore } from '@reduxjs/toolkit';
import translationReducer from '../slices/translation/translationSlice'
import translationHistoryReducer from '../slices/translationHistory/translationHistorySlice'

export const store = configureStore({
    reducer: {
        translation: translationReducer,
        translationHistory: translationHistoryReducer
    }
});

export default store;