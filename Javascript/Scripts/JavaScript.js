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

//Closure
//Thanks to: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    console.log("This closure is provided by:", name); // use variable declared in the parent function
  }
  displayName();
}
init();

/* let & const
*************************************/
const MYCONSTANT = 1; //Constant
let bsVar = 10;     //Block Scope Variable, to declare scope only, unlike in C++


/* Objects:: Classes
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

//"Class" declaration
function Account(name, balance, number)
{
    this.name = name;
    this.balance = balance;
    this.number = number;
    this.deposit = function(value)
    {
        this.balance += value;
    }
    this.withdrawal = function(value)
    {
        this.balance -= value;
    }
}

var account3 = new Account("Ernesto A. Eusebio", 0.0, 0000112);

console.log(account3);
account3.deposit(1000);
account3.withdrawal(200);
console.log(account3);

var courses = [account, account2, account3];

console.log(courses);

/*DOM Objects
*************************/

//Classes
console.log(document.body);
console.log(document.title);
console.log(document.URL);
console.log(document.querySelector("#tabs a"));
console.log(document.querySelectorAll("#tabs a"));

console.log(document.querySelector("#tabs"));
document.querySelector("#tabs").classList.add("newClass");
console.log(document.querySelector(".newClass"));

//Attributes
const BASICSELEMENT = document.querySelector("#tabs a");
console.log(BASICSELEMENT.attributes)

if(BASICSELEMENT.hasAttribute("class"))
{
    console.log("Basics element classes: " + BASICSELEMENT.getAttribute("class"));
}
else
{
    BASICSELEMENT.setAttribute("class", "simpleTab");
    console.log("New class added: " + BASICSELEMENT.getAttribute("class"));
}

console.log(BASICSELEMENT.attributes)

//Adding DOM elements, old school (mass support)
const HEADER = document.querySelector("h1");
console.log(HEADER);
var subTitle = "About this HTML";
var titleElement = document.createElement("h2");
var subTitleText = document.createTextNode(subTitle);
//console.log(subTitleElement);
titleElement.appendChild(subTitleText);
HEADER.parentNode.insertBefore(titleElement, HEADER.nextSibling);

/* Inline CSS
************************/

//Background-color translates to backgroundColor property
//This is all inlined CSS

document.querySelector("h1").style.backgroundColor = "darkcyan";
document.querySelector("h1").style.color = "#0FF";

document.querySelector("h2").style.cssText = "color: #0FF; background-color: gray;";

document.querySelector("p").setAttribute("style", "padding: 1em; font-weight: 700;")


/* DOM Events
*******************************************/

var tabLinks;
var tabPanels;

window.onload = function()
{
  tabLinks = document.querySelectorAll("#tabs li");

  tabPanels = document.querySelectorAll("#containers section");

  //First one selected
  displayPanel(tabLinks[0]);

  for(var i = 0; i < tabLinks.length; i++)
  {
      tabLinks[i].onclick = function()
      {
          displayPanel(this);
          return false;
      }

      tabLinks[i].onfocus = function()
      {
          displayPanel(this);
          return false;
      }
  }
}

function displayPanel(tabClicked)
{
  for(var i = 0; i < tabLinks.length; i++)
      {
          if(tabLinks[i] == tabClicked)
          {
              tabLinks[i].classList.add("active");
              tabPanels[i].style.display = "block";
          }
          else
          {
              tabLinks[i].classList.remove("active");
              tabPanels[i].style.display = "none";
          }
      }
}

/* Loops
***************************************/

//For, while and do-while loops are C-based.
//Break and Continue are also available.

/* Debugging Notes
************************/
//1. Console functions are great to debug, check them out.
//2. Breakpoint debugging can be located in the "Sources" tab on browser tools.
//3. JSLint and JSHint help clean up code.

/* Useful items
*************************/
var arrowFunc = (sum1,sum2) => sum2 * sum1;
console.log("Result is:",arrowFunc(2,4));







