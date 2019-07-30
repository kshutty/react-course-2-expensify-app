import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('the sum is 0 with no expenses', () =>{
    const res = selectExpensesTotal([])
    expect(res).toBe(0)
})

test('', () =>{
    const res = selectExpensesTotal([expenses[0]])
    expect(res).toBe(195)
})

test('', () =>{
    const res = selectExpensesTotal(expenses)
    expect(res).toBe(114195)
})