const readline = require("readline");

const prompts = readline.createInterface(process.stdin, process.stdout);

prompts.question("Enter a short phrase: ", (response) => {
  words = response.toLowerCase().split(" ");

  piglatin = "";

  const vowels = "aeiou";
  const notVowels = "bcdfghjklmnpqrstvwxyz";

  for (let i = 0; i < words.length; i++) {
    word = words[i];
    if (vowels.includes(word.charAt(0))) {
      nw = words[i] + "way ";
    } else if (
      notVowels.includes(words[i].charAt(0)) &&
      notVowels.includes(words[i].charAt(1))
    ) {
      nw = words[i].substring(1) + words[i].charAt(0) + "ay ";
    } else {
      nw = words[i].substring(1) + words[i].charAt(0) + "ay ";
    }
    piglatin += nw;
  }

  console.log(`Your phrase in pig latin is ${piglatin}.`);

  process.exit();
});
