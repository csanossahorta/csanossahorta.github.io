var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


function openNav() {
    if (window.matchMedia("(min-width:600px)").matches) {
        document.getElementById("sidenav").style.display = "block";
    }
    else {
        document.getElementById("sidenav").style.display = "none";
    }
}

function closeNav() {
  document.getElementById("sidenav").style.display = "none";
}


//Get the button
var mybutton = document.getElementById("return-to-top");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
   if (window.matchMedia("(max-width:600px)").matches) { 
      if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {   
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
   }
    else{
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
