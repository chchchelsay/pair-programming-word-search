//@Gozi1 @kgislason

const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = verticalJoinner(letters).map(ls => ls.join(''));
    const backwardsHorizontalJoin = letters.map(ls => ls.reverse().join(''));
  
    if (searchString(horizontalJoin, word)) return true;
    if (searchString(backwardsHorizontalJoin, word)) return true;
    if (searchString(verticalJoin, word)) return true;
  
    return false;
  };
  // searches through string
  const searchString = (string,word) => {
      for (let l of string) {
          if (l.includes(word)) return true;
      }
  }
  //joins array vertically
  const verticalJoinner = (letters) => {
    const newArray = [];
    for (let outer in letters[0]) {
      const tempArray = [];
      for (let inner in letters) {
        tempArray.push(letters[inner][outer]);
      }
      newArray.push(tempArray);
    }
      
    return newArray;
  };
  
  module.exports = wordSearch;