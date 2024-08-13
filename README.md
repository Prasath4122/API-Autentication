# API-Authentication

This project demonstrates various API authentication methods including No Authentication, Basic Authentication, API Key Authentication, and Bearer Token Authentication using Axios and Express with Node.js and EJS.

### To Install Dependencies

```
npm i 

or

npm install
```

## Necessary NPM Packages or Dependencies

Axios => [axios](https://www.npmjs.com/package/axios).

EJS (Embedded Javascript => [ejs](https://www.npmjs.com/package/ejs).

Express => [express](https://www.npmjs.com/package/express).


### To start the server 

```
nodemon server.js 

or

node server.js
```


### Authentication Methods

###### No Authentication

* No special headers or tokens are required for this method. Simply make a request to the API endpoint.

###### Basic Authentication

* Basic Authentication requires a ```username and password``` which are encoded and sent in the request headers.

###### API Key Authentication

* API Key Authentication involves sending a ```key``` in the headers or query parameters of the request.

###### Bearer Token Authentication

* Bearer Token Authentication involves sending a ```token``` in the request headers.

##### JSON.stringify(result.data)

The ```JSON.stringify(result.data)``` is used to convert the JavaScript object (in this case, result.data) into a JSON string. This is useful for a variety of reasons, such as:

1. **Logging:** When you want to log the data for debugging purposes, converting it to a JSON string makes it more readable.

2. **Storage:** If you need to store the data in a format that can be easily transferred or saved, JSON is a good choice.

3. **Sending Data:** When sending data over HTTP or other protocols, JSON strings are commonly used.

## Licence 

[MIT](https://choosealicense.com/licenses/mit/)
