const initialState = {
  fullName: "John Doe",
  loggedIn: false,
};

const userReducer = (state = initialState, action) => {
  return state;
};

export default userReducer;

export const getName = (state) => {
  return state.user.fullName.split(" ")[0];
};
export const getLoggedIn = (state) => state.user.loggedIn;
