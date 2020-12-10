function dark_button() {
    var body_elem = document.body;
    body_elem.classList.toggle("dark-mode");
    
    var elems = document.getElementsByClassName('content');
    for (var i = 0; i < elems.length; i++) {
      if (elems[i].style.borderWidth === "1px") elems[i].style.border = "0px solid #000";
      else elems[i].style.border = "1px solid #333";
    }
  }