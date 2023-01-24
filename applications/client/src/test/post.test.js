import 'jsdom-global/register';
import React from "react";
import { shallow } from "enzyme";
import { mount } from "enzyme";

import "../enzyme.config";
import Post from "../components/posts/createPost";

//type of test and what it does
describe("Test Create Listing form", function () {
    let wrapper;

    //This is checking service dropdown and check if correct value is gotten
    it("Service picked Correctly", function () {
        wrapper = mount(<Post />);
        wrapper.find('select[className="service-cp"]').simulate('change', { target: { value: 'babysitting' } });
        expect(wrapper.find('select[className="service-cp"]').props().value).toBe('babysitting');
    });
    //checking experience number dropdown
    //checks if correct value is gotten
    it("Experience number picked Correctly", function () {
        wrapper = mount(<Post />);
        wrapper.find('select[className="exp-one"]').simulate('change', { target: { value: 'two' } });
        expect(wrapper.find('select[className="exp-one"]').props().value).toBe('two');
    });

    //checking experience year or month dropdown
    //and it checks if correct value is gotten
    it("Experience month/year picked Correctly", function () {
        wrapper = mount(<Post />);
        wrapper.find('select[className="exp-two"]').simulate('change', { target: { value: 'years' } });
        expect(wrapper.find('select[className="exp-two"]').props().value).toBe('years');
    });
});
