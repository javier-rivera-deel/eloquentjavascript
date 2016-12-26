function reverseArrayInPlace(array){
        var length = Math.floor(array.length / 2);
        var lastPlace;
        var firstPlace;
        var lastCount = array.length - 1;
    for (var i = 0; i < length; i++) {
        firstPlace = array[i];
        lastPlace = array[lastCount];
        
        array[i] = lastPlace;
        array[lastCount] = firstPlace;
        
        lastCount--;
    };

}

function reverse(array){
    var newArray = [];
        var length = array.length
    for (var i = 0; i < length; i++) {
        newArray[i] = array.pop();
        }
    return newArray;
}rray;
}