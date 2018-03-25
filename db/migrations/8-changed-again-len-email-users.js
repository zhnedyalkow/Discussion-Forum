'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "email" on table "Users"
 * changeColumn "email" on table "Users"
 *
 **/

var info = {
    "revision": 8,
    "name": "changed-again-len-email-users",
    "created": "2018-03-24T14:34:31.736Z",
    "comment": ""
};

var migrationCommands = [{
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
                    "isEmail": true,
                    "len": {
                        "args": [10, 25],
                        "msg": "Invalid email! It must contains more than 10 characters (e.g. wild.wezyr@gmail.com)!"
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
                    "isEmail": true,
                    "len": {
                        "args": [10, 25],
                        "msg": "Invalid email! It must contains more than 10 characters (e.g. wild.wezyr@gmail.com)!"
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
