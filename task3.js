let A=[];
const B=process.argv;
A.push(Number(B[2]));
A.push(Number(B[3]));
console.log(A);
let Sum=(Number(B[2]) +Number(B[3]));
if(Sum<10)
{
    console.log("less than 10");
} 
else if(Sum>10 && Sum<100)
{
    console.log("greater than 10 or less than 100");
}
else if(Sum>100 && Sum<1000)
{
    console.log("greater than 100 or less than 1000");
}
else
{
    console.log("other");
}