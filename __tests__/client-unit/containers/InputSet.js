import React from 'react'
import { mount } from 'enzyme'
import InputSet from '../../../src/containers/InputSet'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

const testObject = {
  title: 'Finding Nemo',
  year: 2002,
  plot: 'testing'
}

const initialState = {
  movies: testObject
}

const mockStore = configureStore()
let wrapper
let store

beforeEach(() => {
  store = mockStore(initialState)
  wrapper = mount(<Provider store={store}><InputSet movies={testObject} retrieveMovies={jest.fn()} /></Provider>)
})

describe('<InputSet />', () => {
  it('Basic render', () => {
    expect(wrapper.find('.input-set').length).toEqual(1);
  })
})
