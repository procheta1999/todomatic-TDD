import { toHaveValue } from '@testing-library/jest-dom/dist/matchers';
import {render} from '@testing-library/react';
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