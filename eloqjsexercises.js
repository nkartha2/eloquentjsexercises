//////////////////////////eloquent JS exercises

///////////////////////////////////////////////////////////////CHAPTER 2:PROGRAM STRUCTURE//////////////////////////////
/////////////////////////exercise 1 : triangle looping 

var triangle ='';
for(var i=0; i<8; i+=1){
  triangle+='#';
  console.log(triangle);
}

for(var line = '#'; line.length<8; line+='#'){
  console.log(line);
}

/////////////////////////exercise 2 : fizzbuzz
for(var bottles=0; bottles<101;bottles+=1){
  if(bottles % 3===0 && bottles % 5===0){
    console.log('FizzBuzz');
  }else if(bottles % 5===0){
  console.log('Buzz');
  }else if( bottles % 3===0 ){
    console.log('Fizz');
  }else{
    console.log(bottles);
  }
}

///////////////////////////////////////////////////////////////CHAPTER 3: FUNCTIONS//////////////////////////////////////////////////////////// 
/////////////////////////exercise 1 : minimum 
//parameters should be a range 
function min(x,y){
  //return the minimum number 
	if(x>y){
		return y;
	}else{
		return x;
	}
}

/////////////////////////exercise 2 : recursion
///parameter should be a number 
function isEven(n){
  ///number is equal to 0, number is even
  if(n===0){
    return true;
     ///number is equal to 1, number is odd
  }else if(n===1){
    return false;
    ///number is less than 0, run isEven +2 to see if number will end up at 0 or 1
  }else if(n<0){
    return isEven(n+2)
      ///if number not 0 or 1, run isEven -2 to see if number will end up at 0 or 1
  }else
    return isEven(n-2);
}

console.log(isEven(78));

/////////////////////////exercise 3a : beans
var charPos;
////parameter is a string
function countBs(x){
  var score=0;
  ////the final position of the string is length - 1
	for(i=0; i<x.length; i+=1){
	    ////loop through each position of the string
		  charPos= x.charAt(i);
        if(charPos==='B'){
             ////increase score if there is a capital B
		 score+=1;
        }
	}
  return score;
}

console.log(countBs('BBC'));

/////////////////////////exercise 3b: beans
/////parameters are two strings: x = total string; y= character/letter within string
function countChar(x,y){
  var score=0;
	for(i=0; i<x.length; i+=1){
		  charPos= x.charAt(i);
        if(charPos===y){
		 score+=1;
        }
	}
  return score;
}

console.log(countChar("kakkerlak", "k"));

///////////////////////////////////////////////////////////////CHAPTER 4: DATA STRUCTURES: OBJECTS & ARRAYS//////////////////////////////
/////////////////////////exercise 1 : Sum of a Range

/////create an array with a range of numbers
var range=[];
function createRange(start,end){
  for(var i=start; i<=end; i+=1){
    range.push(i);
  }
  return range; 
}
console.log(createRange(0,10));

/////get the sum of the array called range
function sumRange(range){
  var sum= 0 ;
  for(var i=0; i<=range.length-1; i+=1){
	  sum+= range[i];
  }
  return sum;
}

console.log(sumRange(range));

/////////////////////////exercise 1 BONUS exercise: Sum of a Range 

/////create an array with a range of numbers that increments according to the step parameter 
var rangeBonus=[]; 
function createRangebonus(start,end,step){
  ////if the range of numbers begins with a high number and ends with a low number (this is for negative increments)
  if(start>end){
    for(var i=start; i>=end; i+=step){
      rangeBonus.push(i);
   	 	}
  }else{
   	for(var i=start; i<=end; i+=step){
      rangeBonus.push(i);
  		}
  	}
  return rangeBonus; 
  }

console.log(createRangebonus(10,5,-1));
console.log('bonus range sum is '+ sumRange(rangeBonus));

/////////////////////////exercise 2: Reversing an array
function reverseArray(range){
  var rangeArray= [];
  for(var i=range.length-1; i>=0; i-=1){
    rangeArray.push(range[i]);
  }
	return rangeArray;
}

