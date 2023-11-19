# Backend configuration
## Environment variables
PORT = 3001

*** The environment variables must be set in a the top level file that must be named **.env**

## Start

    1. npm install
    2. npm run start

## Health

To test that the server started correctly, the endpoint **"/health"** exists in the main path.

    http://localhost:{PORT}/health

Expected response: 
    
        STATUS: 200
        BODY: "OK"
    
Any other case is an error