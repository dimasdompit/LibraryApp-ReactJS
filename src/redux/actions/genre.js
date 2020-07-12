import axios from "axios";

export const getGenre = (token) => {
  return {
    type: "GETALLGENRE",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}genre`,
      headers: {
        Authorization: token,
      },
    }),
  };
};
