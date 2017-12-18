import {store, actions} from '../store'
import confirm from '../confirm'

let init = store.getState()

beforeEach(() => {
  store.setState(init)
})

test('defaults', () => {
  expect(store.getState()).toEqual({
    active: false,
    text: '',
    options: {},
    deferred: null
  })
})

test('actions.open: should work', () => {
  confirm({ text: 'hey' })

  const state = store.getState()

  expect(state).toEqual({
    active: true,
    text: 'hey',
    options: {},
    deferred: { resolve: state.deferred.resolve, reject: state.deferred.reject }
  })
})

test('actions.open: should throw when already active', () => {
  confirm({ text: 'hey' })

  expect(() => {
    actions.open(store.getState(), { text: 'hey' })
  }).toThrow('Only a single confirm can be active at a time.')
})

test('actions.open: transform string text', () => {
  confirm('hey')

  const state = store.getState()

  expect(state).toEqual({
    active: true,
    text: 'hey',
    options: {},
    deferred: { resolve: state.deferred.resolve, reject: state.deferred.reject }
  })
})

test.only('actions.open: map all keys except text to options', () => {
  confirm({ text: 'hey', title: 'sup', actions: ['wat'] })

  const state = store.getState()

  expect(state.options).toEqual({ title: 'sup', actions: ['wat'] })
})

test('actions.open: should return promise', () => {
  const result = confirm({ text: 'hey' })
  expect(result.then).not.toEqual(null)
})

test('actions.dismiss: should noop when inactive', () => {
  store.action(actions.dismiss)()
  expect(store.getState()).toEqual(init)
})

test('actions.dismiss: should work', () => {
  const promise = confirm({ text: 'hi' }).then(null, res => {
    expect(store.getState()).toEqual(init)
  })

  store.action(actions.dismiss)()

  return promise
}, 1000)

test('actions.proceed: should noop when inactive', () => {
  store.action(actions.proceed)()
  expect(store.getState()).toEqual(init)
})

test('actions.proceed: should work', () => {
  const promise = confirm({ text: 'hi' }).then(res => {
    expect(store.getState()).toEqual(init)
  })

  store.action(actions.proceed)()

  return promise
}, 1000)
