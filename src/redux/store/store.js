import { configureStore } from '@reduxjs/toolkit';
import translationReducer from '../slices/translation/translationSlice'
import translationHistoryReducer from '../slices/translationHistory/translationHistorySlice'
import usersReducer from '../slices/users/usersSlice'

export const store = configureStore({
    reducer: {
        translation: translationReducer,
        translationHistory: translationHistoryReducer,
        users: usersReducer
    }
});

export default store;