# Love Without Boundaries 
**Goal:** To facilitate and improve the learning process of Cambodian Students as they prepare for their College Entrance English Exam by tracking the progress of students and their interactions with tutors.

## Tech Stack
We split this application into Frontned and Backend services. The backend is [GraphQL](http://graphql.org/) server using Express and Node.js 8.x.x with [MongoDB](https://docs.mongodb.com/), a NoSQL database, as our choice of data store. The Frontend is built with React 16.2.x and [Relay](https://facebook.github.io/relay/), which is a GraphQL client used to interact with the backend. 

## Application Structure 
- `react_frontend`: frontend top directory
    - `src/`
        - `components/`: holds all the React components
        - `pages/`: holds all the Pages (we use React Router for client-side routing)
        - `relay/`: holds relay configuration files and mutations
        - `Gapi.js`: Google Drive utility functions
        - `index.html`: entry HTML file
        - `index.js`: entry javascript file
    - `assets/`: holds CSS files and images used
    - `eslintrc.json`: eslint configuration file
    - `.babelrc`: [Babel](https://babeljs.io/) configuration file for transpilation
    - `package.json`: Configuration file and dependencies
    - `schema.graphql`: GraphQL schema auto-generated
    - `webpack.config.js`: Webpack configuration file to bundle the frontend
- `web-backend`: backend top directory
    - `src/` 
        - `models/`: Mongoose Models for MongoDB
        - `schema/`: holds GraphQL Mutations, Queries, and Types
            - `mutations/`: holds mutations, which creates/mutate/delete types
            - `queries/`: holds GraphQL Queries, which reads data
            - `types/`: holds GraphQL types, which extend `models/`
        - `scripts`: holds script to export the Schema to `react_frontend/schema.graphql` for the frontend to use 
        - `index.js`: entrance script, sets up MongoDB connection and starts GraphQL server
    - `docs/`: Documentation for backend
    - `eslintrc.json`: eslint configuration file
    - `.babelrc`
    - `package.json`

Specific Documentation is given inside the `react_frontend` and `web_backend` folders.
## Development Setup

### Dependencies
- Node.js 8.x.x
- npm or yarn

First install yarn.
```
npm install yarn
```

To run the graphql server in the backend
```
cd web_backend
yarn            # install dependencies
yarn run build
yarn run exportSchema
yarn run start
```
To run the frontend
```
cd react_frontend
yarn            # install dependencies
yarn run relay  # will recompile graphql queries and regenrate files
yarn run dev 
```
Note: if you prefer using npm, use `npm` instead of `yarn` in commands provided above
