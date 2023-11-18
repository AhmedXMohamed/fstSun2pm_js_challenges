// Write an array that hold 10 names of your friends and family

let friendsAndFamily = ["Ali", "Jama", "Farah", "Noor","Bilan", "Saynab", "Sacdiya", "Maryan", "Hamza"];

// How many interaction functions that come with arrays that you know

// friendsAndFamily.forEach()
// friendsAndFamily.map()
// friendsAndFamily.filter()
// friendsAndFamily.reduce()
// friendsAndFamily.every()

// Print every element in the friendsAndFamily array using forEach function, and put hello in front of the name

friendsAndFamily.forEach(
    function (name) {
        console.log("Hi ", name)
    }
)


// convert the above function to an arrow function

friendsAndFamily.forEach(name => console.log("Hi ", name))