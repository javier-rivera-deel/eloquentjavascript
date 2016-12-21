function isEven(number){
	number -= 2;
	if(number === 0){
		return true;
	}else if(number === 1){
		return false;
	}else{
		return isEven(number);
	}
}