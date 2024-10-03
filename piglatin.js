/*
Pig Latin
Christina
10/02/24
*/

// Using Node module to manage user imput
const readline = require("readline");

const prompts = readline.createInterface(process.stdin, process.stdout);

// Get word or phrase from User, exit process if response is empty
prompts.question("Enter a word or short phrase: ", (response) => {
  if (response === "") {
    console.log("You did not enter anything.");
    process.exit();
  }
  // Make response all lower case, if more than one word, split into multiple words
  words = response.toLowerCase().split(" ");
  // empty string to hold converted strings
  piglatin = "";

  const vowels = "aeiou";
  const notVowels = "bcdfghjklmnpqrstvwxyz";

  // Check word(s) first letters for vowels or consonants
  for (let i = 0; i < words.length; i++) {
    word = words[i];
    // If word starts with a vowel ...
    if (vowels.includes(word.charAt(0))) {
      nw = words[i] + "way ";
    } else if (
      // If word starts with two consonants
      notVowels.includes(words[i].charAt(0)) &&
      notVowels.includes(words[i].charAt(1))
    ) {
      nw = words[i].substring(1) + words[i].charAt(0) + "ay ";
    } else {
      // If word starts with one consonant
      nw = words[i].substring(1) + words[i].charAt(0) + "ay ";
    } // add word(s) to empty string
    piglatin += nw;
  }
  // Print the altered word(s)
  console.log(`Your phrase in pig latin is ${piglatin}.`);

  process.exit();
});
