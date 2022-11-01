// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

function convertToInitials(name){
    let nameArr = name.split(" ") //splitting into seperate index
    return (nameArr[0][0] +"."+nameArr[1][0]).toUpperCase()
}