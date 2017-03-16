$(document).ready(function() {
	ws = new WebSocket("ws://localhost:8080");

	ws.onopen = function() {
	};
	ws.onclose = function() {};

	ws.onmessage = function(evt) {
		console.log(evt.data);
		$('#content').append("<h1> " + evt.data + " </h1>");
		var message = JSON.parse(evt.data);

 // code to update the page given the incoming message

 // send a dummy message back to initiate
 // the onmessage callback again
 ws.send("next message please!");


}
});




//Recuperation des touches clavier
$(document).keydown(function (e) {
	/*//s
 	if (e.keyCode == 83){
 		//if (notedo == false){
			ws.send("s");
		//	notedo = true;  
		//}
	}
	//d
	if (e.keyCode == 68){
		//if (notere == false){
			ws.send("d");
			//notere = true;  
		//}
 	}
 	//r
 	if (e.keyCode == 82){
		//if (notere == false){
			ws.send("r");
			//notere = true;  
		//}
 	}
 	//f
	if (e.keyCode == 70){
		//if (notemi == false){
			ws.send("f");
			//notemi = true;  
		//}
	}
	//t
 	if (e.keyCode == 84){
		//if (notere == false){
			ws.send("t");
			//notere = true;  
		//}
 	}
	//g
	if (e.keyCode == 71){
	//	if (notefa == false){
			ws.send("g");
		//	notefa = true;
		//  }
	}
	//h
	if (e.keyCode == 72){
		//if (notesol == false){
			ws.send("h");
		//	notesol = true; 
		//	 }
	}
	//u
 	if (e.keyCode == 85){
		//if (notere == false){
			ws.send("u");
			//notere = true;  
		//}
 	}
	//j
	if (e.keyCode == 74){
		//if (notela == false){
			ws.send("j");
		//	notela = true;  
		//}
	}
	//i
 	if (e.keyCode == 73){
		//if (notere == false){
			ws.send("i");
			//notere = true;  
		//}
 	}
	//k
	if (e.keyCode == 75){
	//	if (notesi == false){
			ws.send("k");
		//	notesi = true;  
	//	}
	}
	//o
 	if (e.keyCode == 79){
		//if (notere == false){
			ws.send("o");
			//notere = true;  
		//}
 	}
 	//l
 	if (e.keyCode == 76){
		//if (notere == false){
			ws.send("l");
			//notere = true;  
		//}
 	}*/
 });

/*$(document).keyup(function (e) {
	
 	if (e.keyCode == 83){
		ws.send("fin do");
		notedo = false;
	}
 	if (e.keyCode == 68){
 		ws.send("fin re");
		notere = false;
 	}
	if (e.keyCode == 70){
		ws.send("fin mi");
		notemi = false;
	}
	if (e.keyCode == 71){
		ws.send("fin fa");
		notefa = false;	
	}
	if (e.keyCode == 72){
		ws.send("fin sol");
		notesol = false;
	}
	if (e.keyCode == 74){
		ws.send("fin la");
		notela = false;
	}
	if (e.keyCode == 75){
		ws.send("fin si");
		notesi = false;
	}
 });
*/

function send(note){
	ws.send(note);
	console.log(note);
}

