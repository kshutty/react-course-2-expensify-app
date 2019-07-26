import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import moment from 'moment'
test('should set default state', () =>{
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by id', () =>{
    const action = ({type: 'REMOVE_EXPENSE', id: expenses[1].id})
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should remove expense by id', () =>{
    const action = ({type: 'REMOVE_EXPENSE', id: '-1'})
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

// add an expense
test('should add an expense', () =>{
    const expense = {
            id: '999',
            description: 'chair',
            note: 'comfy',
            amount: 999,
            createdAt: moment(0).add(8, 'days').valueOf()
    }
    const action = {
        type: 'ADD_EXPENSE', 
        expense
        }
    
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([
        ...expenses, 
        expense
    ])
})
// should edit an expense
test('should edit an expense', () =>{
   const amount = 122000
    const action = {
        type: 'EDIT_EXPENSE', 
        id: expenses[1].id,
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[1].amount).toBe(amount)
})
// should not edit expense if expense not found 

test('should not edit an expense if id not found', () =>{
    const amount = 12200
     const action = {
         type: 'EDIT_EXPENSE', 
         id: '-1',
         updates: {
             amount
         }
     }

     const state = expensesReducer(expenses, action)
     expect(state).toEqual(expenses)
 })