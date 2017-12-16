import confirm from '../confirm'
import {actions} from '../store'

test.only('it should call actions.open', () => {
  const spy = jest.spyOn(actions, 'open')
  confirm('hey')

  const arg = spy.mock.calls[0][1]
  expect(arg).toEqual('hey')

  spy.mockReset()
  spy.mockRestore()
})

test.only('it should return actions.open', () => {
  const spy = jest.spyOn(actions, 'open').mockReturnValue(Promise.resolve())
  expect(confirm('hey').then).not.toEqual(null)
})