import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { ThemeProvider, makeStyles, CssBaseline } from "@material-ui/core";
import { connect } from "react-redux";
import { ButtonTypes } from "./common/constans";
import theme from "./theme";
import AllFavorites from "./views/allFavorites/AllFavorites";
import MyFavorites from "./views/myFavorites/MyFavorites";
import SnackBar from "./components/common/SnackBar";

const useStyles = makeStyles(() => ({
  root: {
    background: theme.palette.background,
  },
  header: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  buttons: {
    ...theme.button,
  },
}));

const App = ({ myCards }) => {
  const classes = useStyles();
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackBar />
        <div className={classes.root}>
          <header className={classes.header}>
            {myCards.length > 0 && (
              <Link className={classes.buttons} to="/my-favorites">
                {ButtonTypes.myfavorites}
              </Link>
            )}
            <a
              className={classes.buttons}
              href="https://l87r78.github.io/PC_Store/"
              rel="noreferrer"
              target="_blank"
            >
              {ButtonTypes.gitHub}
            </a>
          </header>
          test
        </div>
        <Switch>
          <Route exact path="/" component={AllFavorites} />
          <Route exact path="/my-favorites" component={MyFavorites} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default connect((state) => ({ myCards: state.myCards }), null)(App);
