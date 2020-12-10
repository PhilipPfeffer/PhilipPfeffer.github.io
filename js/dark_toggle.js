function dark_button() {
    var body_elem = document.body;
    body_elem.classList.toggle("dark-mode");
    
    var header_elem = document.getElementById('header');
    console.log(header_elem.classList)
    header_elem.classList.toggle("dark-mode");  
  }