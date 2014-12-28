function rollFruit(s){
	if(s == 1){
		var v = 60;
		var timer = 50;
		var floor = 480;
		var ceiling = -160;

		as1 = setInterval(function(){roll1($("#a1"))}, timer);

		as2 = setInterval(function(){
			a2_position = $("#a2").position();
			if(a2_position.top >= floor){
				a2_position.top = ceiling;
			}
			$("#a2").css({top:(a2_position.top + v), left: 0, position:'absolute', width: 200, height: 160});
		}, timer);

		as3 = setInterval(function(){
			a3_position = $("#a3").position();
			if(a3_position.top >= floor){
				a3_position.top = ceiling;
			}
			$("#a3").css({top:(a3_position.top + v), left: 0, position:'absolute', width: 200, height: 160});	
		}, timer);

		as4 = setInterval(function(){
			a4_position = $("#a4").position();
			if(a4_position.top >= floor){
				a4_position.top = ceiling;
			}
			$("#a4").css({top:(a4_position.top + v), left: 0, position:'absolute', width: 200, height: 160});	
		}, timer);

		// bs1 = setInterval(function(){
		// 	b1_position = $("#b1").position();
		// 	if(b1_position.top >= floor){
		// 		b1_position.top = ceiling;
		// 	}
		// 	$("#b1").css({top:(b1_position.top + v), left: 220, position:'absolute', width: 200, height: 160});	
		// }, timer);

		// bs2 = setInterval(function(){
		// 	b2_position = $("#b2").position();
		// 	if(b2_position.top >= floor){
		// 		b2_position.top = ceiling;
		// 	}
		// 	$("#b2").css({top:(b2_position.top + v), left: 220, position:'absolute', width: 200, height: 160});	
		// }, timer);

		// bs3 = setInterval(function(){
		// 	b3_position = $("#b3").position();
		// 	if(b3_position.top >= floor){
		// 		b3_position.top = ceiling;
		// 	}
		// 	$("#b3").css({top:(b3_position.top + v), left: 220, position:'absolute', width: 200, height: 160});	
		// }, timer);

		// bs4 = setInterval(function(){roll2($("#b4"))}, timer);

		function roll1(object){
			position_current = object.position();
			if(position_current.top >= floor){
				position_current.top = ceiling;
			}
			object.css({top:(position_current.top + v), left: 0, position:'absolute', width: 200, height: 160});
		}

		// function roll2(object){
		// 	position_current = object.position();
		// 	if(position_current.top >= floor){
		// 		position_current.top = ceiling;
		// 	}
		// 	object.css({top:(position_current.top + v), left: 220, position:'absolute', width: 200, height: 160});
		// }
	}else{
		var a = 1;
		var v = 60;
		var minV = 3;
		var timer = 50;
		var floor = 480;
		var ceiling = -160;
		
		clearInterval(as1);
		clearInterval(as2);
		clearInterval(as3);
		clearInterval(as4);

		a1_y = $("#a1").position().top;
		a2_y = $("#a2").position().top;
		a3_y = $("#a3").position().top;
		a4_y = $("#a4").position().top;


		var fruit_a = ["#a1", "#a2", "#a3", "#a4"];
		var fruity_rank = sortFruit([a1_y, a2_y, a3_y, a4_y]);
		var fruit_ay = [a1_y, a2_y, a3_y, a4_y];
		var fruit_rank = getFruitRank(fruit_ay, fruity_rank, fruit_a);
		var stop1Y = getStopY(fruit_rank);
		console.log(result);
		
		as1 = setInterval(function(){
			a1_position = $("#a1").position();
			if(a1_position.top >= floor){
				a1_position.top = ceiling;
			}
			if(v > minV){
				v -= a;
			}else{
				v = minV;
				if(stop1Y[0] == checkPosition(a1_position.top)){
					a1_position.top = stop1Y[0];
					clearInterval(as1);
				}
			}
			$("#a1").css({top:(a1_position.top + v), left: 0, position:'absolute', width: 200, height: 160});	
		}, timer);
		
		as2 = setInterval(function(){
			a2_position = $("#a2").position();
			if(a2_position.top >= floor){
				a2_position.top = ceiling;
			}
			if(v > minV){
				v -= a;
			}else{
				v = minV;
				if(stop1Y[1] == checkPosition(a2_position.top)){
					a2_position.top = stop1Y[1];
					clearInterval(as2);
				}
			}
			$("#a2").css({top:(a2_position.top + v), left: 0, position:'absolute', width: 200, height: 160});	
		}, timer);

		as3 = setInterval(function(){
			a3_position = $("#a3").position();
			if(a3_position.top >= floor){
				a3_position.top = ceiling;
			}
			if(v > minV){
				v -= a;
			}else{
				v = minV;
				if(stop1Y[2] == checkPosition(a3_position.top)){
					a3_position.top = stop1Y[2];
					clearInterval(as3);
				}
			}
			$("#a3").css({top:(a3_position.top + v), left: 0, position:'absolute', width: 200, height: 160});	
		}, timer);

		as4 = setInterval(function(){
			a4_position = $("#a4").position();
			if(a4_position.top >= floor){
				a4_position.top = ceiling;
			}
			if(v > minV){
				v -= a;
			}else{
				v = minV;
				if(stop1Y[3] == checkPosition(a4_position.top)){
					a4_position.top = stop1Y[3];
					clearInterval(as4);
				}
			}
			$("#a4").css({top:(a4_position.top + v), left: 0, position:'absolute', width: 200, height: 160});	
		}, timer);

		fixPosition();
		var resultFruit = getMiddleFruit();
	}
	
}

