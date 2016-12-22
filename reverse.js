function reverseArrayInPlace(array){
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
  //console.log(array);
    console.log(array);
	return array;
}

var origin = [5,6,89,4];

origin = reverseArrayInPlace(origin);
console.log(origin);