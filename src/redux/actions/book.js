import axios from "axios";
// require("dotenv").config();

export const getBooks = (token, qs) => {
  return {
    type: "GETALLBOOK",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}books/?${qs}`,
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
      url: `${process.env.REACT_APP_API_URL}books/${id}`,
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
      url: `${process.env.REACT_APP_API_URL}books/`,
      data: data,
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    }),
  };
};

export const editBooks = (token, id, data) => {
  return {
    type: "PUTBOOK",
    payload: axios({
      method: "PUT",
      url: `${process.env.REACT_APP_API_URL}books/${id}`,
      data: data,
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    }),
  };
};

export const deleteBooks = (token, id) => {
  return {
    type: "DELETEBOOK",
    payload: axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_API_URL}books/${id}`,
      headers: {
        Authorization: token,
      },
    }),
  };
};

// export const getHistory = (token, userId) => {
//   return {
//     type: "GETHISTORY",
//     payload: axios({
//       method: "GET",
//       url: `http://localhost:3000/books/history/${userId}`,
//       headers: {
//         Authorization: token,
//       },
//     }),
//   };
// };

export const returnBooks = (token, id) => {
  return {
    type: "RETURNBOOK",
    payload: axios({
      method: "PUT",
      url: `${process.env.REACT_APP_API_URL}books/return/${id}`,
      headers: {
        Authorization: token,
      },
    }),
  };
};

export const borrowBooks = (token, id, data) => {
  return {
    type: "BORROWBOOK",
    payload: axios({
      method: "PUT",
      url: `${process.env.REACT_APP_API_URL}books/borrow/${id}`,
      data: data,
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    }),
  };
};
