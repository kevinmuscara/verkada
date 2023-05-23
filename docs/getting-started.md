# Getting Started
To get started using the wrapper client, you must first install the npm library. 

You may use any library manager you want, although I recommend using [pnpm](https://pnpm.io), a faster alternative to npm. 

Install the library by running the following:

```shell
$ pnpm install verkada
```

Once the library is installed, you need to initialize the wrapper with your authentication credentials:

```javascript
const Verkada = require('verkada');
const verkada = new Verkada({
  org_id: `<Your Organization Id>`
  apiKey: `<Your API Key>` 
});
```

If you want to change these credentials throughout your application, utilize the helper functions:

```javascript
// Change Organization Id
verkada.setOrganizationId('new_id_value');

// Change API Key
verkada.setAPIKey('new_key_value');
```

Now you're ready to start using the wrapper client! Check out the list of functions currently available by navigating through the various sections. 