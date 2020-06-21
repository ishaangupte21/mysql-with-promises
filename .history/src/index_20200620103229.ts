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

}


export const connect = (host: 'localhost' | string, user: string, password: string) => new Promise((resolve, reject) => {

})
