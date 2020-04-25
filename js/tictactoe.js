var playNumber = 0;

var arrayGame = Array(3);

arrayGame['a'] = Array(3);
arrayGame['b'] = Array(3);
arrayGame['c'] = Array(3);

$(document).ready(function(){
	$("#btnPlay").click(function(){
		var nicknamePlayer1 = $("#inputPlayer1").val();
		var nicknamePlayer2 = $("#inputPlayer2").val();
		
		//Validations
		if (nicknamePlayer1 == "") {
			alert("Insert the nickname for player 1!");
			return false;
		}
		if (nicknamePlayer2 == "") {
			alert("Insert the nickname for player 2!");
			return false;
		}

		//Initializing the game
		playGame(nicknamePlayer1, nicknamePlayer2);
	});

	function playGame(nicknamePlayer1, nicknamePlayer2) {
		$("#initialPage").hide();
		$("#gameStage").show();
		$("#nicknamePlayer1").html(nicknamePlayer1);
		$("#nicknamePlayer2").html(nicknamePlayer2);
		playNumber = 1;
		clearArrayGame();
	}

	$(".gameCell").click(function(){
		var urlIcon = "";
		var clickedLine = this.id[0];
		var clickedColumn = this.id[1];
		var point = 0;

		//Avoiding making two moves in the same cell
		if (arrayGame[clickedLine][clickedColumn] != 0) {
			return false;
		}

		if (playNumber%2 == 0) {
			urlIcon = "url('images/circle.png')";
			point = 1;
		} else {
			urlIcon = "url('images/cross.png')";
			point = -1;
		}

		playNumber++;

		$("#"+this.id).css("background", urlIcon);

		arrayGame[clickedLine][clickedColumn] = point;
	});

	function clearArrayGame() {
		arrayGame['a'][1] = 0;
		arrayGame['a'][2] = 0;
		arrayGame['a'][3] = 0;

		arrayGame['b'][1] = 0;
		arrayGame['b'][2] = 0;
		arrayGame['b'][3] = 0;

		arrayGame['c'][1] = 0;
		arrayGame['c'][2] = 0;
		arrayGame['c'][3] = 0;
	}
});