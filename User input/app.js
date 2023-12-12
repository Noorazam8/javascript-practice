// 1. Declare an empty array using JS literal notation to store
// student names in future.

var studentNameArray = [];

 // Object notation to declare an empty array

var studentNamesArray = new Array();

// 3. Declare and initialize a strings array.

var stringsArray = ["Umar", "Ahmed", "Ali", "Aslam"];

// 4. Declare and initialize a numbers array.

var numArray = [1, 2, 3, 4, 5];

// 5. Declare and initialize a boolean array.

var booleanArray = ["true","false", "true","false"];

// 6. Declare and initialize a mixed array
var mixedArray = [1,"true","Aslam", 2 ,"false","Ahmed"]

// varDeclare and Initialize an array and store available

//  var qualificationArray = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

//  document.write("<h1><i><u>Education qualification in Karachi</h1>");


//  for(i=0; i<qualificationArray.length; i++){
//   document.write("<li>"+qualificationArray[i])
//  }


//   Function to calculate percentage
// function calculatePercentage(score) {
//     return (score / 500) * 100;
//   }
//   document.write("<h1><b><u>PERCENTAGE OF STUDENT</h1>")
//     // Array to store student names
//     var studentNames = ["ALi", "Abdullah", "Saleem"];
  
//     // Array to store student scores
//     var studentScores = [430, 390, 480];
 
//     // Display scores and percentages
//     for (var i = 0; i < studentNames.length; i++) {
//      var name = studentNames[i]
//       var score = studentScores[i];
//       var percentage = calculatePercentage(score);
  
//       document.write(
//        "<b><i>"+ name + " scored " + score + " . Percentage is: " + percentage + "%"+"<br><br>"
//       );
//     }
  
let colorArray = ["Red", "Blue", "Green"];
      document.write("Colors in the array: " + colorArray );

    //   the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
    const newColorToBeginning = prompt("Enter a color to add to the beginning:");
    colorArray.unshift(newColorToBeginning);
    displayArray();

    // b. Ask the user what color he/she wants to add to the end & add that color to the end of the array.
    const newColorToEnd = prompt("Enter a color to add to the end:");
    colorArray.push(newColorToEnd);
    displayArray();

    // c. Add two more colors to the beginning of the array.
    const color1 = prompt("Enter the first color to add to the beginning:");
    const color2 = prompt("Enter the second color to add to the beginning:");
    colorArray.unshift(color1, color2);
    displayArray();

    // d. Delete the first color in the array.
    colorArray.shift();
    displayArray();

    // e. Delete the last color in the array.
    colorArray.pop();
    displayArray();

    // f. Ask the user at which index he/she wants to add a color & color name. Then add the color to the desired position/index.
    const indexToAdd = parseInt(prompt("Enter the index where you want to add the color:"));
    const newColorAtIndex = prompt("Enter the color to add:");
    colorArray.splice(indexToAdd, 0, newColorAtIndex);
    displayArray();

    // g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from the user-defined position/index.
    const indexToDelete = parseInt(prompt("Enter the index from where you want to delete color(s):"));
    const numColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
    colorArray.splice(indexToDelete, numColorsToDelete);
    displayArray();
    
  

 