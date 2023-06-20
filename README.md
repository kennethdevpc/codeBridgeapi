<p align='left'>
    <img src='https://raw.githubusercontent.com/kenpulicorre/countries_proyect/main/client/src/images/bandera.gif' </img>
</p>

# Project using an api public countries



## Project Objectives

- Build an API with Node and Sequelize.



## Starting

1.  Fork the repository to have a copy of it on your accounts
2.  Clone the repository on your computers to start working

**IMPORTANT:** It is necessary to have at least the latest stable version of Node and NPM. Make sure you have it in order to correctly install the dependencies needed to run the project.

Current version:

- **Node**: 12.18.3 or >
- **NPM**: 6.14.16 or >

To check which version you have installed:

> node -v
>
> npm -v

**Important:** you must create a ``.env`` file in the api folder,
and you can fill like this example (Postgrest was used for database management) :

        DB_USER=postgres
        DB_PASSWORD=123456
        DB_HOST=localhost
        DB_name=dogshousedb
        DB_PORT=5432

where `dogshousedb` is the name of your database `12345` is the password and `localhost` is the location or domain of your database
We us
## Enunciado

Develop a sample REST API using Node.js. There is an postgreSQL database with just one table: select top(2) * from dogs limit 2; 
```
 name  |     color     | tail_length | weight |                
-------+---------------+-------------+--------+
 Neo   | Red & Amber   |          22 |     32 | 
 Jessy | Black & White |           7 |     14 |
```
You need to develop the following API on top of it:

1. The application have an action called "Ping". It should work in the following way:

```
curl -X GET http://localhost:3000/ping
```
should return the following message: `Dogshouseservice.Version1.0.1`


2. The application have an action that allows querying dogs. It should work in the following way:

```
curl -X GET http://localhost:3000/dogs

``` 
should return the following message: 

```
[
    {
        "id": 1,
        "name": "Neo",
        "color": "Red & Amber",
        "tail_length": 22,
        "weight": 32,
    },
    {
        "id": 2,
        "name": "Jessy",
        "color": "Black & White",
        "tail_length": 7,
        "weight": 14,
    },
  }  
```
Both of the following, sorting and pagination should work together:
2. 1.  API support sorting by attribute, for example: 
```
curl -X GET http://localhost:3000/dogs?attribute=weight&order=asc

```
2. 2.  API support pagination, for example:
```
curl -X GET http://localhost:3000/dogs?pageNumber=1&limit=1&attribute=weight&order=desc
```

CREATE:
3. The application have an action that allows creating dogs. It should work in the following way:

```
curl -X POST http://localhost:3000/dog -H "Content-Type: application/json" -d '{"name":"Doggy","color":"red","tail_length":173,"weight":33}'
```

As a result, a new dog should be created.

**warnings**
```

Considerations for Error Handling and Data Validation:

Handling Duplicate Dog Names: Consider a scenario where a dog with the same name already exists in the database. Your API should be able to handle this situation appropriately.
Validating Tail Length: Ensure that the tail length value is valid. It should be a number and cannot be negative. Your API should validate this data and handle any invalid input.
Managing Invalid Request Data: Your API should be robust enough to handle situations where invalid data is passed in the request body. Think about how you can validate the data and respond to such situations.
Other Error Handling: Consider other potential issues that could affect the proper functioning of your API. This could include database connection errors, request timeouts, etc. Your API should be designed to handle these situations gracefully.
Here are a few additional requirements for the task:

Demonstrate your proficiency with Sequelize: We would like to see your knowledge and skills in using Sequelize. Please use this in your application.
Include a database initialization script: Please provide a script that initializes the database with the data provided in this task. This script should create the necessary tables and populate them with the given data.
Utilize async-await: Wherever possible, please use the async-await syntax in your code. This will help ensure that your application handles asynchronous operations effectively.
Showcase your understanding of software development patterns: We are interested in seeing your knowledge of various software development patterns. Please incorporate these into your application where appropriate. This could include patterns related to structuring your code, handling errors, managing data flow, etc.
```


#### Technologies :
- [ ] Express - node
- [ ] Sequelize - Postgres


#### Base de datos

#### pruebas desde postman

- [ ] **GET /ping**: -`http://localhost:3000/ping`
- [ ] **GET /dogs**: -`http://localhost:3000/dogs`
- [ ] **GET /dogs in order by attribute**: -`http://localhost:3000/dogs?attribute=weight&order=desc`
- [ ] **GET /dogs with paginate**: `-http://localhost:3000/dogs?pageNumber=1&limit=1&attribute=weight&order=desc`
- [ ] **POST /dog**: -`http://localhost:3000/dog`

> post example in JSON format raw :

     {
        "name": "Doggwyfwg",
        "color": "red",
        "tail_length": 4,
        "weight": 33
    }

#### Tecnologías necesarias:

-   [ ] Laravel
-   [ ] Composer
-   [ ] Node
-   [ ] PHP
-   [ ] MYSQL

## Execution commands: 
**Note:**
default Dogs were created so that you can run the project and see in the database 2 Dogs



To run the file you only have to install the dependencies, you must go to the folder from the terminal and execute:

To install dependencies

```
sudo npm install
```
for dependencies if it does not allow with the previous command:

```
sudo npm install --force
```
and once the dependencies are installed, run the application,
```
npm start
```

run curl or in postman, the paths given to you
```

 INFO  Server running on [http://localhost:3000].
```
The execution process has finished, Thank you for downloading
<hr/>

---

## **AUTOR**

**kenneth E. Puliche Correa**

### <h3> 🤝🏻 &nbsp;Connect with Me </h3>

Email: **kennethdevpc@gmail.com**

Wpp: **<a href="https://wa.link/2rl3qe"> +573184484423 </a>**

## 🌐 Socials:

[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kenneth-puliche-9a5b02272/)
</br>

---

```

```

