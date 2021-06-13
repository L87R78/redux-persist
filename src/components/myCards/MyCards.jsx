import React from "react";
import { connect } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";
import { actions } from "../../redux/actions";
import { ButtonTypes } from "../../common/constans";

const MyFavorites = ({ myCards, actionRemoveCard }) => {
  const classes = useStyles();

  const handleRemoveCard = (card) => {
    actionRemoveCard({ cardId: card.id });
  };

  return (
    <>
      <div className={classes.wrapperCard}>
        {myCards.map((card) => (
          <div className={classes.containerImage} key={card.id}>
            <button
              className={classes.likeCardIcon}
              onClick={() => handleRemoveCard(card)}
            >
              <DeleteIcon color="secondary" />
            </button>
            <img className={classes.image} src={card.url} alt="" />
            <span>{card.title}</span>
          </div>
        ))}
      </div>

      <Link className={classes.buttons} to="/">
        {ButtonTypes.back}
      </Link>
    </>
  );
};

export default connect((state) => ({ myCards: state.myCards }), {
  ...actions.actionCards,
})(MyFavorites);
