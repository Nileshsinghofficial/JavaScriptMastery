// const tinderUser = new Object() // Singleton objects

const tinderUser = {} // non Sinlenton Method

tinderUser.id = "123abc"
tinderUser.name = "Nilesh"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "nigamsingh@google.com",
    fullname: {
        userfullname: {
            firstname: "nilesh",
            lastname: "singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2); // using assign method assign the object 

const obj3 = {...obj1, ...obj2} // use spread method to assess both objects
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "nigam@email.com"
    },
    {
        id: 2,
        email: "nilesh@email.com"
    }
]

// console.log(users[0].email) 

// console.log(tinderUser);

// console.log("Keys: ",Object.keys(tinderUser)); // Access object key and return in form of arrays.
// console.log("Values: ",Object.values(tinderUser)); // Access object values and return in form of arrays.
// console.log(Object.entries(tinderUser)) // entries use to each keys and value in one arrays.

// console.log(tinderUser.hasOwnProperty('Name')); // hasOwnProperty search its exist Keys are not.

/* Destructuring of Objects */

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Nilesh"
}

// console.log(course.courdeInstructor); // Access Object Property

const {courseInstructor: INA} = course // Destructuring this method.
console.log(INA);