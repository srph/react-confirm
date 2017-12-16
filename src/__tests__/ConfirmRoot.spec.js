import React from 'react'
import {mount} from 'enzyme'
import ConfirmRoot from '../ConfirmRoot'
import {store, actions} from '../store'

let node = null

afterEach(() => {
  node.unmount()
})

test.only('it should throw when more than 1 instance is mounted', () => {
  const Child = jest.fn(() => <div />)
  node = mount(<ConfirmRoot>{Child}</ConfirmRoot>)

  expect(() => {
    mount(<ConfirmRoot>{Child}</ConfirmRoot>)
  }).toThrow('Only a single ConfirmRoot can be mounted at a time.')
})

test.only('it should have props', () => {
  const Child = jest.fn(() => <div />)
  node = mount(<ConfirmRoot>{Child}</ConfirmRoot>)
  const props = Child.mock.calls[0][0]

  expect(Object.keys(props)).toEqual(['active', 'text', 'options', 'actions'])
  expect(Object.keys(props.actions)).toEqual(['proceed', 'dismiss'])
})

test.only('it should proceed', () => {
  const spy = jest.spyOn(actions, 'proceed')
  const Child = ({actions}) => <button onClick={actions.proceed} />
  node = mount(<ConfirmRoot>{Child}</ConfirmRoot>)

  node.find('button').simulate('click')
  expect(spy).toHaveBeenCalled()

  spy.mockReset()
  spy.mockRestore()
})

test.only('it should dismiss', () => {
  const spy = jest.spyOn(actions, 'dismiss')
  const Child = ({actions}) => <button onClick={actions.dismiss} />
  node = mount(<ConfirmRoot>{Child}</ConfirmRoot>)

  node.find('button').simulate('click')
  expect(spy).toHaveBeenCalled()

  spy.mockReset()
  spy.mockRestore()
})