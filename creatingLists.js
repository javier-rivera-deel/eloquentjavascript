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
/*
console.log(listToArray(myList));
*/
/*
var arr = [10,20];
console.log(arrayToList(arr));
*/