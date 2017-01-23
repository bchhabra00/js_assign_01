let A=[];
let myarr=process.argv;
let mealcost=A.push(Number(myarr[2]));
let  tippercent=A.push(Number(myarr[3]));
let tipAmount=myarr[3]/(100)*myarr[2];
const totalowing= Number(myarr[2])+ tipAmount;
console.log(totalowing);

