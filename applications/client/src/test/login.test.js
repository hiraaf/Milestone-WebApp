import 'jsdom-global/register';
import React from "react";
import { shallow } from "enzyme";
import { mount } from "enzyme";

import "../enzyme.config";
import Login from "../components/login/login";

//This checks login forms correctness
describe("Test Login form", function () {
    let wrapper;

    //username should be gotten and checked if its correct
    it("Username created Correctly", function () {
        wrapper = shallow(<Login />);
        wrapper.find('input[className="group-467 flex-row-vstart-hstart"]').simulate("change", {
            target: { className: "group-467 flex-row-vstart-hstart", value: "test@mail.com" }
        });
        expect(wrapper.find('input[className="group-467 flex-row-vstart-hstart"]').props().value).toBe("test@mail.com")
    });

    //password should be gotten and checked to see the value on if its correct
    it("Password created Correctly", function () {
        wrapper = shallow(<Login />);
        wrapper.find('input[className="group-075 flex-row-vstart-hstart"]').simulate("change", {
            target: { className: "group-075 flex-row-vstart-hstart", value: "password123" }
        });
        expect(wrapper.find('input[className="group-075 flex-row-vstart-hstart"]').props().value).toBe("password123")
    });

});