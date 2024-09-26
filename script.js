var buttonArray = document.querySelectorAll(".btn"); 
for (let i = 0; i < buttonArray.length; i++) {
  const buttonElement = buttonArray[i];
  buttonElement.addEventListener("click", function() {
    makeSound(buttonElement.id);
    buttonAnimation(buttonElement.id);
  });
  
}


document.addEventListener("keydown", function(event) {
    var validKeysArray = ["w", "a", "s", "d"];
    var pressedKey = event.key.toLowerCase();
    if (validKeysArray.includes(pressedKey)) {
      makeSound(pressedKey);
      buttonAnimation(pressedKey);
    } else {
      console.log(pressedKey);
    }
});


function makeSound(key) {
    var audio;

    switch (key) {
        case "w":
            audio = new Audio("./assets/sounds/moaning.mp3");
            audio.play();
            break;
    
        case "a":
            audio = new Audio("./assets/sounds/cat-laugh.mp3");
            audio.play();
            break;    
        case "s":
            audio = new Audio("./assets/sounds/abbey-bsdk-sun.mp3");
            audio.play();
            break;
        case "d":
            audio = new Audio("./assets/sounds/amit-ji.mp3");
            audio.play();
            break;
        default:
            break;
    }
    
}


function buttonAnimation(key) {

    var activeButtonClassArray = document.querySelector("." + key).classList;
  
    activeButtonClassArray.add("pressed");
  
    setTimeout(function() {
      activeButtonClassArray.remove("pressed");
    }, 250);
  
  }
  