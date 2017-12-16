import unistore from './unistore';

const store = unistore({
  active: false,
  text: '',
  options: {},
  deferred: null
})

const actions = {
  open(state, opts) {
    if (state.active) {
      throw new Error('Only a single confirm can be active at a time.');
    }

    // opts(str)
    if (typeof opts === 'string') {
      const text = opts
      opts = { text }
    }

    opts.options = opts.options || {}

    // opts ({ text, actions, etc })
    // Put all other stuff inside `options`
    // @TODO

    return new Promise((resolve, reject) => {
      store.setState({
        active: true,
        text: opts.text,
        options: opts.options,
        deferred: { resolve, reject }
      })
    })
  },

  proceed(state) {
    if (!state.active) {
      return;
    }

    state.deferred.resolve()

    return {
      active: false,
      text: '',
      options: {},
      deferred: null
    }
  },

  dismiss(state) {
    if (!state.active) {
      return;
    }
    
    state.deferred.reject()

    return {
      active: false,
      text: '',
      options: {},
      deferred: null
    }
  }
}

export {store, actions};