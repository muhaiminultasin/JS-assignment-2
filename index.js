//Problem number1
   function celciusToFahrenheit (celcius)  {
        return celcius * 18 + 32;
    }

    // console.log(celciusToFahrenheit(2));


//Problem number 2

    function evenOrOdd(number) {

        if(number % 2 == 0) {
            console.log(`${number} is a Even number`);
        } else  if(number % 2 != 0){
           console.log(`${number} is a Odd number`);
        } else {
            console.log(`${number}`);
        }

    }
    // evenOrOdd(10)
    // evenOrOdd(9);


// Problem number3

    function sum(a,b) {
        return a + b;
    }

    // console.log(sum(10,20));


// Problem number 4. To solve this problem we need spread operator for accessing element from an array.

    function findSmallestNum(arr) {
        return Math.min(...arr);
    };

    // console.log(findSmallestNum([3, 5, 1, 9]));
    

// Problem number 5. we can use for each loop also.

    function CountVowels(string) {
        let vowels = "/aeiou/gi";
        let count = 0;

        for ( i = 0; i < string.length; i++){
           if(vowels.indexOf(string[i]) > -1){
            count++;
           }
        }

        return `${count} vowels in this string`;
        
    }
    // CountVowels("hello world")
    console.log(CountVowels("javascript"));

// Problem number 6. need to use spread oparator before in the argument.

    function getFirstElement(array){
        return array[0];
    
    }

    // console.log(getFirstElement(...['a', 'b', 'c', 'd', 'e']))
    

// Problem number 7. 

    function emptyArray(arr) {
         if(arr == ""){
            return "true";
         } else{
            return "false";
         }
    }

    // console.log(emptyArray(["a"]));


// Problem number 8.

    function factorial(num) {
        let fact = 1;
        if (num === 0 || num === 1) {
            return 1
        } else {
            for(i = 1; i <= num; i++){
                 fact = fact * i;
            }
            return fact;
        }
    }

    // console.log(factorial(10));


// Problem number 9.

function reverseString(str) {
    return str.split("").reverse().join("");
}

// console.log(reverseString("hello"));


// Problem number 10.

function lowerCase(str) {
    return str.toLowerCase();
};

// console.log(lowerCase("HELLO"));


// Problem number 11.

function strLength(str) {
    return str.length;
}

// console.log(strLength("HELLO"));


// Problem number 12.

function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
};

//   console.log(mergeArrays([1, 2, 3], [4, 5, 6]));



// Problem number 13.

function getLastElement(arr) {
    return arr[arr.length-1];
}

//   console.log(getLastElement([1, 2, 3])); // 3
//   console.log(getLastElement(["a", "b", "c"])); // "c"


// Problem number 14.


function getFirstCharacter(str) {
    return str[0];
}

console.log(getFirstCharacter("hello")); 


// Problem number 14.

function sumArray(...arr) {
    let sum = 0;
    for ( i = 0; i < arr.length;i++) {
         sum += arr[i];
    }
    return sum;
  }
  
  console.log(sumArray(...[1, 2, 3, 4])); // 10
  console.log(sumArray(...[-1, -2, -3, -4])); // -10
  console.log(sumArray(...[1.5, 2.5, 3.5])); // 7.5
  