import React from "react";
import AllCards from "../../components/allCards/AllCards";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    ...theme.title,
  },
}));

const AllFavorites = () => {
  const classes = useStyles();
  return (
    <>
      <title className={classes.title}>All favorites</title>
      <AllCards />
    </>
  );
};

export default AllFavorites;
