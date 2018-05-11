// Business logic
player1Score = parseInt(0);
player2Score = parseInt(0);

function Player1(name) {
  this.name = name;
}

function Player2(name) {
  this.name = name;
}

// UI
$(document).ready(function() {
  $("#startup form").submit(function(event) {
    event.preventDefault();

    var inputtedPlayer1Name = $("input#p1").val();
    var newPlayer1 = new Player1(inputtedPlayer1Name);
    $(".firstplayer").text(inputtedPlayer1Name);
    $("input#p1").val(' ');

    var inputtedPlayer2Name = $("input#p2").val();
    var newPlayer2 = new Player2(inputtedPlayer2Name);
    $(".secondplayer").text(inputtedPlayer2Name);
    $("input#p2").val(' ');


    $("#gameplay").show();
    $("#startup").hide();

  });

  $(".new").click(function() {
    $("#startup").show();
    $("#gameplay").hide();
    player1Score = parseInt(0);
    player2Score = parseInt(0);
    $(".player1Total").text("0");
    $(".player2Total").text("0");
    $(".output1").hide();
    $(".output2").hide();
    $("#roll1").show();
    $("#roll2").show();
  });

  $(".newer").click(function() {
    $("#startup").show();
    $("#gameplay").hide();
    player1Score = parseInt(0);
    player2Score = parseInt(0);
    $(".player1Total").text("0");
    $(".player2Total").text("0");
    $(".output1").hide();
    $(".output2").hide();
    $("#winnerp1").hide()
    $("#winnerp2").hide();
    $("#roll1").show();
    $("#roll2").show();
  });

  $("#roll1").click(function() {
    var random1 = Math.floor((Math.random() * 6) + 1);
    var random11 = Math.floor((Math.random() * 6) + 1);
    $("#roll2").show();
    $("#roll1").hide();
    $("#name").attr("src", "img/die-" + random1 + ".png");
    $("#name1").attr("src", "img/die-" + random11 + ".png");
    $(".output1").show();
    $(".output2").hide();
    $(".score1").text((random1) + ", " + (random11));
    if (random1 != 1 && random11 != 1) {
      diep1 = parseInt((random1) + (random11));
    } else {
      diep1 = parseInt(0);
    }
    player1Score = parseInt((player1Score) + (diep1));
    $(".player1Total").text(player1Score);

    if (player1Score >= 100) {
      $("#winnerp1").show();
      $("#roll2").hide();
      $("#roll1").hide();
      $(".new").hide();
      $(".newer").show();
    }

  });

  $("#roll2").click(function() {
    var random2 = Math.floor((Math.random() * 6) + 1);
    var random22 = Math.floor((Math.random() * 6) + 1);
    $("#roll1").show();
    $("#roll2").hide();
    $("#name2").attr("src", "img/die-" + random2 + ".png");
    $("#name3").attr("src", "img/die-" + random22 + ".png");
    $(".output2").show();
    $(".output1").hide();
    $(".score2").text((random2) + ", " + (random22));
    if (random2 != 1 && random22 != 1) {
      diep2 = parseInt((random2) + (random22));
    } else {
      diep2 = parseInt(0);
    }
    player2Score = parseInt((player2Score) + (diep2));
    $(".player2Total").text(player2Score);

    if (player2Score >= 100) {
      $("#winnerp2").show();
      $("#roll2").hide();
      $("#roll1").hide();
      $(".new").hide();
      $(".newer").show();
    }
  });
  $("#instructions").click(function() {
    $("#instruct").toggle();
  });
})
