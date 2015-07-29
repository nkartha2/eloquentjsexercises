//////////////////////////eloquent JS exercises

/////////////////////CHAPTER 2: Program Structure
/////exercise 1 : triangle looping 

var triangle ='';
for(var i=0; i<8; i+=1){
  triangle+='#';
  console.log(triangle);
}

for(var line = '#'; line.length<8; line+='#'){
  console.log(line);
}

/////exercise 2 : fizzbuzz
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

/////////////////////CHAPTER 3: Functions 
/////exercise 1 : minimum 
//parameters should be a range 
function min(x,y){
  //return the minimum number 
	if(x>y){
		return y;
	}else{
		return x;
	}
}

/////exercise 2 : recursion
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

/////exercise 3a : beans
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

/////exercise 3b: beans
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
