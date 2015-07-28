//////////////////////////eloquent JS exercises


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