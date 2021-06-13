import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Pagination from "@material-ui/lab/Pagination";
import { CircularProgress } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { actions } from "../../redux/actions";
import { useStyles } from "./styles";

const AllCards = ({ actionAddCard, actionSnackBar }) => {
  const classes = useStyles();

  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [errorFetch, setErrorFetch] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const data = await fetch(
          `https://jsonplaceholder.typicode.com/photos?_page=${page}`
        );
        const result = await data.json();
        setCards(result);
      } catch (err) {
        setErrorFetch(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [page]);

  const renderProgress = () => {
    return (
      <div className={classes.progress}>
        {loading && <CircularProgress color="primary" />}
      </div>
    );
  };

  const renderCards = () => {
    const handleSaveCard = (card) => {
      actionAddCard({ card });
      actionSnackBar({ open: true, card });
    };

    return (
      <div className={classes.wrapperCard}>
        {cards.map((card) => (
          <div className={classes.containerImage} key={card.id}>
            <button
              className={classes.likeCardIcon}
              onClick={() => handleSaveCard(card)}
            >
              <FavoriteIcon color="primary" />
            </button>
            <img className={classes.image} src={card.url} alt="" />
            <span>{card.title}</span>
          </div>
        ))}
        {!loading && (
          <div className={classes.pagination}>
            <Pagination
              count={500}
              page={page}
              hideNextButton={true}
              hidePrevButton={true}
              onChange={(_, value) => setPage(value)}
              variant="outlined"
            />
          </div>
        )}
      </div>
    );
  };

  if (errorFetch) {
    return (
      <title className={classes.errorFetch}>
        Something went wrong while fetching API
      </title>
    );
  }

  return (
    <>
      {renderProgress()}
      {renderCards()}
    </>
  );
};

export default connect(null, {
  ...actions.actionCards,
  ...actions.actionSnackBar,
})(AllCards);
