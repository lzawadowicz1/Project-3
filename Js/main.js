  $(document).ready( function() {

    // sets a counter so we know which image was appended last
    // and which image should be appended next
    var animalLoop = 1;

    // when you click on #animal-button do the stuff inside of the curly braces
    $("#splat-button").click( function() {

      // check to see the current count of the animalLoop variable, if it matches
      // then do the stuff inside of the curly braces. If it does not match then
      // the function will move on to the following "else if" statement
      if (animalLoop === 1) {

        // creates a new image element using a javascript variable
        // so that we can target it and apply some css to the
        // image before it gets appended to #animals-container
        var animal = $("<img class='animal' src='Images/splat_1.png'>");

        // applies some css to the animal image before it gets
        // appended to #animals-container.
        animal.css({
          // Math.random() returns a value between 0 and 1, so we
          // have to multiply it by 100 to get a value that can be
          // used as a percentage. Then we have to add the actual
          // percentage unit to make it work.
          "top": Math.random() * 100 + "%",
          "left": Math.random() * 100 + "%"
        })

        // appends the image to the #animals-container div
        $("#splat-container").append(animal);

        // this increments the value of the animalLoop variable by 1
        animalLoop++;

      // check to see the current count of the animalLoop variable, if it matches
      // then do the stuff inside of the curly braces. If it does not match then
      // the function will move on to the following "else" statement.
      } else if (animalLoop === 2) {

        // appends the image to the #animals-container div
        var animal = $("<img class='animal' src='Images/splat_2.png'>");

        // applies some css to the animal image before it gets
        // appended to #animals-container.
        animal.css({

          // Math.random() returns a value between 0 and 1, so we
          // have to multiply it by 100 to get a value that can be
          // used as a percentage. Then we have to add the actual
          // percentage unit to make it work.
          "top": Math.random() * 100 + "%",
          "left": Math.random() * 100 + "%"
        })

        // appends the image to the #animals-container div
        $("#splat-container").append(animal);

        // this increments the value of the animalLoop variable by 1
        animalLoop++;

      // no more checking the animalLoop variable. This "else" statment
      // will run automatically if none of the previous "if" or "else if"
      // statements' criteria are met.
      } else {

        // appends the image to the #animals-container div
        var animal = $("<img class='animal' src='Images/splat_3.png'>");

        // applies some css to the animal image before it gets
        // appended to #animals-container.
        animal.css({

          // Math.random() returns a value between 0 and 1, so we
          // have to multiply it by 100 to get a value that can be
          // used as a percentage. Then we have to add the actual
          // percentage unit to make it work.
          "top": Math.random() * 100 + "%",
          "left": Math.random() * 100 + "%"
        })

        // appends the image to the #animals-container div
        $("#splat-container").append(animal);

        // this resets the animalLoop variable's value to 1 so that we can
        // start the loop over again.
        animalLoop = 1;
      }
    });
    $("#clear-button").click(function () {
      location.reload();
       });

  });
