function chessBoard(size){
	var whiteSpace = " ";
	var blackSpace = "#";
	var width = 8;
	var heigth = 8;
	var gridString = "";
	var printSpace = false;
	var newLine = "N";
	var lineLength = 0;
	var count = 0;

	 for (var i = 0; i < size; i++) {
	 	for (var j = 0; j < size; j++) {
	 		if(printSpace){
		  		gridString += whiteSpace;
		  		printSpace = false;
		  	}
		  	else if(!printSpace){
		  		gridString += blackSpace;
		  		printSpace = true;	
		  	}
	 	};
	   gridString += "\n";
	   if(((i+1) % 2) === 0){
	     printSpace = false;
	   }else{
	     printSpace = true;
	   }
	 	
	 };
  console.log(gridString);
 }