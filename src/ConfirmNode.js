import React, {Component} from 'react'
import {Provider, connect} from './unistore/react'
import {store} from './store'

class BaseConfirmNode extends Component {
  componentWillReceiveProps(nextProps) {
    if (!nextProps.open && nextProps.open) {
      this.props.onOpen && this.props.onOpen()
    } else if (nextProps.open && !nextProps.open) {
      this.props.onClose && this.props.onClose()
    }
  }

  render() {
    return null;
  }
}

const ConnectedBaseConfirmNode = connect(state => state)(BaseConfirmNode)

const ConfirmNode = () => {
  return (
    <Provider store={store}>
      <ConnectedBaseConfirmNode />
    </Provider>
  )
}

export default ConfirmNode
