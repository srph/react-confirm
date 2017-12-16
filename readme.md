# React Accordion [![npm version](https://img.shields.io/npm/v/@srph/react-confirm.svg?style=flat-square)](https://npmjs.com/packages/@srph/react-confirm) [![Build Status](https://img.shields.io/travis/srph/react-confirm.svg?style=flat-square)](https://travis-ci.org/srph/react-confirm?branch=master)
Replace native `confirm` function with yer modals.

View [demo](http://xenodochial-beaver-320a9d.netlify.com). View [examples](storybook/accordion.js).

## Why?
This library was built to be flexible:

- It doesn't assume markup, styling, or template.
- It only provides the bare minimum so you could build your custom `confirm`.

## Installation
```bash
npm install @srph/react-confirm --save
```

### Script tags
If you're not using a bundler like Browserify or Webpack, simply add the script tag after your React script tag.

```html
<!-- Script tags for React and other libraries -->
<script src="https://unpkg.com/@srph/react-confirm/dist/react-confirm.min.js"></script>
```

This library is exposed as `ReactAccordion` (e.g., `ReactAccordion`, `ReactAccordion.AccordionButton`, `ReactAccordion.AccordionPane`).

## Usage
`ConfirmRoot` must placed on your top-most component.

```js
import React from 'react';
import Modal from './Modal'
import {confirm, ConfirmRoot} from '@srph/react-confirm';

class App extends React.Component {
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

export default App;
```

View [examples](storybook/confirm.js).

## API Documentation
Here's a list of props you may use to customize the component for your use-case:

### confirm

All other props are passed down to the `div` root element as usual.

| Prop  | Type | Description |
| ----- | ---- | ----------- |
| paneClassName | `string` (required) | The classname to pass all `AccordionPane`.  |
| openClassName | `string` | The classname to pass to the active `AccordionPane`. Defaults to `active`. |
| defaultActive | `number` | Default open accordion. Defaults to `0`. |
| component | `string|ReactElement` | Component / element to use to wrap provided children. Defaults to `div` |

> **NOTE**: `Accordion` wraps your provided children inside a `div`. To customize this, see the `component` prop.

### ConfirmRoot

All other props are passed down to the `div` root element as usual.

| Prop  | Type | Description |
| ----- | ---- | ----------- |
| index | `number` (required) | The number to identify the accordion |

> **NOTE**: `AccordionButton` ignores `className`.

### ConfirmNode

All other props are passed down to the `button` root element as usual.

> **NOTE**: `AccordionButton` ignores `onClick` and `type`.

## Setup
You can check the [demo](http://xenodochial-beaver-320a9d.netlify.com), or build it yourself locally:

```bash
npm install
npm run start
```

Afterwards, open up `localhost:9001` in your browser.

### Bundling package
```
npm run bundle
```

### Publish storybook
```
npm run storybook:publish
```