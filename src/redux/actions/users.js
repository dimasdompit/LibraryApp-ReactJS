import axios from "axios";

export const getUserById = (token, userId) => {
  return {
    type: "GETUSERBYID",
    payload: axios({
      method: "GET",
      url: `http://localhost:3000/books/history/${userId}`,
      headers: {
        Authorization: token,
      },
    }),
  };
};
