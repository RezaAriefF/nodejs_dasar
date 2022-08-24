const { saveData } = require('./todo-app')
const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const util = require('node:util');
const question = util.promisify(rl.question).bind(rl);

const main = async () => {
    try {
        const nama = await question('Masukan Nama Anda = ');
        const nim = await question('Maskan nim Anda = ');
        const umur = await question('Masukan umur Anda = ');

        const mhs = { name: nama, nim: nim, umur: umur }
        if (mhs.name.trim().length > 0 && mhs.nim.trim().length > 0 && mhs.umur.trim().length > 0) {

            saveData(mhs)
        }else {
            console.log('Tidak Boleh Ada Yang Kosong Jon..')
            return false
        }
    } catch (err) {
        console.error('Question rejected', err);
    } finally {
        rl.close()
    }
}

main()