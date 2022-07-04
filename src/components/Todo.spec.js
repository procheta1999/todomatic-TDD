import { shallow } from "enzyme";
import React from "react";
import Todo from "./Todo";

describe("Rendering of Todo Component",()=>{
    it("Should render Todo component",()=>{
        const todoComponent=shallow(<Todo/>);

        const todoExists=todoComponent.find(Text);

        expect(todoExists).toBeDefined();
    })
})