function reverse(arr){
	var newArray = [];
  
	for(var i = (arr.length-1); i >= 0; i--){
		newArray.push(arr[i]);
	}
	return newArray;
}
var origin = [5,6,89,5,6,2,1,3];
var reversed = reverse(origin);



function reverseArrayInPlace(array){

}


console.log(reversed);