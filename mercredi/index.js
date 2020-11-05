async function main() {
    const readFileAsync = promisify(fs.readFile)

        readFileAsync('test.js')
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.error(err)
        })
}


/* Student part */
const fs = require('fs')

function readFileAsync(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
}

function promisify(func){
    return function (...args){
        return new Promise(((resolve, reject) => {
            func(...args, (err,data) => {
                if (err){
                    reject(err)
                }
                resolve(data)
            })
        }))
    }
}

main()
