import axios from "axios";

export const getUserById = (token, userId) => {
  return {
    type: "GETUSERBYID",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}books/history/${userId}`,
      headers: {
        Authorization: token,
      },
    }),
  };
};
