const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: "",
  data: {},
};

const genre = (state = initialState, action) => {
  switch (action.type) {
    case "GETALLGENRE_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "GETALLGENRE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: "Data Rejected!",
      };
    case "GETALLGENRE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
      };
    default:
      return state;
  }
};

export default genre;
