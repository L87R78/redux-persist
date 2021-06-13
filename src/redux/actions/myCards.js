import { ADD_CARD, REMOVE_CARD } from "./actionTypes";

function actionAddCard(card) {
  return {
    type: ADD_CARD,
    payload: card,
  };
}

function actionRemoveCard(cardId) {
  return {
    type: REMOVE_CARD,
    payload: cardId,
  };
}

export { actionAddCard, actionRemoveCard };
