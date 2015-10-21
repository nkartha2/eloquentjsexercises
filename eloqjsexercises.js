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

/////////////////////////exercise 4: Deep Comparison 
//function takes x and y values
function deepEqual(x, y){
  //console.log('x '+x+'y '+y);
//if x equals y in value and typeof then return true
  if(x===y){
    return true;
//if x and y are both objects then
  }else if (typeof(x)==="object" && typeof(y)==="object"){
    // x = {here: "an", abhi: "neely"}
    // y = {here: "an", abhi: "neely"}
//for loop through the properties and values of x and y (property names and values should be the same if they are equal)
    for(var key in x) {
      x_value = x[key];
      y_value = y[key];
      //console.log('xvalue '+x_value +'yvalue '+ y_value);
////recursive function to see if the values inside the object are objects and equal and will return true and false
      return deepEqual(x_value, y_value);
    }
  } else {
    return false;
  }
}
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

///////////////////////////////////////////////////////////////CHAPTER 5: Higher-Order Functions//////////////////////////////
/////////////////////////exercise 1 : FLATTENING
var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce(function(a,b){
		arrays= a.concat(b);
  return arrays;
}));
// → [1, 2, 3, 4, 5, 6]

/////////////////////////exercise 2: MOTHER-CHILD AGE DIFFERENCE
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var diff=[];

for (var key in byName){
//evaluating year that person was born
 var childBorn=(byName[key]['born']);
 console.log('child '+childBorn);
 //evaluating mom's name 
 var keyMom = byName[key]['mother'];
 //if the mom is not undefined then 
 if(byName[keyMom]!==undefined){
 	//evalute using mom's name, the year mom was born 
      	var motherBorn=byName[keyMom]['born'];
   		console.log('mother '+ motherBorn);
   	//evalute the difference of the years child was born and mom was born 
   	//and store the differences into the variable diff which is an array
    	diff.push(childBorn-motherBorn);
  }
}

console.log(' diff '+ diff);

//use the average function to take the diff array 
//and reduce the array to one total number then divide by array's length 
console.log('average of mother-child age difference: '+average(diff));
//answer → 31.2

/////////////////////////exercise 2: MOTHER-CHILD AGE DIFFERENCE-----REWRITTEN WITH HIGH ORDER FUNCTIONS
///filter ancestry array   
var filteredAncestry = ancestry.filter(function(person){
  //console.log(person);
//to not include people with undefined mothers from the filteredAncestry array
  if(person['mother']!==null){
    return true;
  } else {
    return false;
  }
});

//used map method to get 
var diffAge= filteredAncestry.map(function(obj){
//birth year of person 
  var childBorn= obj['born'];
//mother's name
  var momName = obj['mother'];
//go through byName object to find mother's birth year only if that mother has an object 
  if(byName[momName]!==undefined){
   var momBorn= byName[momName]['born'];
//find the difference between person's birth year and mom's birthyear 
  	return childBorn- momBorn;
  }
});

///filter through diffAge 
var diffAgefiltered= diffAge.filter(function(diffval){
///to remove people with had an undefined birthyear 
  if(diffval===undefined){
    return false;
  }else{
    return true;
  }
});

console.log(diffAge);
///average of final diffAgefiltered array 
console.log('average of mother-child age difference: '+average(diffAgefiltered));
// → 31.2
/////////////////////////exercise 3: HISTORICAL LIFE EXPECTANCY 
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var centuries={};
for (var key in byName){
/////////year that the person died
	var diedYear=byName[key]['died'];
/////////year that the person was born
   	var bornYear= byName[key]['born'];
/////////century person is apart of 
   	var centPerPerson= Math.ceil(diedYear/100);
/////////person's age
   	var agePerPerson= diedYear-bornYear;
/////////if the object property of century is undefined
  if(centuries[centPerPerson]===undefined){
/////////then assign value of an empty an array
   centuries[centPerPerson]=[];
/////////add age to array
   centuries[centPerPerson].push(agePerPerson);
  }else{
/////////add age to array that is already defined 
    centuries[centPerPerson].push(agePerPerson);
  }
}

/////////run average function to average age per century 
console.log(average(centuries[20]));

/////////////////////////exercise 3:  HISTORICAL LIFE EXPECTANCY-----REWRITTEN WITH HIGH ORDER FUNCTIONS
var groupbyCentury={};

ancestry.forEach(function(person){
   var age= person['died']-person['born'];
  // console.log(age);
   var cent=Math.ceil(person['died']/100);
 	if(groupbyCentury[cent]===undefined){
/////////then assign value of an empty an array
   groupbyCentury[cent]=[];
/////////add age to array
   groupbyCentury[cent].push(age);
  }else{
/////////add age to array that is already defined 
    groupbyCentury[cent].push(age);
  }
});

for(var key in groupbyCentury){
  groupbyCentury[key]=average(groupbyCentury[key]);
}

console.log(groupbyCentury);
/////////////////////////exercise 4: EVERY AND THEN SOME

//function named every that accepts an array and function as arguments
function every(arrayArg,test){
//loop through the array 
  for(var i=0; i<arrayArg.length; i++){
//the array is accepted as an argument to the function argument (test)
//if the function evaluates to false within the loop then return false
    if(!test(arrayArg[i]))
       return false;
  		}
//if the array is looped through and never false, then return true 
   return true;
    }

//function named some that accepts an array and function as arguments
function some(arrayArg,test){
//loop through the array 
  for(var i=0; i<arrayArg.length; i++){
//if the function ever evaluates to true within the loop then return true
    if(test(arrayArg[i]))
       return true;
  		}
  //if the function never evaluates as true, then return false
   return false;
    }

