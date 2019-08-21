import "babel-polyfill";
import { mount } from "enzyme";
import React from "react";
import ErrorMessage from "../client/components/ErrorMessage";

describe("ErrorMessage Component", () => {
  it("check error message is displaying correctly", () => {
    const testMessage = "test error message!";
    const wrapper = mount(<ErrorMessage text={testMessage} />);

    expect(wrapper.find(".ant-alert-description").text()).toEqual(testMessage);
  });

  it("check error title is displaying correctly", () => {
    const testMessage = "test error message!";
    const wrapper = mount(<ErrorMessage text={testMessage} />);

    expect(wrapper.find(".ant-alert-message").text()).toEqual("Error!");
  });
});
