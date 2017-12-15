# React Accordion [![npm version](https://img.shields.io/npm/v/@srph/react-accordion.svg?style=flat-square)](https://npmjs.com/packages/@srph/react-accordion) [![Build Status](https://img.shields.io/travis/srph/react-accordion.svg?style=flat-square)](https://travis-ci.org/srph/react-accordion?branch=master)
Build markup-agnostic accordions

View [demo](http://xenodochial-beaver-320a9d.netlify.com). View [examples](storybook/accordion.js).

## Why?
Most projects work fine. In addition, accordions are pretty simple in nature. However, this library was built for _simplicity_:

- It doesn't assume markup.
- It only handles state.
- It provides the bare minimum to get you started.

### How It Works

This library takes advantage of context to pass down data to the each pane.

## Installation
```bash
npm install @srph/react-accordion --save
```

### Script tags
If you're not using a bundler like Browserify or Webpack, simply add the script tag after your React script tag.

```html
<!-- Script tags for React and other libraries -->
<script src="https://unpkg.com/@srph/react-accordion/dist/react-accordion.min.js"></script>
```

This library is exposed as `ReactAccordion` (e.g., `ReactAccordion`, `ReactAccordion.AccordionButton`, `ReactAccordion.AccordionPane`).

## Usage
View [examples](storybook/accordion.js).

```js
import React from 'react';
import Accordion, {AccordionPane, AccordionButton} from '@srph/react-accordion';

class App extends React.Component {
  render() {
    return (
    <Accordion paneClassName="panel" openClassName="-open">
      <AccordionPane index={0}>
        <div className="heading">
          <h4 className="title">What does X mean?</h4>

          <AccordionButton className="button">
            {(open) => {
              return open ? '▼' : '▲';
            }}
          </AccordionButton>
        </div>

        <div className="body">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </AccordionPane>

      <AccordionPane index={1}>
        <div className="heading">
          <h4 className="title">What does X mean?</h4>

          <AccordionButton className="button">
            {(open) => {
              return open ? '▼' : '▲';
            }}
          </AccordionButton>
        </div>

        <div className="body">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </AccordionPane>
    </Accordion>
    );
  }
}

export default App;
```

## API Documentation
Here's a list of props you may use to customize the component for your use-case:

### Accordion

All other props are passed down to the `div` root element as usual.

| Prop  | Type | Description |
| ----- | ---- | ----------- |
| paneClassName | `string` (required) | The classname to pass all `AccordionPane`.  |
| openClassName | `string` | The classname to pass to the active `AccordionPane`. Defaults to `active`. |
| defaultActive | `number` | Default open accordion. Defaults to `0`. |
| component | `string|ReactElement` | Component / element to use to wrap provided children. Defaults to `div` |

> **NOTE**: `Accordion` wraps your provided children inside a `div`. To customize this, see the `component` prop.

### AccordionPane

All other props are passed down to the `div` root element as usual.

| Prop  | Type | Description |
| ----- | ---- | ----------- |
| index | `number` (required) | The number to identify the accordion |

> **NOTE**: `AccordionButton` ignores `className`.

### AccordionButton

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