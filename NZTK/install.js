// data about the package

const name = 'NZTK'
const desc = 'toolkit for negative zero apps'
const version = '0.0.1'

// the function that actually runs

const exec = (MSPMStuff, cb) =>{

    // any libs

    const NZTK = require('../../../other/NZTK')
    const nztk = new NZTK(`${name} installer`, MSPMStuff.users.current)

    // any configs for some reason

    // all of your code

    nztk.copy(`./SHELL/temp/MSPM/${name}/payload/other/NZTK.js`, `./SHELL/other/NZTK.js`, (e) =>{

        if(e) return cb({name: name, exitCode: 1, value: e})
        nztk.copy(`./SHELL/temp/MSPM/${name}/payload/other/NZTK`, `./SHELL/other/NZTK`, (e) =>{

            if(e) return cb({name: name, exitCode: 1, value: e})
            return cb({name: name, exitCode: 0, value: 'installed everything'})
        })
    })
}

// export the installer

module.exports = {

    name: name,
    desc: desc,
    version: version,
    run: exec
}
