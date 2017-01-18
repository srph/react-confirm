import React from 'react';
import ReactDOM from 'react-dom';
import {Gateway, GatewayDest, GatewayProvider} from 'react-gateway';
import Modal from 'react-modal2';
import confirmable from '../';

Modal.getApplicationElement = () => document.getElementById('app');

const ConfirmDialog = confirmable(class extends React.Component {
  render() {
    const {show, confirm, cancel, message} = this.props.confirmable;

    return show && (
      <Gateway into="dialog">
        <Modal onClose={cancel}
          backdropClassName="modal-backdrop"
          modalClassName="modal">
          {message}
          <button onClick={cancel}>No</button>
          <button onClick={confirm}>Yes</button>
        </Modal>
      </Gateway>
    );
  }
});

class App extends React.Component {
  render() {
    return (
      <GatewayProvider>
        <div>
          <GatewayDest name="dialog" />

          <button onClick={this.handle.bind(this)}>
            Trigger!
          </button>

          <ConfirmDialog ref={(component) => this.dialog = component} />
        </div>
      </GatewayProvider>
    );
  }

  handle() {
    this.dialog.confirm('Are you sure to go to the other page?')
      .then(() => {
        console.log('You went to the other page!');
      }, () => {
        console.log('You went to the other page!');
      });
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);