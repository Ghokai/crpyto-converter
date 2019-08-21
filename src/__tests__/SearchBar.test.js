import "babel-polyfill";
import { mount } from "enzyme";
import React from "react";
import SearchBar from "../client/components/SearchBar";

describe("SearchBar Component", () => {
  it("check SearchBar is rendering correctly", () => {
    const mockFn = jest.fn();
    const wrapper = mount(<SearchBar onSearch={mockFn} />);

    wrapper.find(".ant-input").simulate("change", { target: { value: "ADA" } });
    wrapper.find(".ant-input").simulate("keyDown", { keyCode: 13 });
    expect(mockFn).toBeCalled();
  });
});
