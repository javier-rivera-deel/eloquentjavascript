function arrayToList(array){
	var index = 0;
	var list = addItem(index);
	
	function addItem(index){
		console.log("index "+index);
		if(index < array.length){
			return {value:array[index],rest:addItem(++index)}
		}
		else if(index ===array.length){
			return null;
		}
			
	}
	return list;
}
var arr = [1,2,3];
var lista = arrayToList(arr);
console.log(lista);