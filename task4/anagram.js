module.exports.anagram = function (array) {
    var object = {};
    for (var i = 0; i < arr.length; i++) {
        var word = arr[i].split('').sort().join('');
        if (!object.hasOwnProperty(word)) {
            object[word] = [];
        }
        object[word].push(arr[i]);
    }  
    let finalArr = [];
    for (let item in object) {
        finalArr.push(object[item]);
    }
    return finalArr;
}

// Call this function using console.log(anagram(['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']));
// Result = [["kita", "atik", "tika"], ["aku", "kua"], ["kia"], ["makan"]]