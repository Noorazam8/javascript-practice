// 1. Write a program that takes two user inputs for first and// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// const firstName =prompt("Enter your first name");
// const lastName = prompt("Enter your last name");
// const fullName = firstName + " " + lastName;
// alert("hello\t" + fullName );

// 2. Write a program to take a user input about his favoritemobile phone model. Find and display the length of user input in your browser

// var favMobile = prompt("Enter your favourite mobile phone model ");
// var length = favMobile.length
// document.write("My favourite phone is:" + favMobile + ".Length of string is:"+length );


// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser.

// var Name ="Pakistani";
// var index =Name.indexOf("n");
// document.write("Index of n is:" + index);

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// var name ="Hello World";
// var index = name.lastIndexOf("l");
// document.write("Last index of l is:" + index);

// 5. Write a program to find the character at 3rd index in the  word “Pakistani” and display the result in your browser.

// var word ="Pakistani"
// var index = word.charAt(3);
// document.write("The character of 3rd index of Pakisrani is:" + index);

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var orignalWord ="Hyderabad"
// var replace = orignalWord.replace("Hyder" , "Islam");
// document.write("Original word: " + orignalWord + "<br>");
// document.write("Replaced word: " + replace);

// 8. Write a program to replace all occurrences of “and” in thestring with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket andfootball together.”;

// var message ="Ali and Sami are best friends. They play cricket andfootball together"
// var replace = message.replaceAll("and", "&");
// document.write("Orignal message is:"+ message +"<br>" );
// document.write("Replace message is:" + replace);

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// var num ="472"
// var changeNum = parseInt(num);

// document.write("Orignal num is :" + num + "<br>");
// document.write(" Type of orignal num is :" + typeof num +"<br>");
// document.write("Converted num is :" + changeNum + "<br>");
// document.write(" Type of converted num is:" + typeof changeNum +"<br>");

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

// var input = "peanuts";
// var convert = input.toUpperCase();
// document.write("Capitalize text is ;" + convert);

function toTitleCase(str) {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
      return match.toUpperCase();
    });
  }
  
  function titleCaseText() {
    var user_input = prompt("Enter your text:");
    var title_case_text = toTitleCase(user_input);
 document.write("Title case:", title_case_text);
  }
  
  titleCaseText();
  