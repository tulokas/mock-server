## Mock server for testing
A no brainer express backend to test signin process of a frontend application: 

### Installation

`yarn` or `npm install`

### Run server

`node app.js`

### Send signin request

`POST: http://<HOST>:5100/signin`

include `email`, `password` and `keepLoggedIn` in the request body for example:

```
{
  "email": "anyemail@anything.anydomain",
  "password": "any-random-password",
  "keepLoggedIn": true
}
```

The server should return `email` and `keepLoggedIn` with a status code of `200`
