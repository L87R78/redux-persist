import React from "react";
import MyCards from "../../components/myCards/MyCards";
import { makeStyles } from "@material-ui/core";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  title: {
    ...theme.title,
  },
}));

const MyFavorites = ({ myCards }) => {
  const classes = useStyles();
  return (
    <>
      {myCards.length === 0 ? (
        <title className={classes.title}>
          You haven’t cards, please click the button "back"
        </title>
      ) : (
        <title className={classes.title}>My favorites</title>
      )}
      <MyCards />
    </>
  );
};

export default connect(
  (state) => ({ myCards: state.myCards }),
  null
)(MyFavorites);
