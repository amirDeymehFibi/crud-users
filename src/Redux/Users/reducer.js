import { GET_USERS, OPEN_MODAL_USER } from "./types";

const initialState = {
  list: [],
  page: 1,
  total_pages: 0,
  // modal new user states
  openNewUser: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        list: action.payload.data,
        page: action.payload.page,
        total_pages: action.payload.total_pages,
      };
    case OPEN_MODAL_USER:
      return {
        ...state,
        openNewUser: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
