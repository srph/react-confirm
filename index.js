import React from 'react';

/**
 * @usage const ConfirmableComponent = confirmable(Component);
 * @usage <ConfirmableComponent ref={(c) => this.dialog = c} />
 * @usage onClick() { this.dialog.confirm().then(confirmed, cancelled); }
 * @param {React.Component} Component
 * @return {React.Component}
 */
function confirmable(Component) {
  class Confirmable extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        show: false,
        message: '',
        promise: null,
        resolve: null,
        reject: null
      };

      this.promise = null;
      this.resolve = null;
      this.reject = null;
      this.confirm = this.confirm.bind(this);
      this.handleConfirm = this.handleConfirm.bind(this);
      this.handleCancel = this.handleCancel.bind(this);
    }

    render() {
      return <Component
        confirmable={{
          message: this.state.message,
          show: this.state.show,
          confirm: this.handleConfirm,
          cancel: this.handleCancel
        }}
        {...this.props} />;
    }

    confirm(message) {
      if ( this.state.show ) {
        return;
      }

      return new Promise((resolve, reject) => {
          this.setState({
            message,
            show: true,
            resolve,
            reject
          });
        })
        .then(() => this.flush(), () => {
          this.flush();
          return Promise.reject(null);
        });
    }

    flush() {
      this.setState({
        message: '',
        show: false,
        promise: null,
        resolve: null,
        reject: null
      });
    }

    handleConfirm() {
      this.state.resolve();
    }

    handleCancel() {
      this.state.reject();
    }
  }

  return Confirmable;
}

export default confirmable;