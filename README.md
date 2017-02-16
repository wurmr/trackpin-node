# trackpin-node
### TrackPin Garage door information scraper

This module is designed to get status from the TrackPin (http://trackpin.com/) garage door opener system.

This system does not provide the ability to trigger the garage door remotely so this plugin is only designed to get the status of the garage door.

### Installation / Usage
`$ npm install trackpin-node`

Currently now the plugin only exports `checkDoorStatus`.

Example usage:
```js
import {checkDoorStatus} from 'trackpin-node'

const credentials = {
    email: 'email',
    password: 'password'
}

checkDoorStatus(credentials).then(result => {
    // result will either be OPEN or CLOSED
    console.log(result) 
})
```

[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)