// write a for loop that prints your name 10 times without using code snippets or any other reference
 
// for (let i=0; i<20; i++) {
//     console.log("Ahmed")
// }

// write a while loop that prints your surname 20 times

// let i = 0;

// while (i < 20) {
//     console.log("Mohamed")
//     i++;
// }

// write a do while loop that don't print anything, but put a console.log("I am in the loop body") 

// do{
//     console.log("I am in the loop")
//     i++
// }
// while(false)

// Write an array that hold 10 names of your friends and family

let friendsAndFamily = ["Ali", "Jama", "Farah", "Noor","Bilan", "Saynab", "Sacdiya", "Maryan", "Hamza"];

// How many interaction functions that come with arrays that you know

// friendsAndFamily.forEach()
// friendsAndFamily.map()
// friendsAndFamily.filter()
// friendsAndFamily.reduce()
// friendsAndFamily.every()

// Print every element in the friendsAndFamily array using forEach function, and put hello in clear
front of the name

friendsAndFamily.forEach(
    function (name) {
        console.log("Hi ", name)
    }
)


// convert the above function to an arrow function

friendsAndFamily.forEach(name => console.log("Hi ", name))