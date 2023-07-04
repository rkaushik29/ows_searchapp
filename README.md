# ows_searchapp
Example search application for OpenWebSearch. Created using React JS, to be used in conjuction with the OWS Search API.

### Running the API
First, the OWS Search API needs to be running. You can set this up by following the instructions [here](https://opencode.it4i.eu/openwebsearcheu/wp4/java-lucene-search-api) and running the API on a server of your choice.

Make sure that the endpoint where the API server is running is the same as the endpoint being called in this frontend (See `/search-app/src/Components/Search.js - line:13).

### Build Application
If you need to build the application, run `npm run build` from `./search-app` directory. This is optional.

### Running the WebApp
- Enter the working directory : `cd search-app/`
- Start the App : `npm start`
