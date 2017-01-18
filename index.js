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
      if ( this.promise ) {
        return;
      }

      this.setState({
        message,
        show: true
      });

      return this.promise = new Promise((resolve, reject) => {
          this.resolve = resolve;
          this.reject = reject;
        })
        .then(() => {
          this.promise = null;

          this.setState({
            message: '',
            show: false
          });
        }, () => {
          this.promise = null;

          this.setState({
            message: '',
            show: false
          });

          return Promise.reject(null);
        });
    }

    handleConfirm() {
      this.resolve();
    }

    handleCancel() {
      this.reject();
    }
  }

  return Confirmable;
}

export default confirmable;