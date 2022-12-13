let num=Math.floor((Math.random()*10));
let a;
a=prompt("Enter a number:");
if(a<num)
  {
    console.log("smaller");
  }
  else if(a>num)
  {
    console.log("greater");
  }
while(num!=a){
  a=prompt("Enter a number:");
  if(a<num)
  {
    console.log("smaller");
  }
  else if(a>num)
  {
    console.log("greater");
  }
}

console.log("Congrats You win.");
