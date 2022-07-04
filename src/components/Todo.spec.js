import { shallow } from "enzyme";
import { fireEvent, render } from "@testing-library/react";
import React from "react";
import Todo from "./Todo";

describe("Rendering of Todo Component",()=>{
    it("Should render Todo component",()=>{
        const todoComponent=shallow(<Todo/>);

        const todoExists=todoComponent.find(Text);

        expect(todoExists).toBeDefined();
    })
    
    it("Should have list elements",()=>{

        const {getByTestId}= render(<Todo/>);

        const listElement=getByTestId("Todo");

        expect(listElement).toBeInTheDocument();
    })
    it("Should have view template",()=>
    {
        const { getByTestId }= render(<Todo/>);

        const viewTemplate = getByTestId("view-template");

        expect(viewTemplate).toBeInTheDocument();
    })
})