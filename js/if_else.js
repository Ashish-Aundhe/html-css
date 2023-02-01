let a= prompt("hey whats your age");
a=number.paraseInt(a); //converting the strong to a number
if(a<0){
    alert("this is invalid age");
}
else if(a<9){
    alert("you are a kid and you cannot even think driving");

}
 else if(a<18 && a>=9){
    alert("you are a kid and you can think of driving after 18")
 }
 else{
    alert("this is invalis age")
 }