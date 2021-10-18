<p align="center">
  <img  alt="RedLoafer Logo" src="./assets/Logo.jpeg" />
</p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Chriszao/RedLoafer?color=%2304D361" />

  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/progress-25%25-brightgreen.svg" alt="Progress">
  </a>
	
  <a href="https://github.com/Chriszao/RedLoafer/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Chriszao/RedLoafer"/>
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen"/>
</p>

<p align="center">
 <a href="#features-developed">Features developed</a> •
 <a href="#technologies">Technologies</a> •
 <a href="#running-foodcamp">Running RedLoafer</a> •
 <a href="#contributing-to-foodcamp">Contributing to RedLoafer</a> •
 <a href="#contributors">Contributors</a> •
</p>

a demo image of the application here...
<!-- <img src="" alt="foodcamp system example"> -->

> RedLoafer allows you take your shopping list wherever you go.

### Features developed

#### Back-end:

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

#### Front-end:

---

### 🛠️ Tecnologias

### Back-end:

- [Node.js](https://nodejs.org/en/);
- [ESLINT](https://eslint.org/docs/user-guide/getting-started);
- [Prettier](https://prettier.io/docs/en/install.html);
- [Typescript](https://www.typescriptlang.org/docs/);
- [Express](https://expressjs.com/pt-br/starter/installing.html);
- [TypeORM](https://typeorm.io/#/);

### Front-end:

---
## 🚀 Running RedLoafer

To install RedLoafer, follow these steps:

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
$ yarn dev # (for back-end)
~~~

> If you are going to use docker-compose, in the ```.env.example``` file you have the information about which variables are necessary to fill in to upload the application's services, postgres, pgadmin and redis.

---

## 📫 Contributing to RedLoafer
To contribute with <strong>RedLoafer</strong>, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and confirm them: `git commit -m '<commit_message>'`
4. Make a push to your remote branch: `git push origin <project_name> / <local>`
5. Create pull request.

Alternatively, see the GitHub documentation at [how to create a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 🤝 Contributors

We thank the following people who contributed to this project:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Chriszao">
        <img src="https://avatars3.githubusercontent.com/Chriszao" width="100px;" alt="Christofer Assis profile picture on GitHub"/><br>
        <sub>
          <b>Christofer Assis</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/mahcassi">
        <img src="https://avatars.githubusercontent.com/u/72576725?v=4" width="100px;" alt="Maria Eduarda Cassiano profile picture on GitHub"/><br>
        <sub>
          <b>Maria Eduarda</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

<p align="center" style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">
  Project made for some subjects of the 📕 <strong>systems analysis and development </strong> 📗 course - UMC
</p>


[⬆ Back to top](#RedLoafer)<br>
