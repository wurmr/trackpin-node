# trackpin-node
### TrackPin Garage door information scraper

[![npm version](https://badge.fury.io/js/trackpin-node.svg)](https://badge.fury.io/js/trackpin-node)
[![Build Status](https://travis-ci.org/wurmr/trackpin-node.svg?branch=master)](https://travis-ci.org/wurmr/trackpin-node)
[![dependencies Status](https://david-dm.org/wurmr/trackpin-node/status.svg)](https://david-dm.org/wurmr/trackpin-node)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.png?v=103)](https://opensource.org/licenses/mit-license.php)


This module is designed to get status from the TrackPin (http://trackpin.com/) garage door opener system.

This system does not provide the ability to trigger the garage door remotely so this plugin is only designed to get the status of the garage door.

### Installation / Usage
`$ npm install trackpin-node`

Currently this exports `checkDoorStatus` and `listPins`.

Example usage:
```js
import {checkDoorStatus, listPins} from 'trackpin-node'

const credentials = {
    email: 'email',
    password: 'password'
}

// To get door status
checkDoorStatus(credentials).then(result => {
    // result is an object with status and lastPin
    // { status: 'OPEN' or 'CLOSED', lastPin: 'last used pin code' } 
    console.log(result)
})

// To get a list of pin names in the system (not the code itself)
listPins(credentials).then(r => {
  console.log(r) // -> ['pin1', 'pin2', ...]
})
```
