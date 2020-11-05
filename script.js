document.addEventListener("keydown", function(event) {
    if(event.code == "KeyA") {
        let sound = new Audio("./audio/A.mp3") ;
        sound.play();
    } else if (event.code == "KeyS") {
        let sound = new Audio("./audio/S.mp3") ;
        sound.play();
    } else if (event.code == "KeyD") {
        let sound = new Audio("./audio/D.mp3") ;
        sound.play();
    } else if (event.code == "KeyF") {
        let sound = new Audio("./audio/F.mp3") ;
        sound.play();
    } else if (event.code == "KeyG") {
        let sound = new Audio("./audio/G.mp3") ;
        sound.play();
    } else if (event.code == "KeyH") {
        let sound = new Audio("./audio/H.mp3") ;
        sound.play();
    } else if (event.code == "KeyJ") {
        let sound = new Audio("./audio/J.mp3") ;
        sound.play();
    } else if (event.code == "KeyW") {
        let sound = new Audio("./audio/W.mp3") ;
        sound.play();
    } else if (event.code == "KeyE") {
        let sound = new Audio("./audio/E.mp3") ;
        sound.play();
    } else if (event.code == "KeyT") {
        let sound = new Audio("./audio/T.mp3") ;
        sound.play();
    } else if (event.code == "KeyY") {
        let sound = new Audio("./audio/Y.mp3") ;
        sound.play();
    } else if (event.code == "KeyU") {
        let sound = new Audio("./audio/U.mp3") ;
        sound.play();
    } else {
        console.log("There is no piano sound for the entered key!")
    }


})
