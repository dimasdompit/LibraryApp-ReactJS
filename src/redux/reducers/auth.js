const initialState = {
  isLoading: false,
  isError: false,
  isLoggedIn: false,
  errorMsg: "",
  data: {},
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    /* ===== REGISTER ===== */
    case "REGISTER_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
      };
    case "REGISTER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        isLoggedIn: false,
        errorMsg: "DATA REJECTED!",
      };
    case "REGISTER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        isLoggedIn: false,
        data: action.payload.data.data,
      };

    /* ===== LOGIN ===== */
    case "LOGIN_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
      };
    case "LOGIN_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        isLoggedIn: false,
        errorMsg: "Data Rejected!",
      };
    case "LOGIN_FULFILLED":
      // console.log(action.payload.data.data);
      return {
        ...state,
        isLoading: false,
        isError: false,
        isLoggedIn: true,
        data: action.payload.data.data,
      };

    /* ===== LOGOUT ===== */
    case "LOGOUT":
      return {
        ...state,
        isLoading: false,
        isError: false,
        isLoggedIn: false,
        errorMsg: "",
        data: {},
      };
    default:
      return state;
  }
};

export default auth;