console.log(reverseArray(["A", "B", "C",'D']));
// → ["D", C", "B", "A"];


function reverseArrayInPlace(arrayrange){
  for(var i=0; i<Math.floor(arrayrange.length/2); i++){
    var tmp = arrayValue[i];
    var arrayPos= arrayrange.length-1-i;
    
    arrayValue[i]=arrayValue[arrayPos];
    arrayValue[arrayPos] = tmp;
    	}
  return arrayValue;
}

/* 
goal: 
vers1=[1,2,3,4,5]
vers2=[5,4,3,2,1]

problem with looping through once - why we need to loop through the first half of the array first 
av[0]=av[4] av=5
av[1]=av[3] av=4
av[2]=av[2] av=3
av[3]=av[1] av=4 - array no longer has the value of '2' saved - it has already been changed to 4
av[4]=av[0] av=5 - array no longer has the value of '1' saved - it has already been changed to 5
*/

var arrayValue = [1, 2, 3, 4, 5, 6, 7, 8];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

/////////////////////////exercise 3: A list

function arrayToList(arrayInput){
  var newList, 
      tmp;
  for(var i=arrayInput.length-1; i>=0; i-=1){
      tmp= arrayInput[i];
      newList={ value: tmp,
               rest: newList
                  }
        }
    return newList; 
      }

var newArray=[];
function listToArray(newList){
  // loop through properties within the list
  for (var myProperty in newList){
    ///if the property is equal to value 
    if(myProperty=== 'value'){
    // pull value from property value and store 
       var arrayValue = newList[myProperty];
    // add value to array  
      newArray.push(arrayValue);
      // if the property rest is an object
       if(typeof(newList['rest'])==='object'){
        // then perform the listToArray function on the object
         listToArray(newList['rest']);
        // if rest is undefined, then return the array
        }else if(newList['rest']===undefined){
          return newArray;
        }
    }
  }
  return newArray;
}

function prepend(plusValue, plusList){
  var comboList; 
    comboList= {value:plusValue,
              rest: plusList
              }
  return comboList;
}

//////////////////////this is my answer for the nth function but it does not work 
function nth(paramList, position){
  var returnValue;
  for(var i=0; i<=position; i+=1){
     for(var prop in paramList){
        returnValue=paramList[prop];
        console.log('prop '+ prop);
        console.log('returnValue '+ returnValue);
       if(typeof(paramList['rest'])==='object'&& position>0){
         nth(paramList['rest']);
       }else if(paramList['rest']===undefined){
         return undefined;
       }
     return returnValue;
     }
  }
}

//////////////////////this is the book's answer and my notes to understand it 

////creating a function named nth accepting the parameters list and n 
////EXAMPLE: function nth({value:10, rest{value:20, rest{value:30, rest:undefined}}}, 1){
function nth(list, n) {
////if the list parameter is null or undefined then return undefined 
////EXAMPLE: list is not undefined/null
  if (!list) {
    return undefined;
////if n is 0 then return the value of the value property within the list 
////this is what is returned as the final value for the given position if it is not undefined/null
////EXAMPLE: n is not 0 
  } else if (n == 0) {
    return list.value;
////this is recursion - the function is called within the function 
////if n is not 0 and not undefined/null, then  
  } else {
////the parameter list is updated to the list within the rest property and n is reduced by 1. 
////the function will be called again here until n===0
////EXAMPLE: now parameters are {value:20, rest{..}}, 0 and run through the nth function. then n is 0 and list.value=20 which is what is returned 
    return nth(list.rest, n - 1);
  }
}

///////////////////////////////////////////////////////////////CHAPTER 5: Higher-Order Functions//////////////////////////////
/////////////////////////exercise 1 : Flattening
var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce(function(a,b){
		arrays= a.concat(b);
  return arrays;
}));
// → [1, 2, 3, 4, 5, 6]
