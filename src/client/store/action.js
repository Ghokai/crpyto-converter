import axios from "axios";

export const FETCH_QUOTES_ACTION = "FETCH_QUOTES";
export const FETCH_QUOTES_SUCCES_ACTION = "FETCH_QUOTES_SUCCES";
export const FETCH_QUOTES_ERROR_ACTION = "FETCH_QUOTES_ERROR";

export async function getCurrencyQuotes(symbol, dispatch) {
  try {
    dispatch({ type: FETCH_QUOTES_ACTION, payload: symbol });
    const response = await axios.get(`api/quote?symbol=${symbol}`);
    dispatch({ type: FETCH_QUOTES_SUCCES_ACTION, payload: response.data });
  } catch (error) {
    console.log(error);
    console.log(error.response);
    dispatch({
      type: FETCH_QUOTES_ERROR_ACTION,
      payload: error.response.data.error_message
    });
  }
}
