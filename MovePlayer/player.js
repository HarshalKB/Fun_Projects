const player = document.querySelector(".player");

let move = 10;

window.addEventListener("load", () => {
    player.style.position = "absolute";
    player.style.top = 0;
    player.style.left = 0;
})

window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
            if (parseInt(player.style.top) > 0)  {
                player.style.top = parseInt(player.style.top) - move + "px";                
            }
            break;
        
        case "ArrowDown":
            if (parseInt(player.style.top) < 700)  {
                player.style.top = parseInt(player.style.top) + move + "px";                
            }
            break;

        case "ArrowLeft":
            if (parseInt(player.style.left) > 0)  {
                player.style.left = parseInt(player.style.left) - move + "px";                
            }
            break;
            
        case "ArrowRight":
            if (parseInt(player.style.left) < 1650)  {
                player.style.left = parseInt(player.style.left) + move + "px";                
            }
            break;
    }
})