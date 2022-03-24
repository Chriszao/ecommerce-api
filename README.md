<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Chriszao/ecommerce-api?color=%2304D361" />

  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/progress-25%25-brightgreen.svg" alt="Progress">
  </a>
	
  <a href="https://github.com/Chriszao/ecommerce-api/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Chriszao/ecommerce-api"/>
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen"/>
</p>

<p align="center">
 <a href="#features-developed">Features developed</a> •
 <a href="#technologies">Technologies</a> •
 <a href="#running-ecommerce-api">Running ecommerce-api</a>
</p>

a demo image of the application here...
<!-- <img src="" alt="ecommerce-api system example"> -->

### Features developed

- [ ] User
  - [x] User login and authentication;
    - [x] Create session authentication token;
    - [x] Hash for passwords;
  - [x] Password recovery
    - [x] Recover password through registered email;
    - [x] Password recovery email;
    - [x] Password reset;
    - [x] Password Recovery Tests.
  - [ ] Profile
    - [x] Show user profile;
    - [x] Update avatar profile;
    - [ ] Change name, email, password;
- [x] Products
  - [x] CRUD

---

### 🛠️ Technologies

### Back-end:

- [Node.js](https://nodejs.org/en/);
- [ESLINT](https://eslint.org/docs/user-guide/getting-started);
- [Prettier](https://prettier.io/docs/en/install.html);
- [Typescript](https://www.typescriptlang.org/docs/);
- [Express](https://expressjs.com/pt-br/starter/installing.html);
- [TypeORM](https://typeorm.io/#/);
- [Docker](https://docs.docker.com/get-started/)

## 🚀 Running API

To install ecommerce-api, follow these steps:

- For the backend:

Create a ```.env``` file at the root of the project, populating all of the ```.env.example``` examples.

Create the ```ormconfig.json``` file at the root of the project, and fill in your database connection data.
For more information, read the documentation [Connection Options](https://typeorm.io/#/connection-options).

~~~JSON
{
  // Example file
  "type": "", 
  "host": "", 
  "port": ,
  "username": "",
  "password": "",
  "database": ""
}
~~~

After creating the docker containers, update the project dependencies with the command below and you will be ready to run the application. 

~~~shell
$ yarn install # link dependencies...
$ yarn typeorm migration:run # To create migrations
$ yarn dev # (run dev server)
~~~

> If you are going to use docker-compose, in the ```.env.example``` file you have the information about which variables are necessary to fill in to upload the application's services, postgres, pgadmin and redis.

<p align="center" style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">
  Project made with 💙 by <strong>Chriszão</strong> 👩‍💻
</p>


[⬆ Back to top](#features-developed)<br>
