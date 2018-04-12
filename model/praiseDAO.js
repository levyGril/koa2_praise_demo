/**
 * Created by levy on 2018/4/10.
 */
const mysql = require('mysql');

const config = require('../config/default');

const pool  = mysql.createPool({
    host     : config.database.HOST,
    user     : config.database.USERNAME,
    password : config.database.PASSWORD,
    database : config.database.DATABASE,
    port     : config.database.PORT
});

let query = ( sql, values ) => {

    return new Promise(( resolve, reject ) => {
        pool.getConnection( (err, connection) => {
            if (err) {
                reject( err )
            } else {
                connection.query(sql, values, ( err, rows) => {
                    if ( err ) {
                        reject( err )
                    } else {
                        resolve( rows )
                    }
                    connection.release()
                })
            }
        })
    })

};


// INSERT INTO `PRAISE_COUNT`(`ID`, `PRAISE_COUNT`, `CREATE_TIME`) VALUES ([value-1],[value-2],[value-3])
let insertData =  ( value ) => {
    let _sql = "insert into PRAISE_COUNT set PRAISE_COUNT=?";
    return query( _sql, value )
};

module.exports = {
    query,
    insertData
};