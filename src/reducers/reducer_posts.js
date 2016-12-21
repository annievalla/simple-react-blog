import { FETCH_POSTS, FETCH_POST } from '../actions/index';
const INITIAL_STATE = {
  all: [],
  post: null
};

export default function postsReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_POSTS:
    // take all data we already have in state, and add to all the current data
      return { ...state, all: action.payload.data };
    case FETCH_POST:
      return { ...state, post: action.payload.data };
    default:
      return state;
  };
};