//console.log(every([NaN, NaN, NaN], isNaN));
// → true
//console.log(every([NaN, NaN, 4], isNaN));
// → false
//console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false

///////////////////////////////////////////////////////////////CHAPTER 6: The Secret Life of Objects//////////////////////////////

/////////////////////////exercise 1: A VECTOR TYPE
function Vector(x,y){
  this.x=x;
  this.y=y;
}

Vector.prototype.plus= function(vector){
  this.x += vector.x;
  this.y +=	vector.y;
  return new Vector(this.x, this.y);
}

Vector.prototype.minus= function(vector){
  this.x-=vector.x;
  this.y-=vector.y;
  return new Vector(this.x, this.y);
}
	
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}

//getter 
//define property for Vector prototype called length 
Object.defineProperty(Vector.prototype, "length", {
///define get method using Pythagorean theorem to find the length of the vector 
	get:function(){return Math.sqrt(this.x * this.x + this.y * this.y);}
})

//test 
console.log(new Vector(3, 4).length);
// → 5

//example in book LAYING OUT A TABLE 

[
	['name','height', 'country']
	,['Kilimanjaro','5895','Tanzania']
	,['Everest','8848', 'Nepal']
	,['Mount Fuji','3776', 'Japan']
	,['Mont Blanc','4808', 'Italy/France']
	,['Vaalserberg','323', 'Netherlands']
	,['Denali', '6168', 'United States']
	,['Popocatepetl','5465','Mexico']
]
//function accepting rows argument
	//rows is an array of arrays where each array is a row
function rowHeights(rows) {
//map goes into the outer array, each inner array becomes "row" argument
  return rows.map(function(row) {
//it takes the values of the inner array
//reduce takes a callback function (runs on every value of the array) as an argument and 0 in this case 
	//the callback function takes arguments max & cell 
    return row.reduce(function(max, cell) {
 //returns the higher number between max
      //max = 0 at first
      //after one round, max= previous cell.minHeight - minHeight is a function previously defined
      //until one single value is returned which is the maximum cell height
      return Math.max(max, cell.minHeight());
    }, 0);
  });
}

//function accepting rows as argument
function colWidths(rows) {
////the underscore arg is not used
//colWidths builds up an array with one element for every column index
  return rows[0].map(function(_, i) {
////reduce rows 
    return rows.reduce(function(max, row) {
      return Math.max(max, row[i].minWidth());
    }, 0);
  });
}

//function to draw the tables taking rows array as argument 
function drawTable(rows) {
///max row height is saved to heights variable 
  var heights = rowHeights(rows);
///max width of colwidth saved to widths variable 
  var widths = colWidths(rows);
 //function drawLine that takes blocks and linenumber as arguments 
 	 //extracts lines that should appear next to each other from an array of blocks and joins them with a space 
 	 //character to create a one-character gap between the table’s columns.
 	function drawLine(blocks, lineNo) {
 	//first converts the cell objects in the row to blocks 
 	//blocks are arrays of strings representing the content of the cells, split by line 
    		return blocks.map(function(block) {
      		return block[lineNo];
      ///strings joined together with a space 
    		}).join(" ");
  	}
  	function drawRow(row, rowNum) {
    //The second call to map in drawRow builds up this output line by line by mapping over the lines in the 
    	//leftmost block and, for each of those, collecting a line that spans the full width of the table.
    		var blocks = row.map(function(cell, colNum) {
      		return cell.draw(widths[colNum], heights[rowNum]);
    		});
    	
    	return blocks[0].map(function(_, lineNo) {
      	return drawLine(blocks, lineNo);
    	}).join("\n");
  }
  //joining rows together with a new line 
  return rows.map(drawRow).join("\n");
}

//repeat function that takes the strings and times 
function repeat(string, times) {
//start with an empty string
  var result = "";
//loop until one less the number of times
  for (var i = 0; i < times; i++)
//each time loop runs, add string to empty string 
    result += string;
  return result;
}

//function text cell accepting text 
function TextCell(text){
//take this text entered into the program
//split the text with a new line
     this.text = text.split("/n");
}
//assigns function to prototype of textcell minwidth 
TextCell.prototype.minWidth = function() {
 //return this text after each is reduced function on each element of the array 
 //taking width and line as arguments
 ////initial value 0 
  return this.text.reduce(function(width, line) {
  //return the larger number between width and the length of each line 
    return Math.max(width, line.length);
  }, 0);
};
//assigning min height to text cell's prototype 
	//this way all cells will have a default minheight
TextCell.prototype.minHeight = function() {
	//the length of text is assigned to the minHeight
  return this.text.length;
};
//assigning function to prototype draw with width and height as arguments
TextCell.prototype.draw = function(width, height) {
//empty array result
  var result = [];
  for (var i = 0; i < height; i++) {
//add to line from each element of the text array 
    var line = this.text[i] || "";
//push line to result array and add space width minus line.length
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
};

//rows array 
var rows = [];
for (var i = 0; i < 5; i++) {
//single row array
   var row = [];
   //inner loop 
   for (var j = 0; j < 5; j++) {
   //if the index of j plus i is divisible by 2 
     if ((j + i) % 2 == 0)
     //then push to individual row array the constructor textCell 
       row.push(new TextCell("##"));
    //if j+i is not divisble by 2
     else
     //then push to row constructor Textcell with space 
       row.push(new TextCell("  "));
   }
   //then add the individual row array to the rows array
   rows.push(row);
}
//log drawTable function taking the completed rows array as argument
console.log(drawTable(rows));


