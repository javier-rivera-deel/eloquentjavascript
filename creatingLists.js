function arrayToList(array){
	var index = 0;
	var list = addItem(index);
	
	function addItem(index){
		if(index < array.length){
			return {value:array[index],rest:addItem(++index)}
		}
		else{
			return null;
		}
	}
	return list;
}

function listToArray(list){
	var array = [];
	traverseObject(list);
	function traverseObject(object){
		if(object.rest){
			array.push(object.value);
			return traverseObject(object.rest);
		}
		else{
			array.push(object.value);
		}

	}
	return array;
}

function prepend(element, list){
	var newList = {
		value : element,
		rest : list
	}
	return newList;
}

function nth(list, position){
	var index = 0;
	var value = traverseObject(list);
	function traverseObject(object){
		if(index === position){
			return object.value;
		}else if(index > position){
			return undefined;
		}else{
			index++;
			return traverseObject(object.rest);
		}
	}
	return value;
}

//test linked list object 
var myList = {
	value : 1,
	rest :{
		value : 2,
		rest: {
			value : 3,
			rest : null
		}
	}
}
//test array
var arr = [10,20];

//test nth
//console.log(nth(arrayToList([10,20,30]),1));
//console.log(nth(myList,1));
// → 20

//test prepend
//console.log(prepend(10,myList));
//console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

//test converting list to array
//console.log(listToArray(myList));
// → [10, 20, 30]

//test converting array to list
//console.log(arrayToList(arr));
// → {value: 10, rest: {value: 20, rest: null}}
