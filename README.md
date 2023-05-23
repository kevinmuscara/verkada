# Verkada API Wrapper
Universal wrapper/client for the [Verkada API](https://apidocs.verkada.com).

## Features
This wrapper/client includes helper functions that support all of Verkadas features for the following scaffolds:

* Cameras API
  - Alerts

## Installation
```shell
$ npm install verkada
```

## Usage
First, initiate the wrapper with your authentication credentials:

```javascript
const Verkada = require('verkada');
const verkada = new Verkada({
  org_id: '<Your Organization Id>',
  apiKey: '<Your Verkada API Key>'
});
```

To change credential values, use the helper functions below:

1. Change API Key:
```javascript
verkada.setAPIKey('new_key_value');
```

2. Get API Key:
```javascript
verkada.getAPIKey();
```

3. Reset API Key:
```javascript
verkada.resetAPIKey();
```

Finally, use the wrappers helper methods to make requests to the Verkada API. The wrapper uses promises, so you need to provide a success callback as well as an error callback:
```javascript
verkada.getCameraAlerts().then(
  function(data) {
    console.log(data);
  },
  function(err) {
    console.error(err);
  }
);
```

If you don't wish to use promises, you can provide a callback method instead: 

***NOTE: choosing to provide a callback method requires you to provide an options object, even if its empty. See the section below for more.***
```javascript
verkada.getCameraAlerts({},
  function(error, data) {
    if(err) {
      console.error(err);
    } else {
      console.log(data);
    }
  }
);
```

The functions that fetch data from the API also accept a JSON object with a set of query parameters. For example, `start_time` can be used in the function:

```javascript
verkada.getCameraAlerts(
  { start_time: '1653282725' },
  function(error, data) {
    if(err) {
      console.error(err);
    } else {
      console.log(data);
    }
  }
);
```

## MIT License

Copyright (c) 2023 Kevin Muscara

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
