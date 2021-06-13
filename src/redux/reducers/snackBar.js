import { SHOW_SNACKBAR } from "../actions/actionTypes";

const initialState = {
  open: false,
  message: "",
};

function snackbarReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SHOW_SNACKBAR: {
      return { ...payload };
    }

    default: {
      return state;
    }
  }
}

export default snackbarReducer;
