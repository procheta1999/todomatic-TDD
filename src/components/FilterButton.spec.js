import { shallow } from 'enzyme';
import Recat from 'react';
import FilterButton from './FilterButton';

describe("Rendering of FilterButton Component",()=>
{
    it("Should render FilterButton component",()=>
    {
        const filterButtonComponent=shallow(<FilterButton/>);

    const filterButtonExists=filterButtonComponent.find(Text);

    expect(filterButtonExists).toBeDefined;
    })
    
})