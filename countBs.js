function countBs(phrase){
	var count = 0;
	for (var i = 0; i < phrase.length; i++) {
		if(phrase.charAt(i) === "B"){
			count++;
		}
	}
	return count;
}

function countChar(phrase, character){
	var count = 0; 
	for (var i = 0; i < phrase.length; i++) {
		if(phrase.charAt(i) === character){
			count++;
		}
	}
	return count;
}