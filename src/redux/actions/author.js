import axios from "axios";

export const getAuthor = (token) => {
  return {
    type: "GETALLAUTHOR",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}author`,
      headers: {
        Authorization: token,
      },
    }),
  };
};
