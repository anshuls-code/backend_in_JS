// Singleton Object (Object.create) -> when created using constructor
// Non Singleton Object -> when object is created using literals {key: value}, here keys are always treated as string

// =============== Object literals ===============

// Creating object using object literals

// const JsUser = { 
//     name: "Anshul Sharma",
//     age: 24,
//     gender: 'M',
//     email: "anshul@example.com",
//     isLoggedIn: false
// }

// ===== How to access objects? =====

// console.log(JsUser.name, JsUser.age) // approach - 1 
// console.log(JsUser["name"]) // better approach and is recommanded approach, use square brackets and proper string double quotes


// ===== How to declare and access SYMBOL =====

// using symbol as key in object and printing its value
const mySym = Symbol("Key1")

const JsUser = { 
    name: "Anshul Sharma",
    age: 24,
    gender: 'M',
    email: "anshul@example.com",
    isLoggedIn: false,
    [mySym]: "Unique value" // this is how we use symbol as key inside an object
}

// console.log(JsUser[mySym]) // Unique value
// console.log(JsUser)

// ===== How to update/change values of an object? =====
JsUser["name"] = "Updated"

// console.log(JsUser.name) // Updated

// ===== How to prevent modification of an object? =====
// Object.freeze(JsUser) // this will prevent any modification of the object, no new key can be added and no existing key can be updated


// ===== How to define methods in an object? =====

JsUser.greeting = function() {
    console.log("Hello, I am Anshul Sharma")
}
// JsUser.greeting() // Hello, I am Anshul Sharma


// ===== How to create objects using constructor -- singleton objects? =====

const singletonObj = new Object() // this is how we create singleton object using constructor

singletonObj.name = "Anshul Sharma"
singletonObj.age = 24
singletonObj.gender = 'M'
singletonObj.email = "anshul@example.com"

// console.log(singletonObj) // { name: 'Anshul Sharma', age: 24, gender: 'M', email: '


// ===== How to create objects inside objects? =====
const regularuser = {
    email: "someone@example.com",
    fullName: {
        firstName: "Anshul",
        lastName: "Sharma"
    }
}


// ====== How to merge two or more objects? =====
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

const mergedObj = {...obj1, ...obj2, ...obj3} // used to merge two or more objects, it will return a new object with all the properties of source objects merged into target object
// console.log(mergedObj) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// const mergedObj = Object.assign({}, obj1, obj2, obj3) // used to merge two or more objects, first parameter is the target object and rest are source objects, it will return a new object with all the properties of source objects merged into target object
// // console.log(mergedObj) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


// ====== How to access all keys of an object? =====
// console.log(Object.keys(JsUser)) // used to access all keys of an object, it will return an array of keys of the object


// ====== How to access all values of an object? =====
// console.log(Object.values(JsUser)) // used to access all values of an object, it will return an array of values of the object


// ====== How to access all entries of an object? =====
// console.log(Object.entries(JsUser)) // used to access all entries of an object, it will return an array of arrays, where each inner array contains a key-value pair of the object

// ====== How to check if a key exists in an object? ===== 
console.log(JsUser.hasOwnProperty("name")) // used to check if a key exists in an object, it will return true if the key exists, otherwise false    



// ===================== Objects Destructuring =====================

