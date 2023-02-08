const axios = require('axios')
var Table = require('cli-table');
const jsonToTable = require('json-to-table');
const createCsvWriter = require('csv-writer').createArrayCsvWriter;


axios.get('http://files.cod3r.com.br/curso-js/funcionarios.json').then(res => {
   const funcionario = res.data
   const funcTable = jsonToTable([funcionario[0],funcionario[1]])

   var table = new Table({
      chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
             , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
             , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
             , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
    });
    
    table.push(
        funcTable[0]
      , funcTable[1]
      , funcTable[2]
    );
    console.log(table.toString())


   const csvWriter = createCsvWriter({
      header: funcTable[0],
      path: './file.csv'
   });

   const records = [
      funcTable[1],
      funcTable[2]
   ];

   csvWriter.writeRecords(records)       // returns a promise
      .then(() => {
         console.log('...Done');
      });
   })

