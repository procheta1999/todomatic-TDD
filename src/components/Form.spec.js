import { fireEvent, render } from "@testing-library/react";
import { shallow } from 'enzyme';
import React from 'react';
import Form from './Form';

const mockForm= jest.fn();

describe("Rendering form component",()=>{
    it("Should render Form component",()=>{
        const FormComponent=shallow(<Form/>);

        const formExists=FormComponent.find(Text);

        expect(formExists).toBeDefined();
    })
    it("Should have heading",()=>{
        const { getByTestId } = render(<Form />);
        
        const headingElement = getByTestId("form-heading");
        
        expect(headingElement).toHaveTextContent("What needs to be done?");
    })
    it("Should have blank input initially",()=>{
        const { getByTestId } = render(<Form />);

        const inputElement=getByTestId("form-input");

        expect(inputElement).toHaveValue("");
    })
})

describe("checking functionality of form component",()=>{
    it("should take new values through input",()=>{
        const { getByTestId }= render(<Form/>);

        const formInputElement =getByTestId("form-input");

        fireEvent.change(formInputElement,{
            target:{
                value:"Code"
            },
        });
        expect(formInputElement).toHaveValue("Code");
    })
    it("should add tasks to list",()=>{
        const {getByTestId}=render(<Form addTask={mockForm}/>);

        const addtask =getByTestId("form-input");
        const addTaskButton= getByTestId("form-button");

        fireEvent.change(addtask,{
            target:
            {
                value:"Code"
            },
        });
        fireEvent.click(addTaskButton);

        expect(addtask).toHaveValue("");
        expect(mockForm).toBeCalledTimes(1);
    })
})