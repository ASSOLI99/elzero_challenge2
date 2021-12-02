let a= 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;
console.log(Math.trunc(Math.min(a,b,c,d)));
console.log(Math.pow(d,0)*Math.pow(a,2));
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(Math.ceil(d));
console.log(Math.trunc(d));
console.log(parseFloat(Math.floor(b)/Math.ceil(d)).toFixed(2));
console.log(Math.ceil(Math.floor(b)/Math.ceil(d)));


