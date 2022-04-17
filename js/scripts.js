function pigLatin(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  let indexCount = 0;
  for(i=0; i < vowels.length; i++) {
    if (string[0] === vowels[i]) {
      return (string + "way");
    };
  }; 
  for(let i=0; i < string.length; i++){
    for(let j = 0; j < vowels.length; j++){
      if (string[i] === vowels[j]){

        return (string.slice(indexCount) + string.slice (0, indexCount) + "ay");
      };
    };
    indexCount++;
  };
}

// practice area

// function practiceConsonantCheck(string){
//   const vowels = ["a", "e", "i", "o", "u"];
//   let indexCount = 0;
//   for(let i=0; i < string.length; i++){
//     for(let j = 0; j < vowels.length; j++){
//       if (string[i] === vowels[j]){
//         console.log(indexCount);
//         return (string.slice(indexCount) + string.slice (0, indexCount) + "ay");
//       };
//     };
//     indexCount++;
//   };
// }

//set an index counter variable
//loop through each letter of the string
//see if each letter is a vowel or a consonant
//if it's a consonant add 1 to the index counter
//if it's a vowel- end looping
//return the index counter [3]
//return string.slice(index counter) + string.slice(0, index counter) + "ay"



// function practiceConsonantCheck(string){
//   const vowels = ["a", "e", "i", "o", "u"];
//   let indexCount = 0;
//   for(let i=0; i < string.length; i++){
//     vowels.forEach(function(element){
//       if (string[i] === element){
//         return indexCount;
//       };
//     });
//   };
//   indexCount++;
//   console.log(indexCount);
//   return (string.slice(indexCount + 1) + string.slice(0, indexCount + 1) + "ay");
// }

function pigLatin2(string) {
  
  const originalText = string.split(" ");
  let translatedText = "";
  console.log(originalText);
  
  for(let i = 0; i < originalText.length; i++){
    const vowels = ["a", "e", "i", "o", "u"];
    let indexCount = 0;

    for(j=0; j < vowels.length; j++) {
      if (originalText[i] === vowels[j]) {
        translatedText.push(string + "way");
        console.log(translatedText);
      };
    }; 
    for(let k=0; k < string.length; k++){
      for(let l = 0; l < vowels.length; l++){
        if (originalText[k] === vowels[l]){
      translatedText.push(string.slice(indexCount) + string.slice (0, indexCount) + "ay");
        };
      };
      indexCount++;
    };
  };
  return translatedText;
};

function pigLatin3(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  let indexCount = 0;
  const originalText = string.split(" ");
  let translatedText = [];
  let translatedWord;

  originalText.forEach(function(word) {
    vowels.forEach(function(element) {
        if (word[0] === element) {
          translatedWord = word + "way";
        };
        for(let i=0; i < word.length; i++){
          for(let j = 0; j < vowels.length; j++){
            if (word[i] === vowels[j]){
              console.log(indexCount);
              translatedWord = string.slice(indexCount) + string.slice (0, indexCount) + "ay";
            };
          };
          indexCount++;
        };
        translatedText.push(translatedWord);
      }); 
  });
  return translatedText.join(" ");
}

function pigLatin4(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  let indexCount = 0;
  const originalText = string.split(" ");
  const translatedText = [];
for(let i =0; i < originalText.length; i++)
  for(j=0; j < vowels.length; j++) {
    if (string[i] === vowels[j]) {
      translatedText.push(string + "way");
    };
  }; 
  for(let k=0; k < originalText.length; k++){
    for(let l = 0; l < vowels.length; l++){
      if (string[k] === vowels[l]){
        console.log(indexCount);
        translatedText.push(string.slice(indexCount) + string.slice (0, indexCount) + "ay");
      };
    };
    indexCount++;
  };
  translatedText.join("");
  return translatedText;
}; 