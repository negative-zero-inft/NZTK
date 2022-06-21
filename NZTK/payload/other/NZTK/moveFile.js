module.exports = (file, destination, app, user, cb) =>{

    const NZTK = require('../NZTK')
    const nztk = new NZTK(app, user)
    const fs = require('fs')

    fs.rename(file, destination, (e) =>{

        if(!e) nztk.log.success(`moved ${file} to ${destination}`, 1, 'move')
        cb(e)
    })
}