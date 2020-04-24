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
  triggerElement: document.getElementById('myButton'),
  event: 'click',
  storageItem: 'load-chartjs-consent',
  script: 'https://cdn.jsdelivr.net/npm/chart.js@2.8.0',
  attributes: {
    defer: true,
  },
})
```

### Options

TBA

### License

MIT
