const config = require('../Config')
const Eris = require('eris')

class Creeper {


    constructor() {
        this._config = config

        this._client = new Eris(this._config.token,{
            getAllUsers: false,
            autoreconnect: true
        })

        this._status = this._config.status

        this._client.on('ready', () => {
            this._client.editStatus('idle',
                { name: `${this._status.status1} ${this._config.prefix}${this._status.status2}`, type: 3 })

            console.info(`${this._client.user.username} is ready`) })

        this._client.connect()
            .then(r => {})
    }
}

module.exports = Creeper;