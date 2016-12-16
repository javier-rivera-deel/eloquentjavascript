
function fizzbuzz_ternary(){
	for (var i = 0; i <= 100; i++) {
		console.log((i % 3) == 0 ? "fizz" : i);
		console.log((i % 5) == 0 ? "buzz" : i);
		console.log(((i % 3) == 0) && ((i % 5) == 0) ? "fizz" : i);
	};
};
