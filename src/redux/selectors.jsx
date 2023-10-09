export const selectAuthToken = (state) => state.Auth.token;

export const selectUserData = (state) => {
    return {
      firstName: state.User.firstName,
      lastName: state.User.lastName
    };
  };