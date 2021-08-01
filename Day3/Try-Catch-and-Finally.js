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

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    let k =''
    try{
        let v = s.split('');
        for (let i=v.length -1; i>=0;i--){
            k += v[i] 
        }
    }catch (err){
        console.log(err.message)
        console.log(s)
    }finally{
        console.log(k)
    }
}


function main() {
    const s = eval(readLine());
    
    reverseString(s);
}