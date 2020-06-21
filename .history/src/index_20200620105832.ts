import * as mysql from 'mysql'

class MySql {
    private host: string
    private user: string
    private password: string
    constructor( host: string, user: string, password: string){
        this.host = host
        this.password = password
        this.user = user
    }

    query() {
        return new Promise((resolve, reject) => {
            
        })
    }

}


export const connect = (host: 'localhost' | string, user: string, password: string) => new Promise((resolve, reject) => {
    const con = mysql.createConnection({host, user, password})

    con.connect((err: Error) => {
        if(err) {
            reject(err.message)
        } else {
            resolve(new MySql(host, user, password))
        }
    })
})
