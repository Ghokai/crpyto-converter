import "babel-polyfill";
import { shallow, mount } from "enzyme";
import React from "react";
import App from "../client/components/App";

jest.mock("../client/store/action");

const flushPromises = () => new Promise(setImmediate);

describe("App", () => {
  it("check app header is correct", () => {
    const wrapper = mount(App);

    expect(wrapper.find(".ant-page-header-heading-title").text()).toEqual(
      "Crypto Converter"
    );
  });

  it("search for BTC", async () => {
    const wrapper = mount(App);

    wrapper.find(".ant-input").simulate("change", { target: { value: "BTC" } });
    wrapper.find(".ant-input").simulate("keyDown", { keyCode: 13 });

    await flushPromises();
    wrapper.update();

    expect(wrapper.find(".quote-list").children().length).toEqual(4);
  });

  it("search for btc", async () => {
    const wrapper = mount(App);

    wrapper.find(".ant-input").simulate("change", { target: { value: "btc" } });
    wrapper.find(".ant-input").simulate("keyDown", { keyCode: 13 });

    await flushPromises();
    wrapper.update();

    expect(wrapper.find(".ant-alert-description").text()).toEqual(
      "test error!"
    );
  });
});
