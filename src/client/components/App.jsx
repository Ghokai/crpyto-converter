import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import { getCurrencyQuotes } from "../store/action";
import AppWrapper, { AppContext } from "./AppWrapper";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import QuoteList from "./QuoteList";
import Header from "./Header";

const App = () => {
  const { symbol, quotes, isLoading, errorMessage, dispatch } = useContext(
    AppContext
  );

  const onSearchHandler = async term => {
    await getCurrencyQuotes(term, dispatch);
  };

  return (
    <div className="app-container">
      <Header />
      <SearchBar onSearch={onSearchHandler} />
      {isLoading && <Spinner />}
      {errorMessage.length > 0 && <ErrorMessage text={errorMessage} />}
      {quotes.length > 0 && <QuoteList quotes={quotes} symbol={symbol} />}
    </div>
  );
};

const WrappedApp = (
  <AppWrapper>
    <App />
  </AppWrapper>
);

export default WrappedApp;
