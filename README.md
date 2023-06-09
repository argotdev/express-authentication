# How to Authenticate API Requests with Clerk & Express

This repo contains example code for using two Clerk authentication middleware components with Express.js:
- `ClerkExpressWithAuth()` is a lax authentication middleware that returns an empty auth object when an unauthenticated request is made.
- `ClerkExpressRequireAuth()` is a strict authentication middleware that raises an error when an unauthenticated request is made.

The code for running `ClerkExpressWithAuth()` is in `backend/app_with.js`. Run with the command `node app_with.js`

The code for running `ClerkExpressRequireAuth()` is in `backend/app_require.js`.  Run with the command `node app_require.js`

Both will start an express server on port 3000.

You can connect to these servers using the code with `frontend`, which is a React client that uses Clerk user management to log in a user. You can run this from within that directory with `npm start`
 
