# Donation Card

This donation card is built using HTML, CSS and Javascript. It pulls the data from the external API via the Promise based HTTP client Axios and Webpack as the asset bundler.

## How to preview.
The 3 files required to view the component are within the /dist folder. Simply dragging the index.html file will get the component into a browser.

## Running it in development mode
Run the following two commands in terminal at the root level of the project.

`npm install`

`npm run dev`

## Re-build the dist folder
If you make changes to the scss or javascript then just run the following

`npm run build`

## Folder structure

### config
This folder contains configuration for Webpack on different environments.

### dist
This is where all the production ready code will sit after it has been processed by Webpack

### src
This folder is where all the custom development will go. At this moment it contains all the Javascript and SCSS for the project.

### webpack
Where all the different builds for Webpack go. For dev and production based commands.
