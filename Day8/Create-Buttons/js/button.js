var myvar=0;
function myHTML(){
    let k = document.getElementById('btn').innerHTML=myvar++;
    console.log(k);
}
window.onload=myHTML;