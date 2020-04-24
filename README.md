# loady

**loady** is a pretty small helper function that loads scripts after a selected event was triggered – for example, a
click on a button.

### Installation

Install via npm

```bash
$ npm i @fngr/loady
```

### Usage

```javascript
import loady from '@fngr/loady'

loady({
  triggerElement: document.getElementById('myButton'), // element the eventlistener will be added to, must be DOMElement
  event: 'click', // event type that triggers event listener on triggerElement
  storageItem: 'load-chartjs-consent', // the key of the item that will be placed in localStorage to determine consent
  script: 'https://cdn.jsdelivr.net/npm/chart.js@2.8.0', // the script url to load
  // object of attributes that should be added to script tag
  attributes: {
    defer: true,
  },
})
```

### License

MIT
