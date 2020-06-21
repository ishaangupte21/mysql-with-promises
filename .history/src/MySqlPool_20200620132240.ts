import * as mysql from 'mysql'

export default class MySqlPool {
    private limit: number
    private host: string
    private user: string
    private password: string
    private connection: mysql.Connection
    constructor(limit: number, host: string, user: string, password: string, connection: mysql.Connection){
        this.host = host
        this.password = password
        this.user = user
        this.connection = connection
        this.limit = limit
    }
}