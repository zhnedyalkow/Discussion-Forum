'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * dropTable "Comments"
 *
 **/

var info = {
    "revision": 4,
    "name": "removed-comments-table",
    "created": "2018-03-24T13:50:09.727Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "dropTable",
    params: ["Comments"]
}];

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
