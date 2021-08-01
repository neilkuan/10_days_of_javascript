'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    // Write your code here
    switch(true){
case /^[aeiou]{1}.*/i.test(s):
letter = "A"
break;
case /^[bcdfg]{1}.*/i.test(s):
letter = "B"
break;
case /^[hjklm]{1}.*/i.test(s):
letter = "C"
break;
case /^[npqrstvwxyz]{1}.*/i.test(s):
letter = "D"
break;
}
return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}