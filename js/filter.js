var btnContainer = document.getElementById("btnContainer");
var btns = btnContainer.getElementsByClassName("btn");

// Filter according to clicked button
for (var i=0; i<btns.length; i++) {
  btns[i].addEventListener(
    "click",
    function(){
      t = this.textContent;
      if (t=='Show all') t = '';
      w3.filterHTML('#pf-grid', 'li', t);
    }
  );
}

// Add active class to the clicked button (highlight it)
for (var i=0; i<btns.length; i++) {
  btns[i].addEventListener(
    "click",
    function(){
      var btnContainer = document.getElementById("btnContainer");
      var current = btnContainer.getElementsByClassName("active");        // Find the button with the "active" class (there should only be one).
      current[0].className = current[0].className.replace(" active", ""); // Remove its "active" class
      this.className += " active";                                        // Add "active" class to the one we just clicked.
    }
  );
}