import {
  LOGIN,
  LOGOUT
} from '../constants/actionTypes';

const initialState = {
  isAuthenticated: false,
  isFetching: false,
  token: '',
  user: {},
  errorMessage: '',
};

export default function user(state = initialState, action) {
  switch(action.type) {
    case LOGIN.REQUEST:
      console.log('reducers LOGIN.REQUEST');
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
      });
    case LOGIN.SUCCESS:
      console.log('reducers LOGIN.SUCCESS');
      const { token, user } = action.response;
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        failure: false,
        user,
        token
      });
    case LOGIN.FAILURE:
      console.log('reducers LOGIN.FAILURE');
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        failure: true,
        errorMessage: action.err,
      });
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}
