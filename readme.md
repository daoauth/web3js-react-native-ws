### 1. module install
```
> yarn add web3
> yarn add --dev rn-nodeify
> ./node_modules/.bin/rn-nodeify --yarn --install --hack
```

### 2. edit
-  shim.js
```javascript
// add this 2 functions
if (typeof btoa === 'undefined') {
  global.btoa = function (str) {
    return new Buffer(str, 'binary').toString('base64');
  };
}

if (typeof atob === 'undefined') {
  global.atob = function (b64Encoded) {
    return new Buffer(b64Encoded, 'base64').toString('binary');
  };
}
```
```javascript
// If using the crypto shim, uncomment the following line to ensure
require('crypto')
```
- index.js
```javascript
/**
 * @format
 */
import './shim.js'; // add this
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
```
