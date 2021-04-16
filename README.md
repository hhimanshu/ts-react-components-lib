# TypeScript React Component Library
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
![npm](https://img.shields.io/npm/v/@hhimanshu/ts-react-components-lib)


This library is published on `npm` and demonstrates how to write your own React components in TypeScript and publish them as `npm` package.

## Features  

- [x] React components written in TypeScript
- [x] Leverages [TSDX](https://tsdx.io/) to create library
- [x] Use of [`styled-components`](https://styled-components.com/) for styling
- [x] Connected with [Storybook](https://storybook.js.org/)
- [x] Integrated tests with [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/)
- [x] Linting support using [Prettier](https://prettier.io/)
- [x] Integrated Continuous Integration (CI) using [GitHub Actions](https://github.com/hhimanshu/ts-react-components-lib/actions/workflows/main.yml)
- [x] Integrated Continuous Deployment (CD) to using [Github Actions](https://github.com/hhimanshu/ts-react-components-lib/actions/workflows/release.yml)
- [x] Uses [Semantic Release](https://semantic-release.gitbook.io/semantic-release/) for releasing the library
- [x] Publishes to [npm](https://www.npmjs.com/package/@h2_demo/p2)
- [x] Publishes Storybook to Chromatic


## Commands
- `yarn start` to start developing your components  
- `yarn test` to test your components  
- `yarn lint` to lint your code  
- `yarn prepare` to create the production bundle  
- `yarn storybook` to start `storybook` in development mode (starts as a new process)  
- `yarn build-storybook` to create production version of storybook for the project. This can be deployment to platforms such as Vercel, Gatsby, Surge, or Firebase hosting  
- `yarn size` tells you size of your library when production bundle is created
