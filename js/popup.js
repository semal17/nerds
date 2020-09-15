var button = document.querySelector(".modal-button");
var popup = document.querySelector(".modal");
var close = document.querySelector(".modal-close");

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show"); 
  
});

close.addEventListener("click", function (evt) {
         evt.preventDefault();
         popup.classList.remove("modal-show"); 
         
     });

     window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
        
        }
        }
        });      
