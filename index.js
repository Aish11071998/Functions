// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;



var p=(addition(10,20));
console.log(p)
var q=(subtraction(100,50));
console.log(q)
var r=multiplication(10,70);
console.log(r)
var s=division(30,3);
console.log(s)
var t=modulo(2,4);
console.log(t)
var u=power(2,3)
console.log(u)
var v=comparestring('34567','34567')
console.log(v)
var w=comparenumber('1234567','sdfghj')
console.log(w)
var x=comparevalues('4567',4567)
console.log(x)
var y=checkvowels('u')
console.log(y)
var z=checkprime(3)
console.log(z)
var aa=checkgrade(90)
console.log(aa)
function addition(x,y)
{
  let a=x+y;
  return a;
}
function subtraction(x,y)
{
  let b=x-y;
  return b;
}
function multiplication(x,y)
{
  let c=x*y;
  return c;
}

function division(x,y)
{
  let d=x/y;
  return d; 
}
function modulo(x,y)
{
  let e=x%y;
  return e;
}
function power(x,y)
{
  let f=x**y;
  return f;
}

function comparestring(x,y)//func to compare 2 strings
{
  return (x===y)?(true):(false)
}
function comparenumber(x,y)//func to compare numbers
{
  return x===y?(rrue):(false)
}
function comparevalues(x,y)//func to compare the datatype of values
{
  return (typeof(x)===typeof(y))?(true):(false)
  
}
function checkvowels(x)//func to cheak prime
{
  if(x=='a' || x=='e' || x=='i' ||x=='o' || x=='u')
  {
    return 'vowel'
  }
  else
  {
    return 'not a vowel'
  }
}
function checkprime(x)//func to cheak prime
{
 
  let n
  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }
  else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}
function checkgrade(x)//func to cheak grade
{
  if(x<=49)
  return 'average'
  else if(x>=50 && x<=79)
  return 'good'
  else if(x>=80 && x<=100)
  return 'excellent'
}


