const button = document.getElementsByClassName("menu__btnn");
      	
for (i = 0; i < button.length; i++) {
	button[i].addEventListener('click', toggleItem, false);}

function toggleItem() {		  
         
     event.preventDefault();
     const { hidetext, showtext } = event.currentTarget.dataset;
     if (event.currentTarget.textContent === showtext) {
         event.currentTarget.textContent = hidetext;
		 this.style.background="#F4F4F6";
		 this.style.color="#A3A496";
     } 
	  else {
         event.currentTarget.textContent = showtext;
		 this.style.background="#E8F7EC";
		 this.style.color="#80AC6F";
        }
        
};

	
	
	
	