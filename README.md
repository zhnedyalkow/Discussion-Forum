
# MyForum

The third team project in @ Telerik Alpha Academy

![image](https://user-images.githubusercontent.com/19227500/38021979-f19c2d4c-3286-11e8-8e71-7de0cb26f314.png)

## App Description

MyForum is an online discussion site where people can hold conversations in the form of posted messages. Depending on the access level of a user, users can be anonymous or have to register with the forum and then subsequently log in in order to post messages.Each posted message can be only deleted from administrator.

## Authors

| #        | First name | Last name  |       
| -------- | --------- 	| ---------- |
| 1.	   | Valentin  	|   Anchev   |
| 2.	   | Zhitomir  	| Oreshenski |
| 3.	   | Mirela  	| Tsvetkova  |

## Installation

To run the project:

1. Go to 'app/server.js'
2. Run 'npm install'
3. Run 'npm start'


## API Reference

### Libraries and Tehnologies


#### NodeJS

	NodeJS - is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. 

#### Express 

	Express - is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. 

#### Bootstrap 

	Bootstrap - is a free and open-source front-end library for designing websites and web applications. It contains HTML- and CSS-based design templates for typography, forms, buttons,navigation and others.

#### MariaDB 

	MariaDB is a community-developed fork of the MySQL relational database management system intended to remain free under the GNU GPL.

### Packages

- Bcrypt
- Body-parser
- Chai
- Cockie-parser
- Connect-Flash
- Eslint
- Express
- Express-session
- Istanbul
- MySql
- MySql2
- Morgan
- Mocha
- Pug
- Passport
- Sequelize
- Sequelize-CLI
- Sequelize-Auto-Migrations


#   General requirements

- Design and implement a Standard Web application using Node.js, Express and MariaDB
- The application should have a:
    - public part (accessible without authentication)
    - private part (available for registered users)
- Use MVC architecture
- Build a clean solution and follow the Node.js modules architecture

Application Back-end
- Some public dynamic web pages
- Some private (authenticated) dynamic web pages
  - Using Pug
- Some pblic RESTful routes for AJAX
- At least 1 private (authenticated) route for AJAX
- Use Express for the server
- Use MariaDB
- Create a data/service layer for accessing the database
- Use Passport - for managing users

Application front-end (client)
- Use any framework of your choice for the front-end
- Optional, not required
    - KendoUI, AngularJS, Angular 2, Knockout, Bootstrap, etc...
- Implement responsive design
  It may be based on Bootstrap, Materialize, any other UI framework or no framework at all
- Use AJAX form and/or WebSockets communication

- Apply error handling and data validation to avoid crashes when invalid data is entered
- Use loaders, modals and notifications when applicable
- Create usable UI


## License
 
The MIT License (MIT)

Copyright (c) 2015 Zhitomir Oreshenski, Valentin Anchev, Mirela Tsvetkova

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

