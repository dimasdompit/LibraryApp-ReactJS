import axios from "axios";

export const getGenre = (token) => {
  return {
    type: "GETALLGENRE",
    payload: axios({
      method: "GET",
      url: "http://localhost:3000/genre",
      headers: {
        Authorization: token,
      },
    }),
  };
};
