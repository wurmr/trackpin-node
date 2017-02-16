# trackpin-node
### TrackPin Garage door information scraper

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

[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)