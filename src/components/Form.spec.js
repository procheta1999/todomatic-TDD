import { shallow } from 'enzyme';
import React from 'react';
import Form from './Form';

describe("Rendering form component",()=>{
    it("Should render Form component",()=>{
        const FormComponent=shallow(<Form/>);

        const formExists=FormComponent.find(Text);

        expect(formExists).toBeDefined();
    })
})