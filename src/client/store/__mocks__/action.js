export const FETCH_QUOTES_ACTION = "FETCH_QUOTES";
export const FETCH_QUOTES_SUCCES_ACTION = "FETCH_QUOTES_SUCCES";
export const FETCH_QUOTES_ERROR_ACTION = "FETCH_QUOTES_ERROR";

const mockData = [
  {
    currency: "USD",
    quote: 1.12
  },
  {
    currency: "EUR",
    quote: 2.24
  },
  {
    currency: "GBP",
    quote: 3.48
  },
  {
    currency: "AUD",
    quote: 4.96
  }
];

export async function getCurrencyQuotes(symbol, dispatch) {
  if (symbol === "btc") {
    dispatch({
      type: FETCH_QUOTES_ERROR_ACTION,
      payload: "test error!"
    });
    return;
  }
  dispatch({ type: FETCH_QUOTES_ACTION, payload: "BTC" });
  const response = await new Promise(resolve => resolve(mockData));
  dispatch({ type: FETCH_QUOTES_SUCCES_ACTION, payload: response });
}
