var shell = require("shelljs");

const start = 83000
const end = 87000
const outPutFile = 'output.txt'

const url = ``
const curl = ``

let i = start
let loop = () => {
    setTimeout(() => {
        let index = i
        console.log(url + index)
        shell.exec(curl + index, (code, stdout, stderr) => {
            try {
                let json = JSON.parse(stdout)
                if (json && json.status === 1) {
                    shell.exec(`echo '${url}${index}\n' >> ${outPutFile}`)
                }
            } catch (e) {

            }
        });
        if (i < end) {
            i++
            console.log()
            setTimeout(loop, 50)
        }
    }, 50)
}

loop()
