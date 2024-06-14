let x=15000,y;
function recur(x){
   

    if(x==1000)
        return x;
    else {
       
        console.log("x= "+x);
        y=x;
        x++;
        recur(x);
    }
   
}
try{
    recur(x);
}
catch(err){
    console.log(err);
    console.log("Max Number before the stack overflow: "+y);
}

