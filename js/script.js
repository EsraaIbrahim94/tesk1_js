

var myMain = document.getElementById("main");

window.onscroll = function() {
    var i;
    for(i = 0; i < myMain.children.length; i++) {
        if (document.scrollingElement.scrollTop >= myMain.children[i].offsetTop - 300){
            myMain.children[i].classList.add("active");
        } else if (document.scrollingElement.scrollTop < myMain.children[i].offsetTop - 300){
            myMain.children[i].classList.remove("active");
        }
    }

    if (document.scrollingElement.scrollTop >= 500) {
		upBtn.style.visibility = "visible";
		upBtn.style.opacity = 1;
	} else {
		upBtn.style.opacity = 0;
		upBtn.style.visibility = "hidden";
	}
};
  


   









  






