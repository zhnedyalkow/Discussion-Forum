'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "lastName" on table "Users"
 * changeColumn "answerContent" on table "Answers"
 * changeColumn "content" on table "Posts"
 * changeColumn "title" on table "Posts"
 * changeColumn "title" on table "Threads"
 * changeColumn "name" on table "userRoles"
 * changeColumn "firstName" on table "Users"
 * changeColumn "catName" on table "Categories"
 * changeColumn "password" on table "Users"
 * changeColumn "username" on table "Users"
 * changeColumn "username" on table "Users"
 * changeColumn "username" on table "Users"
 * changeColumn "email" on table "Users"
 * changeColumn "username" on table "Users"
 *
 **/

var info = {
    "revision": 5,
    "name": "add-len-msg-and-validations-all-tables",
    "created": "2018-03-24T14:12:53.936Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "changeColumn",
        params: [
            "Users",
            "lastName",
            {
                "type": Sequelize.STRING,
                "validate": {
                    "len": {
                        "args": [3, 25],
                        "msg": "Invalid last name! Password must be more than 3 and less than 25 characters!"
                    }
                },
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Answers",
            "answerContent",
            {
                "type": Sequelize.TEXT,
                "validate": {
                    "len": {
                        "args": [3, 100],
                        "msg": "Invalid Answer content! It must be more than 3 and less than 100 characters!"
                    }
                },
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Posts",
            "content",
            {
                "type": Sequelize.TEXT,
                "validate": {
                    "len": {
                        "args": [3, 100],
                        "msg": "Invalid Post content! It must be more than 3 and less than 100 characters!"
                    }
                },
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Posts",
            "title",
            {
                "type": Sequelize.STRING,
                "validate": {
                    "len": {
                        "args": [3, 25],
                        "msg": "Invalid Post title! It must be more than 3 and less than 25 characters!"
                    }
                },
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Threads",
            "title",
            {
                "type": Sequelize.STRING,
                "validate": {
                    "len": {
                        "args": [3, 25],
                        "msg": "Invalid answer title! It must be more than 3 and less than 25 characters!"
                    }
                },
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "userRoles",
            "name",
            {
                "type": Sequelize.STRING,
                "validate": {
                    "len": {
                        "args": [3, 10],
                        "msg": "Invalid User role! It must be more than 3 and less than 10 characters!"
                    }
                },
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Users",
            "firstName",
            {
                "type": Sequelize.STRING,
                "validate": {
                    "len": {
                        "args": [3, 25],
                        "msg": "Invalid first name! It must be more than 3 and less than 25 characters!"
                    }
                },
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Categories",
            "catName",
            {
                "type": Sequelize.STRING,
                "validate": {
                    "len": {
                        "args": [3, 25],
                        "msg": "Invalid Category name! It must be more than 3 and less than 100 characters!"
                    }
                },
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Users",
            "password",
            {
                "type": Sequelize.STRING,
                "validate": {
                    "len": {
                        "args": [6, 25],
                        "msg": "Invalid password! Password must be more than 6 and less than 25 characters!"
                    }
                },
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Users",
            "username",
            {
                "type": Sequelize.STRING,
                "unique": {
                    "args": true,
                    "msg": "User name already in use!"
                },
                "validate": {
                    "len": {
                        "args": [3, 25],
                        "msg": "Invalid username! Username must be more than 3 and less than 25 characters!"
                    }
                },
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Users",
            "username",
            {
                "type": Sequelize.STRING,
                "unique": {
                    "args": true,
                    "msg": "User name already in use!"
                },
                "validate": {
                    "len": {
                        "args": [3, 25],
                        "msg": "Invalid username! Username must be more than 3 and less than 25 characters!"
                    }
                },
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Users",
            "username",
            {
                "type": Sequelize.STRING,
                "unique": {
                    "args": true,
                    "msg": "User name already in use!"
                },
                "validate": {
                    "len": {
                        "args": [3, 25],
                        "msg": "Invalid username! Username must be more than 3 and less than 25 characters!"
                    }
                },
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Users",
            "email",
            {
                "type": Sequelize.STRING,
                "unique": {
                    "args": true,
                    "msg": "Email address already in use!"
                },
                "validate": {
                    "isEmail": true
                },
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Users",
            "username",
            {
                "type": Sequelize.STRING,
                "unique": {
                    "args": true,
                    "msg": "User name already in use!"
                },
                "validate": {
                    "len": {
                        "args": [3, 25],
                        "msg": "Invalid username! Username must be more than 3 and less than 25 characters!"
                    }
                },
                "allowNull": false
            }
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
