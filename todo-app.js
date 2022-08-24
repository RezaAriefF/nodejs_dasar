const fs = require('fs')
//import dan inisialisasi
const directPath = './data/'
const pathJson = directPath+'/data.json';

// cek folder jika ada dibuat jika tidak lanjut
if(!fs.existsSync(directPath)){
    fs.mkdirSync(directPath);
  } 
  
  if(!fs.existsSync(pathJson)) {
    fs.writeFileSync(pathJson, '[]', 'utf-8');
  }
  
// load data.json
const loadTodos = () => {
    // membaca file json (./data/data.json)
    const fileBuffer = fs.readFileSync(pathJson, 'utf-8');
    return todos = JSON.parse(fileBuffer);
  };  

  // Menyimpan Data
exports.saveData = (todo) => {
    loadTodos();
    // cek duplikat todo
    const dupname = todos.find(item => item.name === todo.name);
    const dupnim = todos.find(item => item.nim === todo.nim);
    if(dupname){
        console.log(`todo ${todo.name} sudah terdaftar silahkan gunakan todo lain!!`);
        return false;
        
    }else if(dupnim){
        console.log(`todo ${todo.nim} sudah terdaftar silahkan gunakan todo lain!!`);
        return false;
    }

    // menambah data yang pada variable json
  todos.push(todo);

  // menuliskan ke data.json
  fs.writeFile(pathJson, JSON.stringify(todos, null, 2), (err) => {
    if(err) throw err;
    console.log('\n===> data telah tersipman <===');
    console.table(todos);
});

// readline ditutup / berakhir
}
