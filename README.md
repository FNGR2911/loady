# loady

**loady** is a tiny and lightweight (1.4kb gzipped) library that loads scripts after a selected event
was triggered – for example a click on a button. If the consent is already given, the script will be loaded immediately.

[![npm version](https://badge.fury.io/js/%40fngr%2Floady.svg)](https://badge.fury.io/js/%40fngr%2Floady)
[![dependencies](https://david-dm.org/fngr2911/loady.svg)](https://david-dm.org/fngr2911/loady)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square)](https://github.com/fngr2911/loady/issues)

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

`triggerElement`: _DOM Element_, required  
The DOM Element where the event listener will be added to.

`event`: _String_, required, default: 'click'  
String of event type that triggers event listener on triggerElement

`storageItem`: _String_, required  
Key of the item that will be placed in localStorage to determine consent

`script`: _String_, required  
The URL of the script to be loaded after consent

`attributes`: _Object_, optional  
Object of attributes that should be added to script tag. Something like `{ 'defer': true }`

### License

MIT
