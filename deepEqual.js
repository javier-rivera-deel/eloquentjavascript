function deepEqual(objectA, objectB){
	console.log
}


//object for testing
var obj = {
	here:{is:"an"},
	object:2
};
var otherObj = {
	here: 1,
	object: 2
};

console.log(obj.here);

//testing deepEqual
//console.log(deepEqual(obj, obj));
// → true
//status: not tested

//console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
//status: not tested

//console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
//status: not tested
