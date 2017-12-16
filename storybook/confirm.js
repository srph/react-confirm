import React from 'react';
import {storiesOf} from '@storybook/react';
import {confirm, ConfirmRoot, ConfirmNode} from '../src';
import Modal from 'react-modal';

storiesOf('Confirm', module)
  .addDecorator(story => {
    Modal.setAppElement('#root')
    return <div className="app" id="main">{story()}</div>
  })
  .add('basic', () => {
    class Basic extends React.Component {
      render() {
        return (
          <div>
            <ConfirmRoot>
              {({active, text, actions, options}) => (
                <div>
                  <Modal isOpen={active} onRequestClose={actions.dismiss}>
                    {text}
                    <button onClick={actions.proceed}>Proceed</button>
                    <button onClick={actions.dismiss}>Dismiss</button>
                  </Modal>
                </div>
              )}
            </ConfirmRoot>

            <button onClick={this.handleClick}>
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
  