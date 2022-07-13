# Pokedex

Frontend repository for the Pokedex project.

## Prerequisites

The following should be installed on your computer :

-   [Node JS 14+](https://nodejs.org/)

## Dependencies

To run this project on your local environment, simply run :

```bash
npm install
```

## Configuration

In the working directory, you will se an `.env.example` file. Simply copy the content of this file in a `.env` file.

On Mac OS / Linux :
```bash
cp .env.example .env
```
On windows :
```bash
copy .env.example .env
```

Here is a more detailed explanation of the keys :

| Key                        | Default                        | Description                                                                                              |
| -------------------------- | -------------------------------|--------------------------------------------------|
| PORT                       | `3001`                         | Port on which the webpack dev server will start. |
| REACT_APP_API_URL          | `http://localhost:3000/api/v1` | URL on which the backend server is running       |


## Running the app

To start the application, run the following :

```bash
npm start
```

## Tests

This project uses Cypress for End-to-end testing. To have see the tests onfold with an interface, run :

```bash
npm run cypress
```

If you simply want to test the application without interface, or in the context of continuous integration, run the following :
```bash
npm run ci:run
```


