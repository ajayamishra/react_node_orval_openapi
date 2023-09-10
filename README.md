# React, NodeJS, Orval, OpenAPI project

### How to setup and run the project?
  1. Clone the repo
  2. Depending on your package manager use either: `yarn install` or `npm install`
  3. To start server: `yarn start:server` / `npm run start:server` (runs on port `8088`)
  4. To start client: `yarn start:client` / `npm run start:client` (run on port `5173`)

### How to enable & verify Mock server?
  1. Set up .env file in the project root directory.
  2. Add variable VITE_API_MOCK_ENABLED=true
  3. Restart the client application and browse the page.
  4. Check the browser console, You should see the following:
  <br>
    `Mock Server Activated !!!!`
    <br>
    `[MSW] Mocking enabled.`

### Backend Setup
 - Setup Mongo DB
 - Setup configuration based on `sample_env` file
 - Filled the Data based on Models in the `server/models` for User if you want to use the real data.


 ### How to use?
  - If you want to use Mock data, starting the server is not necessary as it uses the Mock response.
  - If you want to use the real data, start server and since the API endpoint for Products is not impletemented you can't use it.
  - Make sure to set `VITE_API_MOCK_ENABLED=false` if you want to use real endpoint.

### Using Orval
  - After modifying or adding new schemas for open api you must run the command `yarn generate:ui:hooks` or `yarn run generate:ui:hooks`

### Folder structure
```
📦 ROOT
├─ src
│  ├─ client 
│  │  └─ codes related to frontend here
│  └─ server
│     └─ codes related to backend here
├─ schemas
│  └─ Open API schemas
└─ public
   └─ public assets
```
    