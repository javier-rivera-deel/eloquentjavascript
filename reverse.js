function reverseArrayInPlace(){
	var length = array.length;
  //console.log(length);
    var last;
	for (var i = 0; i < length; i++) {
        console.log(array);
        last = array.pop();
        array[i]
        console.log("saco "+last);
        console.log(array);
        //array.unshift(last);
	};
  //just testing commit
    console.log(array);
	return array;
}

var origin = [5,6,89,4];

origin = reverseArrayInPlace(origin);
console.log(origin);

function reverse(array){
    var newArray = [];
        var length = array.length
    for (var i = 0; i < length; i++) {
        newArray[i] = array.pop();
        }
    return newArray;
}rray;
}