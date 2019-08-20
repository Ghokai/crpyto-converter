import {
  FETCH_QUOTES_ACTION,
  FETCH_QUOTES_SUCCES_ACTION,
  FETCH_QUOTES_ERROR_ACTION
} from "./action";

export const getInitialState = () => ({
  symbol: "",
  isLoading: false,
  quotes: [],
  errorMessage: ""
});

export const initalReducerState = getInitialState();

export function reducer(state = initalReducerState, action) {
  switch (action.type) {
    case FETCH_QUOTES_ACTION:
      return {
        symbol: action.payload,
        isLoading: true,
        quotes: [],
        errorMessage: ""
      };
    case FETCH_QUOTES_SUCCES_ACTION:
      return {
        ...state,
        isLoading: false,
        quotes: action.payload,
        errorMessage: ""
      };
    case FETCH_QUOTES_ERROR_ACTION:
      return {
        symbol: state.symbol,
        isLoading: false,
        quotes: [],
        errorMessage: action.payload
      };
    default:
      return state;
  }
}
