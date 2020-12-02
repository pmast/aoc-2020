var readline = require('readline');
var pattern = /(\d+)-(\d+) (\w): (\w+)/i;
var resultCounter = 0;

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
    var matches = line.match(pattern);

    var a = matches[4][matches[1]-1] == matches[3];
    var b = matches[4][matches[2]-1] == matches[3];
    if (a + b == 1) {
        resultCounter++;
    }
})

rl.on('close', () => {
    console.log(resultCounter);
});