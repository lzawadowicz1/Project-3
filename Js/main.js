  $(document).ready( function() {

    var animalLoop = 1;

    $("#splat-button").click( function() {
      if (animalLoop === 1) {
        var animal = $("<img class='animal cat' src='Images/splat_1.png'>");
        animal.css({
          "top": Math.random() * 100 + "%",
          "left": Math.random() * 100 + "%"
        })

        $("#splat-container").append(animal);
        animalLoop++;
      }

      else if (animalLoop === 2) {
        var animal = $("<img class='animal dog' src='Images/splat_2.png'>");
        animal.css({
          "top": Math.random() * 100 + "%",
          "left": Math.random() * 100 + "%"
        })

        $("#splat-container").append(animal);
        animalLoop++;
      }

      else {
        var animal = $("<img class='animal mouse' src='Images/splat_3.png'>");
        animal.css({
          "top": Math.random() * 100 + "%",
          "left": Math.random() * 100 + "%"
        })

        $("#splat-container").append(animal);
        animalLoop = 1;
      }
    });

       $("#clear-button").click(function () {
        location.reload();
       });

//        $("<audio></audio>").attr({
//        'src':'Audio/car_sound.wav',
//        'volume':0.2,
//        'autoplay':'autoplay'
//    }).appendTo("body");
// audioElement.loop=true;



  });
