import * as mysql from 'mysql'

export default class MySqlPoolCluster {
    private cluster: mysql.PoolCluster

    constructor(cluster: mysql.PoolCluster) {
        this.cluster = cluster
    }

    
}