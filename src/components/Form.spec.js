import {render, screen} from '@testing-library/react';
import { shallow } from 'enzyme';
import React from 'react';
import Form from './Form';

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