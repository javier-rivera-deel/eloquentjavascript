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

//test prepend
//console.log(prepend(10,myList));
console.log(prepend(10, prepend(20, null)));



//console.log(prepend(10, prepend(20, null))); or console.log(prepend(10,someList))
// → {value: 10, rest: {value: 20, rest: null}}




//test array
var arr = [10,20];

//test converting list to array
//console.log(listToArray(myList));

//test converting array to list
//console.log(arrayToList(arr));
