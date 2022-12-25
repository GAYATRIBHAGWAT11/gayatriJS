const countries = [
    { name: "India", capital: "Delhi" },
    { name: "US", capital: "Washington" },
    { name: "Russia", capital: "Moscow" },
    { name: "Singapore", capital: "Singapore" },
    { name: "China", capital: "Beijing" },
    { name: "France", capital: "Paris" },
  ];
  
  const cityNames = Array.from(countries, ({ capital }) => capital);
  console.log(cityNames); // ['Delhi, 'Washington', 'Moscow', 'Singapore', 'Beijing', 'Paris']




  console.log([...new Set([1, 2, 4, 4, 3])]); // [1, 2, 4, 3]


  //remove falsy value from array

  const myArray = [false, null, 1, 5, undefined];
myArray.filter(Boolean); // [1, 5] // is same as myArray.filter(x => x);


console.log(["a"] + ["b"]); // "ab"
console.log([] + []); // ""
console.log(![] + []); // "false", because ![] returns false.




const circle = {
    radius: 20,
    diameter() {
      return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
  };
  console.log(circle.diameter());
  console.log(circle.perimeter());

  //output=> 50 and NaN
  
//   The output is 40 and NaN.
//    Remember that diameter is a regular function, 
//    whereas the value of perimeter is an arrow function.
//     The this keyword of a regular function(i.e, diameter) refers to the surrounding
//      scope which is a class(i.e, Shape object). Whereas this keyword of perimeter
//       function refers to the surrounding scope which is a window object. Since there
//        is no radius property on window objects it returns an undefined value and the
//         multiple of number value returns NaN value.


// Parameter is the variable name of a function definition whereas an argument represents the value given to a function when it is invoked.