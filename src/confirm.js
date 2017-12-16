import {store, actions} from './store';

export default function confirm(opts) {
  // We won't be using `store.action` because it operates on async actions
  // @see https://github.com/developit/unistore/issues/3
  return actions.open(store.getState(), opts)
}