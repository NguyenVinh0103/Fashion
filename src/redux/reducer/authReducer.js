import {authTypes} from '../action';

const initialState = {
  accessToken: '',
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case authTypes.LOGIN_SUCCESS:
      return {
        ...state,
        accessToken: action.payload,
      };
    default:
      return state;
  }
}
