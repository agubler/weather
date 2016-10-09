
###Getting Started

The running application can be found at https://agubler.github.io/weather

####Installation

To install all the required depedencies run:

```shell
npm install
```

####Running Tests

Run the tests with

```shell
npm test
```

####Running Locally

Run the application locally, this will automatically open the browser, report linting errors and hot reload package

```shell
npm run start
```

####Building the application

Build the application using:

```shell
npm run build
```

This will producde a minified, productionised bundle of the application in `build` directory.

###Assumptions

1. Running with a modern browser
2. Proxy server to used to connect to OpenWeatherMap running at `https://quiet-peak-68178.herokuapp.com` to enable https requests.

###Impovements

1. add all the missing tests
2. add prop typings
3. add request error handling
4. extend to handle multiple locations
5. consider routing
6. consider typescript or flow for typings

