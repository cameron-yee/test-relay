# Test React + Relay App

## Getting started
```
yarn install
yarn start
```

## About

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It uses Facebook's [Watchman](https://facebook.github.io/watchman/) tool for live reloading files when they change. Watchman can be run concurrently with react-scripts using [Concurrently](https://www.npmjs.com/package/concurrently).

This example repo is based on the [Relay step-by-step tutorial](https://relay.dev/docs/getting-started/step-by-step-guide/). Data is sourced from [graphQL zero](https://graphqlzero.almansi.me/#schema).

## Notes

- Relay hooks require React Suspense which is experimental
  - Relay also has a Legacy Container API which can be used

## TODO

- add a Mutation example
- add an ErrorBoundary
- add Typescript

## Resources

- [Relay](https://relay.dev/)
- [Relay Developer Tools](https://chrome.google.com/webstore/detail/relay-developer-tools/ncedobpgnmkhcmnnkcimnobpfepidadl/related?hl=en-US)
- [Watchman](https://facebook.github.io/watchman/)
- [Concurrently](https://www.npmjs.com/package/concurrently)
