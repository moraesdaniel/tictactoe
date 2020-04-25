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

		playGame(nicknamePlayer1, nicknamePlayer2);
	});

	function playGame(nicknamePlayer1, nicknamePlayer2) {
		$("#initialPage").hide();
		$("#gameStage").show();
		$("#nicknamePlayer1").html(nicknamePlayer1);
		$("#nicknamePlayer2").html(nicknamePlayer2);
	}
});