# Frontend Boilerplate with React, Redux, Redux-Observable in TypeScript
## Required
- Node
- Yarn

## Setup
```
yarn
```

## Commands
```
yarn run build       ... build bundle files
yarn run lint        ... Run linter
yarn run lint:fix    ... Run linter and fix automatically
yarn run precommit   ... (for pre-commit command) Run lint:fix and git add
yarn run watch       ... Run
```

## Modules
### Main
- [TypeScript](https://github.com/Microsoft/TypeScript) (version 3.x)
- [react](https://github.com/facebook/react)
- [react-router](https://github.com/ReactTraining/react-router) (version 4.x)
- [connected-react-router](https://github.com/supasate/connected-react-router)
- [redux-observable](https://github.com/redux-observable/redux-observable)
- [rxjs](https://github.com/ReactiveX/rxjs) (Version 6.x)
- [axios](https://github.com/axios/axios)

### Build tools
- [webpack](https://github.com/webpack/webpack)
- [webpack-cli](https://github.com/webpack/webpack-cli)
- webpack plugins
  - [webpack-html-plugin](https://github.com/jantimon/html-webpack-plugin)
- loader
  - [ts-loader](https://github.com/TypeStrong/ts-loader)

### Test
- [Jest](https://github.com/facebook/jest)
- [Enzyne](https://github.com/airbnb/enzyme)

### Linter
- [TSLint](https://github.com/palantir/tslint)

### Formatter
- [Prettier](https://github.com/prettier/prettier)
    - integrate git-commit-hook
    - integrate TSLint

## Directory
```
src/
├── api         ... API Client base and each calling API functions
├── components  ... View (Common components)
├── features    ... Business logic (Action, Reducer, Epic, Selector)
├── pages       ... View (Container)
├── store       ... Reducer, Epic and history mounted on Store
└── index.tsx   ... Entry point
```
