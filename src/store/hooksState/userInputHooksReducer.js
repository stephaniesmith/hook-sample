import * as ACTION_TYPES from '../actions/action_types';

export const initialState = {
  user_test_change: '',
  user_test_submit: ''
};

export const UserReducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTION_TYPES.USER_INPUT_CHANGE:
      return {
        ...state,
        user_test_change: action.payload,
      };
    case ACTION_TYPES.USER_INPUT_SUBMIT:
      return {
        ...state,
        user_test_submit: action.payload,
      };
    default:
      return state;
  }
};
