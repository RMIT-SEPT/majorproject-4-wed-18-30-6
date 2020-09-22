import React from "react";
import { mount, shallow, render } from "enzyme";
import RegisterCustomer from "./RegisterCustomer";

import AuthState from "../../../context/auth/AuthState";

describe("<RegisterCustomer>", () => {
  it("is a valid mobile number", () => {
	const wrapper = mount(<AuthState><RegisterCustomer /></AuthState>);
	
	const mobileInput = wrapper.find('input#mobile').at(0);

	mobileInput.props().value = '0404101001';
	mobileInput.simulate('change');

	expect(mobileInput.props().value).toEqual('0404101001');
  });

  it("is not a valid mobile number", () => {
	const wrapper = mount(<AuthState><RegisterCustomer /></AuthState>);
	
	const mobileInput = wrapper.find('input#mobile').at(0);

	mobileInput.props().value = '0-404101001';
	mobileInput.simulate('change');

	expect(mobileInput.props().value).toEqual('');
  });

  it("is a valid email", () => {
	const wrapper = mount(<AuthState><RegisterCustomer /></AuthState>);
	
	const mobileInput = wrapper.find('input#email').at(0);

	mobileInput.props().value = 'id@student.rmit.edu.au';
	mobileInput.simulate('change');

	expect(mobileInput.props().value).toEqual('id@student.rmit.edu.au');
  });

  it("is not a valid email", () => {
	const wrapper = mount(<AuthState><RegisterCustomer /></AuthState>);
	
	const mobileInput = wrapper.find('input#email').at(0);

	mobileInput.props().value = 'id@student@rmit.edu.au';
	mobileInput.simulate('change');

	expect(mobileInput.props().value).toEqual('');
  });
});
