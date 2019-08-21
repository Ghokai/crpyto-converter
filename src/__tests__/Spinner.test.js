import "babel-polyfill";
import { mount } from "enzyme";
import React from "react";
import Spinner from "../client/components/Spinner";

describe("ErrorMessage Component", () => {
  it("check spinner is rendering correctly", () => {
    const wrapper = mount(<Spinner />);

    expect(wrapper.find(".spinner-wrapper")).not.toBeNull();
  });
});
