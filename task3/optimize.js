module.exports.findFirstStringInBracket = function (str) { 
    let wordsAfterFirstBracket;
    let indexClosingBracketFound;
    let indexFirstBracketFound = str.length > 0 ? str.indexOf("(") : '';
    wordsAfterFirstBracket = indexFirstBracketFound >= 0 ? str.substr( indexFirstBracketFound ) : '';
    if(wordsAfterFirstBracket){
      wordsAfterFirstBracket = wordsAfterFirstBracket.substr(1);
      indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");
      wordsAfterFirstBracket = indexClosingBracketFound >= 0 ? wordsAfterFirstBracket.substring(0,indexClosingBracketFound) : '';
    }

    return wordsAfterFirstBracket ? wordsAfterFirstBracket : '';
};