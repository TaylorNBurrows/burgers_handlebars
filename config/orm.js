var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
    selectAll: (table) => {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], 
            (err,result) => {
                if(err) throw err;
                console.log(result);
            });

    },

    insertOne: (table,colName,devouredCol,burgerName, devouredVal) => {
        let queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?);"
        connection.query(queryString, [table,colName,devouredCol,burgerName,devouredVal], (err,result) => {
            if(err) throw err;
            console.log(result);
        });
    },

    updateOne: (table, colName, colValue, burgerID) => {
        let queryString = "UPDATE ?? SET ?? = ? WHERE id = ?"
        connection.query(queryString, [table, colName,colValue,burgerID], (err,result) => {
            if(err) throw err;
            console.log(result);
        })
    }
};

module.exports = orm;
