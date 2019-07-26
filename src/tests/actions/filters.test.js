import {setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters'
import moment from 'moment'
test('should generate set start date action object', () =>{
const action = setStartDate(moment(0))
expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should generate set end date action object', () =>{
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should generate set text filter object with text value', () =>{
    const action = setTextFilter('water')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'water'
    })
})
test('should generate set text filter object for default values', () =>{
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})
test('should sort by amount for the objects', () =>{
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'

    })
})

test('should sort by date for the objects', () =>{
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})