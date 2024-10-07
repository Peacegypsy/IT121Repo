/*
Pig Latin
Christina
10/02/24
*/

function swap_phrase(phrase) {
  if (phrase == "") {
    return "Error: please enter a word or short phrase.";
  }
  let words = phrase.split(" ");
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
  return `${piglatin}`;
}
var tnslb = document.getElementById("tnslb");
tnslb.onclick = function () {
  var inputPhrase = document.getElementById("phraseInput").value;
  var outputText = (document.getElementById("outputText").value =
    swap_phrase(inputPhrase));
};
