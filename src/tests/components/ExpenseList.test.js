import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseList} from '../../components/ExpenseList'
import expenses from '../fixtures/expenses'

test('should render ExpenseList with expenses', () =>{
    const wrapper = shallow(<ExpenseList expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseList with empty message', () =>{
    const wrapper = shallow(<ExpenseList expenses={[]} />)
    expect(wrapper).toMatchSnapshot()
})

// Create test file
// Grap imports
// Render ExpenseListItem with fixture data
// Create snapshot
