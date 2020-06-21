import * as mysql from 'mysql'
import MySql from './MySql'


export const connect = (host: 'localhost' | string, user: string, password: string) => new Promise((resolve, reject) => {
    const con = mysql.createConnection({host, user, password})

    con.connect((err: mysql.MysqlError) => {
        if(err) {
            reject(err.message)
        } else {
            resolve(new MySql(host, user, password, con))
        }
    })
})
