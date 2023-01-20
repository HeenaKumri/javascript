let score = 33 // number output
//let score1 = null // 0 output
//let score1 = "33" // string output
//let score1= "33abc" // number NaN output
//let score1 = undefined //NaN output
//let score1 = true // 1 output
let score1 = "Heena" // NaN output



//console.log(typeof score); //number
//console.log(typeof(score));

//console.log(typeof score1); //string
//console.log(typeof(score1))

let valueInNumber = Number(score1)
//console.log(typeof valueInNumber );
//console.log(valueInNumber);

//************************* Operations*********************** */
let value = 3
let negValue = -value
//console.log(negValue);


//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**3);
//console.log(2/2);
//console.log(2%2);

/*let str1 ="hello" // two string Add
let str2 =" heena"
let str3 = str1 + str2
console.log(str3);*/ //output hello heena

//conversation start
//console.log("1"+2);// problem ayga//output 12
//console.log(1+"2"); // problem ayga//output 12
//console.log("1"+ 2 + 2);//output 122
//console.log(1+ 2 + "2");//output 32

//example
//console.log(3 + 4 * 5 % 3) Ronge formatting
//console.log((3+4)* 5 % 3) right formatting

//tiricki converstion example
//console.log(true);// output true
//console.log(+true);// output 1 //rong formatting
//console.log(+"");// output 0 // rong formatting

let num1, num2, num3
num1 = num2 = num3 = 2+2

/*let gameCounter = 100 // output 101
gameCounter++;
console.log(gameCounter);*/

let gameCounter = 100 // output 101
++gameCounter;
//console.log(gameCounter);


const principal = 2000;//P is the principal amount.
const time = 5;//R is the annual interest rate.
const rate = .08;//t is the time the money is invested or borrowed for.
const n = 12;//n is the number of times that interest is compounded per unit t, for example if interest is compounded monthly and t is in years then the value of n would be 12. If interest is compounded quarterly and t is in years then the value of n would be 4.
const compoundInterest = (p, t, r, n) => {
   const amount = p * (Math.pow((1 + (r / n)), (n * t)));
   const interest = amount - p;
   return interest;
};
console.log(compoundInterest(principal, time, rate, n));