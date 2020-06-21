import * as mysql from 'mysql'
import MySql from './MySql'

export default class MySqlURL {
    private connection: mysql.Connection
    constructor(connection: mysql.Connection) {
       this.connection = connection
    }

    query() {
        
    }
}