function checkPosition(position){
	if(Math.abs(position - 0) <= 10){
		return 0;
	}else if(Math.abs(position - 160) <= 10){
		return 160;
	}else if(Math.abs(position - 320) <= 10){
		return 320;
	}else if(Math.abs(position + 160) <= 10){
		return (-160);
	}else{
		return 1000;
	}
}

function sortFruit(arrayFruit_y){
	// var oldFruit_y = arrayFruit_y;
	var newFruit_y = arrayFruit_y.sort(sortNumber);
	return newFruit_y;
}

function getFruitRank(oldArray, newArray, nameArray){
	console.log(oldArray);
	console.log(nameArray);
	console.log(newArray);
	var rank = [];
	for(var j=0; j<newArray.length; j++){
		for(var k=0; k<oldArray.length; k++){
			if(newArray[j] == oldArray[k]){
				// console.log(j + "," + k + ":" + oldArray[k] + "," + nameArray[k]);
				rank.push(nameArray[k]);
			}
		}
	}
	return rank;
}

function getStopY(rankFruit){
	switch(rankFruit[0]){
		case "#a1":
			result.push($("#a3").html());
			return [-160, 0, 160, 320];
		case "#a2":
			result.push($("#a4").html());
			return [320, -160, 0 ,160];
		case "#a3":
			result.push($("#a1").html());
			return [160, 320, -160, 0];
		case "#a4":
			result.push($("#a2").html());
			return [0, 160, 320, -160];
		default:
			return null;
	}
}

function sortNumber(a,b){
	return a - b
}

function fixPosition(){
	var fruit = [$("#a1"), $("#a2"), $("#a3"), $("#a4"), $("#b1"), $("#b2"), $("#b3"), $("#b4"), $("#c1"), $("#c2"), $("#c3"), $("#c4")];
	for(var i=0; i<fruit.length; i++){
		var position = fruit[i].position().top;
		if(Math.abs(position + 160) <= 10){
			fruit[i].position().top = -160;
		}else if(Math.abs(position - 0) <= 10){
			fruit[i].position().top = 0;
		}else if(Math.abs(position - 160) <= 10){
			fruit[i].position().top = 160;
		}else if(Math.abs(position - 320) <= 10){
			fruit[i].position().top = 320;
		}else{
			console.log("error");
			console.log(position);
			Math.abs(10 + 160);
			Math.abs(position - 0);
			Math.abs(position - 160)
			Math.abs(position - 320)
		}
		// console.log(fruit[i].position().top);
	}
}

function getMiddleFruit(){
	var fruit = [$("#a1"), $("#a2"), $("#a3"), $("#a4"), $("#b1"), $("#b2"), $("#b3"), $("#b4"), $("#c1"), $("#c2"), $("#c3"), $("#c4")];
	for(var i=0; i<fruit.length; i++){
		var html = fruit[i].html();

	}
}
