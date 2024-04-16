import { GET_USERS, OPEN_MODAL_USER } from "./types";

export const actionGetUsers = (payload) => {
  return {
    type: GET_USERS,
    payload,
  };
};

export const actionNewUser = (payload) => {
  return {
    type: OPEN_MODAL_USER,
    payload,
  };
};
