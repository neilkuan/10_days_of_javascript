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
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let oList =  s.split('')
    let mList=[];
    let cList=[];
    oList.forEach((v) => {
        switch (v) {
            case 'a' :{
                mList.push(v)
                break;    
            }
            case 'e':{
                mList.push(v)
                break;    
            }
            case 'i':{
                mList.push(v)
                break;    
            }
            case 'o':{
                mList.push(v)
                break;    
            }
            case 'u':{
                mList.push(v)
                break;    
            }
            default:
            cList.push(v)
        }
        
    });
    mList.forEach((v)=> {console.log(v)});
    cList.forEach((v)=> {console.log(v)});
    
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}