import * as mysql from 'mysql'

export default class MySqlPool {
    private limit: number
    private host: string
    private user: string
    private password: string
    private pool: mysql.Pool
    constructor(limit: number, host: string, user: string, password: string, pool: mysql.Pool){
        this.host = host
        this.password = password
        this.user = user
        this.pool = pool
        this.limit = limit
    }

    public destroy() {
        this.connection.destroy()
    }
}