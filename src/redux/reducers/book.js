const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: "",
  data: {},
};

const book = (state = initialState, action) => {
  switch (action.type) {
    /* GET ALL BOOKS */
    case "GETALLBOOK_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "GETALLBOOK_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: "Data Rejected!",
      };
    case "GETALLBOOK_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
      };

    /* GET BOOKS BY ID */
    case "GETBOOKSBYID_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "GETBOOKSBYID_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: "Data Rejected!",
      };
    case "GETBOOKSBYID_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
      };

    /* POST BOOK */
    case "POSTBOOK_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "POSTBOOK_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: "Data Rejected!",
      };
    case "POSTBOOK_FULFILLED":
      // state.data.push(action.payload.data.data);
      // console.log(state.data.push(action.payload.data.data));
      // console.log(state.data);
      return {
        // ...state,
        isLoading: false,
        isError: false,
        data: [...state.data, action.payload.data.data],
      };
    default:
      return state;
  }
};

export default book;
