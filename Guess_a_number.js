let num=Math.floor((Math.random()*100));
let a;
a=prompt("Enter a number:");
if(a<num)
  {
    console.log("Smaller.");
  }
  else if(a>num)
  {
    console.log("Greater");
  }
while(num!=a){
  a=prompt("Enter a number:");
  if(a<num)
  {
    console.log("Smaller");
  }
  else if(a>num)
  {
    console.log("Greater");
  }
}

console.log("Congrats You win.");