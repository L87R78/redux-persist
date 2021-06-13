import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#80BFFF",
      secondary: "#FF704D",
      card: "#E4EFF2",
    },
    background: {
      default: "#D8E5E8",
    },
  },
});

theme.wrapperCard = {
  margin: "32px",
  display: "flex",
  justifyContent: "space-evenly",
  flexWrap: "wrap",

  containerImage: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    boxShadow: "1px 1px 3px 1px grey",
    borderRadius: "8px",
    width: "250px",
    margin: "8px",
    transition: "transform .2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
    background: theme.palette.primary.card,
    padding: "4px",
  },
  image: {
    alignSelf: "center",
    width: "130px",
    display: "flex",
    flexDirection: "column",
    margin: "8px",
  },
};

theme.button = {
  fontWeight: 600,
  fontSize: 16,
  margin: "16px",
  padding: "8px",
  textDecoration: "none",
  borderRadius: "8px",
  background: theme.palette.primary.main,
  color: "white",
};

theme.title = {
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  marginBottom: "16px",
  fontSize: "32px",
  fontWeight: "bold",
};

theme.snackbar = {
  justifyContent: "center",
  fontWeight: "bold",
  success: {
    backgroundColor: "#33CC33",
  },
};

export default theme;
