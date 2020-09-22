import React from "react";
import RegisterAdmin from "./RegisterAdmin"
import {shallow, mount} from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AuthState from "../../../context/auth/AuthState";

Enzyme.configure({ adapter: new Adapter()});

describe("Register Admin tests", () => {
  
  //Page rendering
  it('should render the page correctly', () => {
    const component = shallow(<AuthState><RegisterAdmin /></AuthState>);
    expect(component).toHaveLength(1);
  });

  //Empty input fields
  it('should have empty input fields for name, address, mobile, email on start', () => {
    const component = mount(<AuthState><RegisterAdmin /></AuthState>);
    expect(component.find('input#name').text()).toEqual('');
    expect(component.find('input#address').text()).toEqual('');
    expect(component.find('input#mobile').text()).toEqual('');
    expect(component.find('input#email').text()).toEqual('');
  });
  
  //Button should call function on-click
  it('should call a function when the button is clicked', () => {
    const component = mount(<AuthState><RegisterAdmin /></AuthState>);
    const mockHandler = jest.fn();
    component.find('register-btn');
    component.simulate('click');
    expect(mockHandler.mock.calls.length).toBe(1);
  });
  
  //test input fields
  it('should input correctly', () => {
    const component = mount(<AuthState><RegisterAdmin /></AuthState>);
    const text = component.find('input#name');
    text.instance().name = 'dummy';
    text.simulate('change');
    expect(text.instance().name).toEqual('dummy');
  });
});