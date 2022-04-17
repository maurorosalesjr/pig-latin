function pigLatin(string) {
  const vowels = ["a", "e", "i", "o", "u"];

  for(i=0; i < vowels.length; i++) {
    if (string[0] === vowels[i]){
      return (string + "way");
    };
  };

  return (string.slice(1) + string[0] + "ay");
}
// practice area

function practiceConsonantCheck(string){
  const vowels = ["a", "e", "i", "o", "u"];
  let indexCount = 0;
  for(let i=0; i < string.length; i++){
    for(let j = 0; j < vowels.length; j++){
      if (string[i] === vowels[j]){
        console.log(indexCount);
        return (string.slice(indexCount) + string.slice (0, indexCount) + "ay");
      };
    };
    indexCount++;
  };
}

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

