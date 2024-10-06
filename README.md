
# Task Node .. 

This server-side application serves as the backend for managing user data. It provides endpoints to handle Create, Update Retrieve and Delete operations on submission data.



## Technologies Used

 * Mongoose.js

 * Express.js

 * Node.js

 * npm (Node Package Manager)


## Prerequisites

 * Node.js

 * npm (Node Package Manager)

## Getting Started

To get the project up and running, follow these steps:


1. Clone the Repository:

```bash
  https://github.com/PRITISH-TOMAR/TaskNode
  cd TaskNode
```
2. Install dependencies:
```bash
 npm install
```
3. Run the server:
```bash
 npm start
```


#### GET /PING 

Returns a message if connected successfully!

[https://tasknode-snvc.onrender.com/ping](https://tasknode-snvc.onrender.com/ping)

```bash
{
    "ping": "Hello from the Server !"
}
```
//Copy the links and Test on Postman or somewhere else ..

...........................................................




#### POST / signup

Register User in the Database

Parameters
* name 
* email 
* password
* role


[https://tasknode-snvc.onrender.com/signup](https://tasknode-snvc.onrender.com/signup)

* Request Body
```bash
{
    "name":"Tester",
    "email":"tester@gmail.com",
    "password":"tester1",
    "role":"USER"
}

```
* Response Body
```bash
{
    "message": "User Created Successfully",
    "success": true
}

```

..................................................................................................................................................

#### GET / signin

Login to the account.

Parameters
* email 
* password


[https://tasknode-snvc.onrender.com/signin](https://tasknode-snvc.onrender.com/signin)

  * Request Body
```bash
{
  "email":"tester@gmail.com",
    "password":"tester1"
}

```
* Response Body
```bash
{
    "message": "Login Successful",
    "success": true
}
```


### If ADMIN signs in, all user details are displayed.
..................................................................................................................................................


#### PUT / update


Parameters
* name  (optional)
* email  (mandatory)
* password (mandatory)
* role (optional)


[https://tasknode-snvc.onrender.com/update](https://tasknode-snvc.onrender.com/update)


* Request Body
```bash
{
 
    "email":"tester@gmail.com",
    "password":"tester1",
    "name":"Tester Rename",
    "role":"ADMIN"

}
```
* Response Body
```bash
{
    "message": "User updated successfully",
    "success": true,
    "data": {
        "_id": "67026bf2ad7dcce7fa805309",
        "name": "Tester Rename",
        "email": "tester@gmail.com",
        "role": "ADMIN"
    }
}
```

..................................................................................................................................................

#### DELETE / delete

Delete User details.

Parameters
* email 
* password


[https://tasknode-snvc.onrender.com/delete](https://tasknode-snvc.onrender.com/delete)
  

* Request Body
```bash
{
  "email":"tester@gmail.com",
    "password":"tester1"
}
```
* Response Body
```bash
{
    "message": "User deleted successfully",
    "success": true
}
```

..................................................................................................................................................











* All the links are of deployment version, you can also test the APIs on localhost!

 
*  Error Handling : 
   Errors are returned with appropriate HTTP status codes and messages.
