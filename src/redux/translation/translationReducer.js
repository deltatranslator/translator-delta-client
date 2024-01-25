import { TRANSLATE_TEXT } from './translationTypes';

const initialState = {
    sourceLang: '',
    targetLang: '',
    sourceText: '',
    translatedText: '',
    TranslatedDate: ''
}

const translationReducer = (state = initialState, action) => {
    switch (action.type) {
        case TRANSLATE_TEXT: return {
            ...state,

        }
        default: return state;
    }
}

export default translationReducer;