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
		highlightPlayer(1);
	}

	$(".gameCell").click(function(){
		var urlIcon = "";
		var clickedLine = this.id[0];
		var clickedColumn = this.id[1];
		var point = 0;
		var result = 0;

		//Avoiding making two moves in the same cell
		$("#"+this.id).off();

		if (playNumber%2 == 1) {
			urlIcon = "url('images/cross.png')";
			point = -1;
			highlightPlayer(2);
		} else {
			urlIcon = "url('images/circle.png')";
			point = 1;
			highlightPlayer(1);
		}

		playNumber++;

		$("#"+this.id).css("background", urlIcon);

		arrayGame[clickedLine][clickedColumn] = point;

		result = validateResult();

		if (result == 3 || result == -3) {
			EndGame(result);
		} else if (playNumber == 10) {
			$("#alertWindow").css("display", "block");
		}
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

	function highlightPlayer(playerNumber) {
		var playerInEvidence = "";
		var anotherPlayer = "";
		var fontColor = "";

		playerInEvidence = "#nicknamePlayer"+playerNumber;

		if (playerNumber == 1) {
			fontColor = "#ef1d30";
			anotherPlayer = "#nicknamePlayer2";
		} else {
			fontColor = "#0071bc";
			anotherPlayer = "#nicknamePlayer1";
		}

		$(playerInEvidence).css("color", "white");
		$(playerInEvidence).css("padding", "0px 25px");
		$(playerInEvidence).css("background", fontColor);
		$(playerInEvidence).css("font-weight", "bold");

		$(anotherPlayer).css("color", "black");
		$(anotherPlayer).css("padding", "0px");
		$(anotherPlayer).css("background", "");
		$(anotherPlayer).css("font-weight", "normal");
	}

	function validateResult() {
		var result = 0;

		//Horizontal
		result = arrayGame['a'][1] + arrayGame['a'][2] + arrayGame['a'][3]
		if (result == 3 || result == -3) {
			return result;
		}

		result = arrayGame['b'][1] + arrayGame['b'][2] + arrayGame['b'][3]
		if (result == 3 || result == -3) {
			return result;
		}

		result = arrayGame['c'][1] + arrayGame['c'][2] + arrayGame['c'][3]
		if (result == 3 || result == -3) {
			return result;
		}

		//Vertical
		result = arrayGame['a'][1] + arrayGame['b'][1] + arrayGame['c'][1]
		if (result == 3 || result == -3) {
			return result;
		}

		result = arrayGame['a'][2] + arrayGame['b'][2] + arrayGame['c'][2]
		if (result == 3 || result == -3) {
			return result;
		}

		result = arrayGame['a'][3] + arrayGame['b'][3] + arrayGame['c'][3]
		if (result == 3 || result == -3) {
			return result;
		}

		//Diagonal
		result = arrayGame['a'][1] + arrayGame['b'][2] + arrayGame['c'][3]
		if (result == 3 || result == -3) {
			return result;
		}

		result = arrayGame['a'][3] + arrayGame['b'][2] + arrayGame['c'][1]
		if (result == 3 || result == -3) {
			return result;
		}

		return 0;
	}

	function EndGame(result) {
		var msgAlert = "";

		if (result == -3) {
			msgAlert = "Congrats "+$("#nicknamePlayer1").html()+", you are the winner!";
		} else {
			msgAlert = "Congrats "+$("#nicknamePlayer2").html()+", you are the winner!";
		}
		
		$("#alertMessage").html("<b>"+msgAlert+"</b>");
		$("#alertWindow").css("display", "block");

		$(".gameCell").off();
	}
});