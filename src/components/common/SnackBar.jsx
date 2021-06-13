import React from "react";
import { connect } from "react-redux";
import { Snackbar, makeStyles } from "@material-ui/core";
import { actions } from "../../redux/actions";

const useStyles = makeStyles((theme) => ({
  snackbar: {
    ...theme.snackbar,
    ...theme.snackbar.success,
  },
}));

const SnackBar = ({ snackBar, actionSnackBar }) => {
  const classes = useStyles();

  const handleClose = () => {
    actionSnackBar({ open: false });
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={snackBar.open}
      onClose={handleClose}
      message={snackBar.message}
      ContentProps={{
        className: classes.snackbar,
      }}
    />
  );
};

export default connect(
  (state) => ({
    snackBar: state.snackBar,
  }),
  { ...actions.actionSnackBar }
)(SnackBar);
