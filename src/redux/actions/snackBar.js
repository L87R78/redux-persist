import { SHOW_SNACKBAR } from "./actionTypes";

function actionSnackBar(data) {
  const payload = {
    open: data.open,
    message: data.card && `You have added card number ${data.card.id}`,
  };
  return {
    type: SHOW_SNACKBAR,
    payload,
  };
}

export { actionSnackBar };
