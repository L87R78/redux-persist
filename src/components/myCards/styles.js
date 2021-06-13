import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapperCard: {
    ...theme.wrapperCard,
  },
  containerImage: {
    ...theme.wrapperCard.containerImage,
  },
  image: {
    ...theme.wrapperCard.image,
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    marginTop: "32px",
    width: "100%",
  },
  progress: {
    position: "absolute",
    left: "50%",
    top: "50%",
    zIndex: "999",
  },
  likeCardIcon: {
    marginTop: "8px",
    width: "40px",
    height: "40px",
    borderRadius: "32px",
    alignSelf: "center",
    cursor: "pointer",
    border: "none",
  },
  buttons: {
    ...theme.button,
    margin: "16px auto",
    display: "block",
    textAlign: "center",
    width: "150px",
  },
}));

export { useStyles };
