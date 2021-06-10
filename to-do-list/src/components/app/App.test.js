import React from "react";
import { mount, shallow, render } from "enzyme";
import { App } from './App';

describe('App', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<App/>);
    const wrapper = component.find(".main");
    expect(wrapper.length).toBe(1);
  });
});