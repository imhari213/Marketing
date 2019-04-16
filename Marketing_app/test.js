
function factorial(n) {
    var j=1;
    var i;
for(i=1;i<=n;i++){
   j = j*i;
}
return j;
}

async function palindrome(strng){
    var l = strng.length
    var n = '';
    console.log(l);
    for(i=l-1;i>=0;i--){
         console.log(strng[i]);
         n = n + strng[i];
    }
    return n;
}



var n = async()=>{

    var r = await palindrome("hari");
    if(r == "irah"){
        console.log("palindrome");
    }
} 

n();
