function arrayToList(array){
	list = {};
	list.value = array[0];
	for(var i=0;i<array.length;i++){
		if(array[i+1]){
			list.rest = {value:array[i+1]}
		}
		else{
			list.rest = null;
		}
	}
	console.log(list);
}

function arrayToList(array, count){
	if(list){
		if(array[++count]){/*
			list.rest = {value:array[i+1]}*/
		}
		else{
			list.rest = null;
			return list;
		}
	}else{
			var list = {
				value : array[0]
			}
			count++;
			while(count < array.length){
					return arrayToList(array,count);
			}
			
	}
}


var myArray = ["a","b","c"];
arrayToList(myArray);
//var newList = arrayToList(myArray);
//console.log(newList);


function listToArray(list){
	
}

/*
var newArray = arrayToList(myList);
console.log(newArray);
*/

function prepend(){
	
}

function nth(){
	
}