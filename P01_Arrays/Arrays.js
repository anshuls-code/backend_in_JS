// Notes:

// 1. JS arrays are resizable and not fixed
// 2. JS arrays supports mixed datatypes
// 3. Shallow copy -> copy whose properties shares the same reference points - when you change either the source or the copy, it causes the other object to change too.
// 4. Deep copy -> copy whose properties shares the same reference points - when change in copied will not change the source.
// 5. Array methods: 
//      a. push(value) --> Appends new elements to the end of an array, and returns the new length of the array.
//      b. pop() --> Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
//      c. shift() --> Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
//      d. unshift(value) --> Inserts new elements at the start of an array, and returns the new length of the array.
//      e. includes(value) --> Determines whether an array includes a certain element, returning true or false as appropriate.
//      f. indexOf(value) --> Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
//      g. join() --> Adds all the elements of an array into a string, separated by the specified separator string.
//      h. slice(start, end) --> Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
//      i. splice(start, end) --> Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
//      j. splice(start, end, elements to insert in place of deleted elements) --> Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
//      k. obj1.concat(obj2) --> Combines two or more arrays. This method returns a new array without modifying any existing arrays
//      l. spread operator -- [...obj1, ...obj2] --> spreading each element and combining in one single array and returns that array.
//      m. flat(depth) --> Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. 
//      n. flat(Infinity) --> Returns a new array with all sub-array elements concatenated into it recursively up to infinite depth. 
//      o. Array.from(object) --> Creates an array from an iterable object.
//      p. Array.of(obj1, obj, ...) --> Returns a new array from a set of elements.
//      q. 




// const myArr = [1, 2, 3, 4, 5];
// console.log(myArr)

// const myArr2 = myArr
// console.log(myArr2)

// myArr2[2] = "Anshul"
// console.log(myArr)
// console.log(myArr2)

// Arrar methods

const myArr = [1, 2, 3, 4, 5];

// .push(val) -> add new value at last | .pop() -> removes the last value from the array
// myArr.push(21)
// console.log(myArr)

// myArr.unshift(65) // Inserts new elements at the start of an array
// console.log(myArr)

// myArr.shift(); // Removes the first element from an array
// console.log(myArr)

// console.log(myArr.includes(3))
// console.log(myArr.indexOf(3))

// const newArr = myArr.join()
// console.log(typeof myArr)
// console.log(typeof newArr)

// console.log("A", myArr)
// console.log(myArr.slice(1,3))
// console.log(myArr.splice(1,3, 55))
// console.log("A", myArr)

// ==================================================== Part - 2 ====================================================

const mv_heros = ["Spider Man", "Thor", "Hulk", "Iron Man"]
const dc_heros = ["Superman", "Batman", "Flash"]

// Merging two arrays
// mv_heros.push(dc_heros) // will treat dc_heros as a single value and will append that array in last of mv_arrays
// console.log(mv_heros)

// const newArr = mv_heros.concat(dc_heros);
// console.log(newArr)

// const newArr = [...mv_heros , ...dc_heros]
// console.log(newArr)

// const anothetArr = [1, 2, 3, [4, 5, 6], [7, 8, [9, [10, [11]]]]]
// console.log(anothetArr.flat(Infinity))

// console.log(Array.isArray("Ansuhl"))
// console.log(Array.from("Anshul"))

// let a = [10, 11, 12]
// let b = 20
// let c = 30
// let d = 40

// console.log(Array.of(a, b, c, d))

