import {UtilTypes} from '../action';

const initialState = {
  language: 'vn',
  theme: 'light',
  isChangeTheme: false,
  demoActionState: -1,
  demoCallApi: [],
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case UtilTypes.CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
}
