let a=1;
let b=3;
let c=2;

let ans = largest(a , b , c);
console.log(ans);
function largest(a, b, c){
    if(a>b && b>c){
        console.log(a);
    }else if(b>a && b>c){
        console.log(b);
    }else{
        console.log(c);
    }
}
  