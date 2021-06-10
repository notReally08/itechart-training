import React from "react";
import { mount, shallow, render } from "enzyme";
import { AddNewTaskForm } from './AddNewTaskForm';

describe('AddNewTaskForm', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<AddNewTaskForm/>);
    
    expect(component).toMatchSnapshot();
  });
  it('should render banner text correctly with given strings', () => {
    const strings = ['one', 'two'];
    const component = shallow(<AddNewTaskForm list={strings} />);
    expect(component).toMatchSnapshot();
  });
});