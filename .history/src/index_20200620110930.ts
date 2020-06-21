import * as mysql from 'mysql'

class MySql {
    private host: string
    private user: string
    private password: string
    private connection: mysql.Connection
    constructor( host: string, user: string, password: string, connection: mysql.Connection){
        this.host = host
        this.password = password
        this.user = user
        this.connection = connection
    }

    query(query: string, params?: any[]) {
        return new Promise((resolve, reject) => {
            if(params !== null && params !== undefined && params.length > 0) {
                this.connection.query(query, params, (err: mysql.MysqlError | null, result: any) => {
                    if(err) {
                        reject(err.message)
                    } else {
                        resolve(result)
                    }
                })
            } else {
                this.connection.query(query, (err: mysql.MysqlError | null, result: any) => {
                    if(err) {
                        reject(err.message)
                    } else {
                        resolve(result)
                    }
                })
            }
        })
    }

}


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
