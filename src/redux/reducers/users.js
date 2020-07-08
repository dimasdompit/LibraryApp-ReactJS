const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: "",
  data: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "GETUSERBYID_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "GETUSERBYID_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: "Data Rejected!",
      };
    case "GETUSERBYID_FULFILLED":
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

export default user;
