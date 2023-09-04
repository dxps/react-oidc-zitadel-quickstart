# Zitadel Quickstart using React.js SPA and OIDC

This is a minimal quickstart app, a React.js based SPA, for using Zitadel. As starting point, see Zitadel's [quick start guide](https://zitadel.com/docs/guides/start/quickstart).

`src/authConfig.js` file contains the OIDC specific configuration settings, such as Client ID, Redirect URI, UserInfo Endpoint. Make sure you adapt it to your own Zitadel settings.

It includes the `.nvmrc` file that is [NVM](https://github.com/nvm-sh/nvm) specific. Therefore, if you use it, you may want to first run `nvm use` to use the proper Node.js version in this project.

<br/>

## `create-react-app` Notes

1. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
2. Available Scripts
    - Use `npm install` to install the dependencies.
    - Use `npm start` to run the app in the development mode.
        - Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
        - The page will reload when you make changes.\
          You may also see any lint errors in the console.
    - Use `npm test` to launch the test runner in the interactive watch mode.
        - See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
    - Use `npm run build` to build the app for production to the `build` folder.
        - It correctly bundles React in production mode and optimizes the build for the best performance.
        - The build is minified and the filenames include the hashes.
        - Your app is ready to be deployed! See [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

Further details can be found in [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
