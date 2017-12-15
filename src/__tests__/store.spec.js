import {store, actions} from '../store'

test.only('defaults', () => {
  expect(store.getState()).toBe({
    open: false,
    text: '',
    options: {}
  })
})

test('actions.open: transform opts', () => {
  // expect(store.getState()).toBe({
  //   open: false,
  //   text: '',
  //   options: {}
  // })
})

test('actions.open: should work', () => {
  store.action(actions.open({ text: 'hey' }))

  expect(store.getState()).toBe({
    open: true,
    text: 'hey',
    options: {}
  })
})