function range(start, end, step){
  var fullrange = [];
  if(step < 0){
    for (var i = end; i <= start ; i-=step) {
		fullrange.unshift(i);
	};
	return fullrange;
  }else{
    for (var j = start; j <= end ; j+=step) {
		fullrange.push(i);
	};
	return fullrange;
  }
}
