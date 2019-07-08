//var date = new Date();
//document.body.innerHTML = "<h1> Today is:" + date +"</h1>";
//document.body.innerHTML = "<h1> I have hacked this sample in the name of GUEGUEGUEU!!</h1>";


/* Variables & Declarations
*************************************/

var a, b;
a = 1;
b = 2;

var C = 5;
var A = 3, B = 4;
var sum = A + B + C + a + b;

var integer = 4;
var string = "This is a string";
var aBool = true;
var aNull = null;
var undef;
// Symbol?

console.log("The sum total is: " + sum);
console.log(typeof integer, typeof string, typeof aBool, typeof aNull, typeof undef);
// Arithmetic operators are the same as in C-Based languages

// Conditional statements are the same as C-Based languages, including ternary x ? a : b;
// There are extra situations in js however
a = 5;
var notInt = "5";

console.log("is 5 the same as \"5\"?");
a == notInt ? console.log("== was used") : console.log("=== was used");     //Soft equality
a === notInt ? console.log("== was used") : console.log("=== was used");    //Hard equality

/* Arrays
*************************************/

var intArray = [1, 2, 3, 4, 5];
var stringArray = ["One", "Two", "Three", "Four"];
var mixedArray = [true, "Two", 3, null];
var intStringArray = [intArray, stringArray];

console.log(intArray + "\n" + stringArray + "\n" + mixedArray + "\n" + intStringArray);
console.log("Array used: " + intArray);
console.log("Length: " + intArray.length);
console.log("Reversed: " + intArray.reverse());
console.log("Shifted: " + intArray.shift());                        //shift removes the first item and returns it.
console.log("Now: " + intArray);
console.log("Unshifting value \"A\": " + intArray.unshift("A"));    //unshift returns the new length
console.log("Now: " + intArray);
console.log("Pop: " + intArray.pop());                              //pop is like shift, but at the end
console.log("Push: " + intArray.push("B", "C"));
console.log("Now: " + intArray);
console.log("Splice: " + intArray.splice(1,3));
console.log("Now: " + intArray);


var letterArray = intArray.slice();         //Copy an array
intArray = [1, 2, 3];
console.log("Letters: " + letterArray);
console.log("Integers: " + intArray);
//More available... see docs on web links.


/*Functions
*************************************/

//Named, Anonymous & Immediately Invoked Function Expressions
var multiplied = multiply(a, b);
console.log("Returned = " + multiplied);
//Named
function multiply(a,b)
{
    var result = a * b;
    console.log(result);
    return result;
}

//Anonymous
//Since Anonymous variables are contained within a variable, it must be called after declaration
var anonymousDivide = function(a, b) 
{
    var result = a/b;
    return result;
}

console.log("Returned = " + anonymousDivide(a,b))

//I.I.F.E. (Immediately Invoked Function Expressions)
var debug = (function()
{
    var result = a - b;
    console.log("a - b = " + result);
})()

/* let & const
*************************************/
const MYCONSTANT = 1; //Constant
let bsVar = 10;     //Block Scope Variable, to declare scope only, unlike in C++


/* Objects
************************************/

var account = new Object();

account.name = "Ernesto Eusebio";
account.balance = -14.99;
account.number = 0012345;
account.deposit = function(a)
{
    if(Number.isInteger(a))
        account.balance += a;
    else
        console.log("Error, non-currency deposit");
}

// OR

var account2 = 
    {
        name: "Ernesto Eusebio",
        balance: 1000000,
        number: 0012346,
        withdraw: function(a)
        {
            if(Number.isInteger(a))
                account2.balance -= a;
            else
                console.log("Error, non-currency withdrawal");
                
        }
    }

console.log(account);
console.log(account2);
account.deposit(100)
console.log("New Balance of Account1 is: " + account.balance);
account2.withdraw(950000);
console.log("New Balance of Account2 is: " + account2.balance);



