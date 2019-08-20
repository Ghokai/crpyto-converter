const rp = require("request-promise");
const config = require("../config");

module.exports = {
  crypto2Currency: async function(symbol) {
    const quotePromise = getCryptoQuote(symbol);

    const currencyPromise = getCurrencies();

    const response = await Promise.all([quotePromise, currencyPromise]);

    const USDPrice = response[0].data[symbol].quote.USD.price;

    const currencies = JSON.parse(response[1]);

    return calculateRates(USDPrice, currencies.rates);
  }
};

function calculateRates(priceInUSD, currenciesObject) {
  const calculatedPrices = [{ currency: "USD", quote: priceInUSD }];
  Object.keys(currenciesObject).forEach(currency => {
    calculatedPrices.push({
      currency,
      quote: currenciesObject[currency] * priceInUSD
    });
  });
  return calculatedPrices;
}

function getCurrencies() {
  const requestOptions = {
    method: "GET",
    uri: config.EXCHANGE_RATES_API_ENDPOINT,
    qs: {
      [config.EXCHANGE_RATES_API_BASE_CURRENCY_QUERY_NAME]:
        config.EXCHANGE_RATES_API_BASE_CURRENCY_QUERY_VALUE,
      [config.EXCHANGE_RATES_API_SYMBOL_CURRENCY_QUERY_NAME]:
        config.EXCHANGE_RATES_API_SYMBOL_CURRENCY_QUERY_VALUE
    }
  };

  const promise = rp(requestOptions);
  return promise;
}

function getCryptoQuote(symbol) {
  const requestOptions = {
    method: "GET",
    uri: config.COIN_MARKET_CAP_API_ENDPOINT,
    qs: {
      symbol
    },
    headers: {
      [config.COIN_MARKET_CAP_API_KEY_HEADER]: config.COIN_MARKET_CAP_API_KEY
    },
    json: true,
    gzip: true
  };

  const promise = rp(requestOptions);
  return promise;
}
