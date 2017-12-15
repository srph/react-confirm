import React, { Component } from 'react'
import T from 'prop-types'
import {Provider, connect} from './unistore/react'
import {store, actions} from './store'

const BaseConfirmRoot = connect(state => state, actions)(
  ({active, text, options, proceed, dismiss, children}) => (
    children({
      active,
      text,
      options,
      actions: { proceed, dismiss }
    })
  )
)

class ConfirmRoot extends Component {
  render() {
    return (
      <Provider store={store}>
        <BaseConfirmRoot>{this.props.children}</BaseConfirmRoot>
      </Provider>
    )
  }
}

ConfirmRoot.propTypes = {
  children: T.func
}

export default ConfirmRoot