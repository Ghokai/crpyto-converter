import "babel-polyfill";
import { mount } from "enzyme";
import React from "react";
import Header from "../client/components/Header";

describe("ErrorMessage Component", () => {
  it("check header is rendering correctly", () => {
    const wrapper = mount(<Header />);

    expect(wrapper.find(".ant-page-header-heading-title").text()).toEqual(
      "Crypto Converter"
    );
  });
});
