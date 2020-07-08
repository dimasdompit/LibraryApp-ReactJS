import axios from "axios";

export const getAuthor = (token) => {
  return {
    type: "GETALLAUTHOR",
    payload: axios({
      method: "GET",
      url: "http://localhost:3000/author",
      headers: {
        Authorization: token,
      },
    }),
  };
};
