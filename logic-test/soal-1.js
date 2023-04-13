function groupAnagrams(arr) {
  let anagrams = {};

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    let sortedWord = word.split("").sort().join("");

    if (anagrams[sortedWord] === undefined) {
      anagrams[sortedWord] = [word];
    } else {
      anagrams[sortedWord].push(word);
    }
  }

  let result = [];
  for (let sortedWord in anagrams) {
    result.push(anagrams[sortedWord]);
  }

  return result;
}

let arr = ["cook", "save", "taste", "aves", "vase", "state", "map"];
console.log(groupAnagrams(arr));
