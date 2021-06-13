import { ADD_CARD, REMOVE_CARD } from "../actions/actionTypes";

const initialState = [];

function myCardsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_CARD: {
      const checkCard = state.find((card) => card.id === payload.card.id);
      if (!checkCard) {
        return [...state, payload.card];
      } else {
        return state;
      }
    }

    case REMOVE_CARD: {
      const newState = state.filter((card) => card.id !== payload.cardId);
      return newState;
    }

    default: {
      return state;
    }
  }
}

export default myCardsReducer;
