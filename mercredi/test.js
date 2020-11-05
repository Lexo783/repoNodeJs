async function main() {
    readFileAsync('03test.js')
        .then(res => {
            console.log(res.toString())
        })
        .catch(err => {
            console.log('REJECTED')
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

main()
