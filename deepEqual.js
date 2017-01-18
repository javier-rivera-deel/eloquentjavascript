function deepEqual(valueA,valueB){
	console.log(typeof valueA,typeof valueB);
	if(valueA && valueB){
		if(typeof valueA === "object" && typeof valueB === "object"){
			//check length of properties
			var countA = 0, countB = 0;
			for(var propA in valueA){
				countA += 1;
			}
			for(var propB in valueB){
				countB += 1;
			}
			deepEqual(countA,countB);
				/*
				//iteracion produnda dentro de un objeto
				if(typeof valueA[propA] === "object"){
					console.log("se detecto objeto: "+prop);
					check(ob[prop]);
				}
				else{ 
					console.log("propiedad: "+prop+",valor: "+ob[prop]);
				}
				*/
		
		}else if(valueA === valueB){
			return true;
		}else{
			return false;
		}
		
	
	}else{
		return false;
	}

	// var obj = {
	// 	here:{is:"an"},
	// 	object:2
	// };
	// var otherObj = {
	// 	here: 1,
	// 	object: 2
	// };
	
	//asumiendo que ambos son objetos
/*
	for(var propA in objectA){

		if(typeof objectA[propA] === "object"){
			var newObj = objectA[propA];
			console.log(newObj);
			deepEqual(newObj);
		}else{

		}



		/*
		//var valA = objectA[propA];

		//for(var propB in objectB){
			var valB = objectB[propB]
			if(typeof propA === typeof propB){
				if(valA === valB){
					return true;
				}

			}
		//}

		primero comparo tipos de propiedad,
			si se llaman iguales
			si ambos son el mismo typeof



		*/
	//}
	
	
	
}


//object for testing
var obj = {
	here:{is:"an"},
	object:2,
	obj2 : {
		prop1:1,
		prop2:{
			prop11:11,
			prop22:22,
			prop33:{
				prop4:4
			}
		}
	}
};
var otherObj = {
	here: 1,
	object: 2
};
var obja = null;
var objb = undefined
 console.log("ready");
deepEqual(obj,otherObj);
/*
if(!obja){
	console.log("value is undefined");
}

if(obja && otherObj){
	if(typeof obja === "object" && typeof otherObj === "object"){
		console.log("both are objects");
	}
	else{
		console.log("not the same types")
	}
}else{
	console.log("a value is null or undefined");
}
console.log(obj === otherObj);
//console.log(typeof obj.here);
//console.log(deepEqual(obj,undefined));
*/


///////////////////TESTS////////////////////////////////
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
