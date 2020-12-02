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
    var r = new RegExp(matches[3], 'g');
    var occurences = matches[4].match(r);
    varcount = 0;
    if (!occurences) {
        count = 0
    } else {
        count = occurences.length
    }
    if (count >= matches[1] && count <= matches[2]) {
        resultCounter++;
    }
})

rl.on('close', () => {
    console.log(resultCounter);
});