  // function random number

  function makeRanNum (min, max) {
    return Math.floor((Math.random() * max - min +1) + min);
  }

  // function random color

  function rgb(){
    var color = "rgb(" + makeRanNum(0, 255) + "," + makeRanNum(0, 255) + "," + makeRanNum(0, 255) + ")";
    return color;
  }

  // function change titleBackground

  function changeBackground(item, color) {
    item.css("background-color", color);
  }

  // set up mode mode buttons

    var numSquares = 6;

    //easy button

  $("#easy").on("click", function(){
    numSquares = 3;
    $(".hard-mode").addClass("hidden");
  });
    // hard button

  $("#hard").on("click", function(){
    numSquares = 6;
    $(".hard-mode").removeClass("hidden");
  })

  // function to start Game
  function setGame(){
      // Set title color
      var newColor = rgb();
      $("#title").html(newColor);

  var rightSquare = makeRanNum(0, numSquares -1);
  $(".col").each(function(square){
    // If rightSquare -> rightColor
    if(square === rightSquare) {
      changeBackground($(this), newColor);
      // add click event for right square
      $(this).on("click", function(){
        changeBackground($(".col"), newColor);
        $("#message").text("Right answer!");
        $("#reset").html("Play again");
      });
      // else -> random colors
    } else {
      // if wrong Square -> random color
      changeBackground($(this), rgb());
      // add click event for wrong square
      $(this).on("click", function(){
        changeBackground($(this), "white");
        $("#message").html("Try again!");
      })
    }
  })
}

// start the game!

setGame();

// click event to reset game

  $("#reset").on("click", function(){
    $(".col").off();
    $("#message").html("");
    $("#reset").html("Change Colors")
    setGame();
  })
