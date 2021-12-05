# react-ts-and-other-basic-setup

### Clean React + TypeScript Starter

Configured with:

-   Webpack
-   ESLint
-   Prettier
-   Jest (which necessitates Babel when using TypeScript)
-   StyledComponents

Including basic example patterns for use of:

-   React Hooks (useState & useEffect)
-   Jest unit testing
-   StyledComponents
-   CSS Grid / Flexbox

### How to develop with it:

You will ideally need `yarn` and `node 16` (I recommend the npm package [NVM](https://github.com/nvm-sh/nvm) for managing node versions).

Once you are ready, in your terminal and inside the project folder, run `yarn` to install dependencies
and then `yarn dev` to start the dev-server which makes serves the application under `localhost:8080`.

## How to deploy to production:

Running `yarn build` will create a javascript bundle of the React Application (unless changed in the _webpack.config_ under the name `app.js`)and place it in the project's `/dist` folder.

You might want to build a deployment script which builds and deploys `app.js` - making it available on the web.

## References and Thanks:

Heavily based on https://github.com/GR34SE/react-typescript-starter.git also see
the related [Medium Article](https://medium.com/@adriancelczynski/react-with-typescript-starter-kit-without-create-react-app-including-webpack-eslint-bef225c35ffa).
