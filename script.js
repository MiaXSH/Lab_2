var huahua = {
    cute: true,
    hungry: 0.5,
    lives: 9,
    fur: {
        fluffy: true,
        colour: "black And White",
    },
    threats: null,
    meow: function(){ // a method, a function contained as a key value pair of an object is called a method
    //    function, name, parenthesis(圆括号), curly brackets. overhere, the "name" is optional
        return "meow";
        }, //annonymous functions have no name, because we still have the accessor "meow:" from the "meow: function(){}"
    }

console.log(huahua.meow);
console.log(huahua.meow()); //()function invokation operator

console.log(huahua.sleeping);
console.log(huahua.two); //you you ask for a variable name that is not declared, gives an error
// a underclared parameter of an object gives undefined and no error

huahua.lives++; //increment huahua's lives
console.log(huahua);

huahua.two = "two" ;
console.log(huahua);

//kitty.travel(); //this is an error because you cannot invoke undefined as a function

huahua.future++;
console.log(huahua.future++); // we do get a number, but the results in a type number, we got a value nan, which is not anumber
console.log(typeof huahua.future++);

console.log( huahua.lives / huahua.threats ); //null gets coerced to 0 when changing to type number

//. accessor of an object

if(huahua.fur.fluffy){
    console.log('true?');
}else{
    console.log('false?');
}

var x = {};

x.y = 12; //nutates object with assignment
x.z; // retruns undefined
x.z()// throuws an erro by trying to invoke undefined as a function
x.z = function(){}; //method
x.z(); // invoke the z method and returns undefined unless modified

for(key in huahua){
    console.log(key); //for loops will access the huahua variable, 
    // and for each one of the key value pairs it will replace key with the value of our key value pair
    huahua[key]; // alternate accessor for objects in javascript
    huahua["meow" + count]; // you can combine two strings together
//alternate accessor for objects in javascript
// kitty["meow" + count];

} // this gives us the name of the key in the keyvalue pair

//why we have square brackets?
// because one thing we can do is that we can say key is going to be a string that is going to be
// one of the names of the key value pairs.
