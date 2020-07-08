const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: "",
  data: {},
};

const author = (state = initialState, action) => {
  switch (action.type) {
    case "GETALLAUTHOR_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "GETALLAUTHOR_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: "Data Rejected!",
      };
    case "GETALLAUTHOR_FULFILLED":
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

export default author;
