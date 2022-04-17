describe:pigLatin()
Test: "it will decide if word begins with vowel or consonant"
code: pigLatin("word"); pigLatin("each");
Expected Output: "consonant"; "vowel"

Test: "It will add 'way' to the end of words that start with a vowel."
code: pigLatin("a");
Expected Output: "away"

Test "It will move consonant to the end of the word and add 'ay' for words that begin with consonant"
code: pigLatin("code");
Expected Output: "odecay"

Test "It will move ALL consecutive consonants to the end of the word and add 'ay' if word begins with consonant"
Code: pigLatin("Trick");
Expected Output: "icktray"


