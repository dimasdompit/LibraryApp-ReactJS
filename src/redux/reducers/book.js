const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: "",
  data: {
    "COUNT(*)": 0,
    result: [],
  },
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
        // data: action.payload.data.data,
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
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    /* PUT BOOK */
    case "PUTBOOK_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "PUTBOOK_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: "Data Rejected!",
      };
    case "PUTBOOK_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    /* DELETE BOOK */
    case "DELETEBOOK_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "DELETEBOOK_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: "Data Rejected!",
      };
    case "DELETEBOOK_FULFILLED":
      // console.log(state.data);
      // const newAction = action.payload.data.data.id;
      // const result = state.data.result;
      // const newData = result.filter((val, i) => val[i] !== newAction);
      // console.log(newAction);
      // console.log(result);
      // console.log(newData);
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    /* RETURN BOOK */
    case "RETURNBOOK_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "RETURNBOOK_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: "Data Rejected!",
      };
    case "RETURNBOOK_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    /* BORROW BOOKS */
    case "BORROWBOOK_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "BORROWBOOK_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: "Data Rejected!",
      };
    case "BORROWBOOK_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    default:
      return state;
  }
};

export default book;
