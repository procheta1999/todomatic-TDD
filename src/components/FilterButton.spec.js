import { toHaveValue } from '@testing-library/jest-dom/dist/matchers';
import {fireEvent,render} from '@testing-library/react';
import { shallow } from 'enzyme';
import React from 'react';
import FilterButton from './FilterButton';

describe("Rendering of FilterButton Component",()=>
{
    it("Should render FilterButton component",()=>
    {
        const filterButtonComponent=shallow(<FilterButton/>);

    const filterButtonExists=filterButtonComponent.find(Text);

    expect(filterButtonExists).toBeDefined;
    })

    it("Should have filter button",()=>
    {
        const { getByTestId } = render(<FilterButton />);

        const filterButtonElement = getByTestId("FilterButton");

        expect(filterButtonElement).toBeInTheDocument();
    })
    
})

describe("FilterButton works properly",()=>{

    const mockedFilter=jest.fn();
    
    it("Should filter tasks properly",()=>{
        
        const name="ALL";
        const {getByTestId}= render(<FilterButton name={name} isPressed={true} setFilter={mockedFilter}/>);
        const filterButtonComponent=getByTestId("FilterButton");
        
        fireEvent.click(filterButtonComponent);
        
        expect(mockedFilter).toBeCalledTimes(1);
    })
})