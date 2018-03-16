import React from 'react'
import { mount } from 'enzyme'
import Input from '../../../src/components/Input'

describe('<Input />', () => {
  it('Basic render', () => {
    const wrapper = mount(<Input input='Finding Nemo' handleChange={jest.fn()} handleKeyPress={jest.fn()} handleResponse={jest.fn()} />);
    expect(wrapper.find('.set').length).toEqual(1);
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
    expect(wrapper.instance().props.input).toEqual('Finding Nemo');
  })
})
