# FirstMate React Front End Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This application fetches token information of sample NFTs and uses that information to interact with the Resorvoir API which will provide the latest data on pricing and current bids on the provided tokens.

## Getting Started

Make sure to download and boot up the FirstMate Backend project first
Validate that you have the following environment variables set up in your local .env file

<em>REACT_APP_TOKENS_API_URL</em>

<em>REACT_APP_RESERVOIR_API_KEY</em>

In the project directory, you can run:

### `npm start`

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

## TradeOffs

Given that I gave myself 5 hours to work on this I did not add features like sorting or add features to add or delete tokens from the original list, given that more validation would have been required. I also did not add any tests for the same reason. I would have added integration and unit testing to validate that features were running correctly on build time.
