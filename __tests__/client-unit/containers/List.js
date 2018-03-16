import React from 'react'
import { mount } from 'enzyme'
import List from '../../../src/containers/List'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

const testObject = [{
  title: 'Finding Nemo',
  year: 2002,
  plot: 'testing'
}]

const initialState = {
  movies: testObject
}

const mockStore = configureStore()
let wrapper
let store

beforeEach(() => {
  store = mockStore(initialState)
  wrapper = mount(<Provider store={store} movies={testObject}><List /></Provider>)
})

describe('<List />', () => {
  it('Basic render with a movie', () => {
    expect(wrapper.find('.list').length).toEqual(1);
    expect(wrapper.instance().props.movies).toEqual(testObject);
  })
  it('Basic render without a movie', () => {
    const emptyWrapper = mount(<Provider store={store} movies={[]}><List /></Provider>)
    expect(emptyWrapper.find('.list').length).toEqual(1);
    expect(emptyWrapper.instance().props.movies).toEqual([]);
  })
})
