import "babel-polyfill";
import { mount } from "enzyme";
import React from "react";
import QuoteList from "../client/components/QuoteList";

describe("ErrorMessage Component", () => {
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

  it("check quote list rendered correctly", () => {
    const wrapper = mount(<QuoteList quotes={mockData} symbol="BTC" />);

    expect(wrapper.find(".quote-list").children().length).toEqual(
      mockData.length
    );
  });
});
