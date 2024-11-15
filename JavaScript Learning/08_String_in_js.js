// String in JS

// string is an basicly object

// const str = new String('Manthan')   // it is another way of creating string
// console.log(str);

// const name = "Manthan"      // simple way of creating string
// const surname = " Chauhan"
// console.log(name + surname);        // concate Strings  // Mantahn Chauhan
// this above is old dated way of concating string

// morden way of concating string was using backticks(``)

// console.log(`Hello , my name is ${name} and my surname is ${surname}`);     // Hello , my name is Manthan and my surname is  Chauhan


// --------------------------- string methods -----------------------------------------------------------
// there are lots of methods are used with string where few of them as shown below
// this below methods will not get change anything in original string 

// const name = "Manthan"
// console.log(name[0]);       // M
// console.log(name.length);   // 7
// console.log(name.toUpperCase());    // MANTHAN  
// console.log(name.toLowerCase());   // manthan

/* if you are create string using above way , you will use all the methods of string but you will not get suggestion
    while you writing the string method but if you are creating string as below then you will get suggetion of methods
*/

const str = new String('Chauhan')
// console.log(str.charAt(3));     // u

// console.log(str.includes('au'));    // true 
// console.log(str.includes('y'));    // false

// console.log(str.startsWith('y'));    // false
// console.log(str.endsWith('n'));    // true

// console.log(str.charAt(3));     // u    
// console.log(str.indexOf('h'));     // 1     if multiple characters are in string then it will return first occurance of character

// console.log(str.substring(2,5));    // auh  -> it will devide string into substring and return but it will not include last index the range is (start , end-1)
// console.log(str.slice(2,5));    // auh  -> similar to substring

// console.log(str.replace('Chau','Mant'));    // Manthan  -> similar to substring
// console.log(str.replaceAll('h','y'));    // Cyauyan  -> similar to substring

const str2 = "   Manthan   "
console.log(str2.trim());       // Manthan -> remove white spaces from starting and ending

const str3 = "Man than ch au han"
console.log(str3.split(' '));       // [ 'Man', 'than', 'ch', 'au', 'han' ]  ->  split into word using saprater and return array of words




