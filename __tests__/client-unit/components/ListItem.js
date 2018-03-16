import React from 'react'
import { mount } from 'enzyme'
import ListItem from '../../../src/components/ListItem'

const testArray = [ 'Title: Finding Nemo', 'Year: 2002', 'Plot: testing']

describe('<ListItem />', () => {
  it('Basic render with empty list', () => {
    const wrapper = mount(<ListItem list={[]} />);
    expect(wrapper.find('.list-item').length).toEqual(1);
    expect(wrapper.find('ul').length).toEqual(1);
    expect(wrapper.find('li').length).toEqual(0);
    expect(wrapper.instance().props.list).toEqual([]);
  })
  it('Basic render with one item', () => {
    const wrapper = mount(<ListItem list={testArray} />);
    expect(wrapper.find('.list-item').length).toEqual(1);
    expect(wrapper.find('ul').length).toEqual(1);
    expect(wrapper.instance().props.list).toEqual(testArray);
  })
})
