import React from 'react';
import {storiesOf} from '@storybook/react';
import {confirm, ConfirmRoot, ConfirmNode} from '../src';
import BaseModal from 'react-modal';

class Modal extends React.Component {
  render() {
    return <BaseModal {...this.props}
      className={{
        base: 'confirmation-box',
        afterOpen: '-after-open',
        beforeClose: '-before-open'
      }}
      overlayClassName={{
        base: 'confirmation-box-overlay',
        afterOpen: '-after-open',
        beforeClose: '-before-open'
      }} />
  }
}

storiesOf('Confirm', module)
  .addDecorator(story => {
    BaseModal.setAppElement('#root')
    return <div className="app" id="main">{story()}</div>
  })
  .add('basic', () => {
    class Basic extends React.Component {
      render() {
        return (
          <div>
            <ConfirmRoot>
              {({active, text, actions}) => (
                <Modal isOpen={active} onRequestClose={actions.dismiss}>
                  <div className="body">
                    <h4 className="title">Confirmation</h4>
                    <p className="text">{text}</p>
                  </div>

                  <div className="footer">
                    <button className="button" onClick={actions.dismiss}>Dismiss</button>
                    <button className="button -primary" onClick={actions.proceed}>Proceed</button>
                  </div>
                </Modal>
              )}
            </ConfirmRoot>

            <button className="button" onClick={this.handleClick}>
              Open Confirmation
            </button>
          </div>
        )
      }

      handleClick() {
        confirm(`You haven't finished your post yet. Do you want to leave without finishing?`)
          .then(() => {
            console.log('Proceed')
          }, () => {
            console.log('Dismissed')
          })
      }
    }

    return <Basic />
  })
  .add('hooks', () => {
    class Basic extends React.Component {
      render() {
        return (
          <div>
            <ConfirmRoot>
              {({active, text, actions}) => (
                <Modal isOpen={active} onRequestClose={actions.dismiss}>
                  <div className="body">
                    <h4 className="title">Confirmation</h4>
                    <p className="text">{text}</p>
                  </div>

                  <div className="footer">
                    <button className="button" onClick={actions.dismiss}>Dismiss</button>
                    <button className="button -primary" onClick={actions.proceed}>Proceed</button>
                  </div>
                </Modal>
              )}
            </ConfirmRoot>

            <SomewhereDeepDownInTheVDOMTree />
          </div>
        )
      }
    }

    class SomewhereDeepDownInTheVDOMTree extends React.Component {
      state = {
        confirming: false
      }

      render() {
        return (
          <button className="button" onClick={this.handleClick}>
            Open Confirmation
          </button>
        )
      }

      handleClick = () => {
        this.setState({ confirming: true })

        confirm(`You haven't finished your post yet. Do you want to leave without finishing?`)
          .then(() => {
            console.log('Proceed')
            this.setState({ confirming: false })
          }, () => {
            console.log('Dismissed')
            this.setState({ confirming: false })
          })
      }
    }

    return <Basic />
  })
  .add('custom title and buttons', () => {
    class CustomTitle extends React.Component {
      render() {
        return (
          <div>
            <ConfirmRoot>
              {({active, text, actions, options}) => (
                <Modal isOpen={active} onRequestClose={actions.dismiss}>
                  <div className="body">
                    <h4 className="title">{options.title || 'Confirmation'}</h4>
                    <p className="text">{text}</p>
                  </div>

                  <div className="footer">
                    <button className="button" onClick={actions.dismiss}>Dismiss</button>
                    {options.buttons && options.buttons.map((button, i) =>
                      <button className="button" onClick={button.onClick} key={i}>
                        {button.text}
                      </button>
                    )}
                    <button className="button -primary" onClick={actions.proceed}>Proceed</button>
                  </div>
                </Modal>
              )}
            </ConfirmRoot>

            <button className="button" onClick={this.handleClick}>
              Open Confirmation
            </button>
          </div>
        )
      }

      handleClick() {
        confirm({
          title: 'Leave page?',
          text:`You haven't finished your post yet. Do you want to leave without finishing?`,
          buttons: [{
            text: 'Extra',
            onClick: () => console.log('Hello, meet the extra button!')
          }]
        }).then(() => {
          console.log('Proceed')
        }, () => {
          console.log('Dismissed')
        })
      }
    }

    return <CustomTitle />
  })
