# Alerts
Return alerts for an organization within a specified time range. 

Alert types include `camera offline`, `camera online`, `tamper`, `motion`, `crowd`, and `Person of Interest` alerts.

For more detailed information, [click here](https://apidocs.verkada.com/reference/getnotificationsviewv1).

## getCameraAlerts
As described above, this function returns alerts for an organization within a specified time range. This wrapper uses promises, so you need to provide a success callback as well as an error callback. If you don't wish to use promises, you can provide a callback method instead.


```javascript title="promise.js"
verkada.getCameraAlerts().then(
  function(data) {
    console.log(data);
  },
  function(err) {
    console.error(err);
  }
);
```

***NOTE: Choosing to provide a callback method requires you to provide an options object, even if its empty.***

```javascript title="no-promise.js"
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

```javascript title="no-promise-options.js"
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

For a list of all query options available, visit the Verkada API documentation for the [Cameras API](https://apidocs.verkada.com/reference/getnotificationsviewv1).