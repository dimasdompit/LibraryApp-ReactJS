import axios from "axios";

export const getBooks = (token, qs) => {
  return {
    type: "GETALLBOOK",
    payload: axios({
      method: "GET",
      url: `http://localhost:3000/books/?${qs}`,
      headers: {
        Authorization: token,
      },
    }),
  };
};

export const getBooksById = (token, id) => {
  return {
    type: "GETBOOKSBYID",
    payload: axios({
      method: "GET",
      url: "http://localhost:3000/books/" + id,
      headers: {
        Authorization: token,
      },
    }),
  };
};

export const addBooks = (token, data) => {
  return {
    type: "POSTBOOK",
    payload: axios({
      method: "POST",
      url: "http://localhost:3000/books/",
      data: data,
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    }),
  };
};

export const editBooks = (token, data, id) => {
  return {
    type: "PUTBOOK",
    payload: axios({
      method: "PUT",
      url: "http://localhost:3000/books/" + id,
      data: data,
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    }),
  };
};
