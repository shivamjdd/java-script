// const tinderUser = new Object()  // singleton object
const tinderUser = {}  //

tinderUser.id = "123abc"
tinderUser.name = "Rohan"
tinderUser.isLoggedIn = false 

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shivam",
            lastname: "gupta"
        }

    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2) // guranteed 
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "xyz@gmail.com",
    },
    {
        id: 1,
        email: "xyz@gmail.com",
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('LoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Shivam Gupta",

}

// console.log(course.courseInstructor);
const {courseInstructor: instructor} = course // isko hi bolte hy code ko desctructre krna 
console.log(instructor);

// const navbar = ({company}) => {

// }

// navbar(company = "react") React Dstructuring

// {
//     "name": "Shivam",
//     "coursename": "javascript with jd",
//     "price": "free",
// }

[
    {},
    {},
    {}
]

