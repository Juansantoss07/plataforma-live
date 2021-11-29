 
  var modal3 = document.getElementById("myModal3");
  var btn3 = document.getElementById("myBtn3");
  var span = document.getElementsByClassName("close")[0];
  btn.onclick = function() {
    modal3.style.display = "block";
  }

  span.onclick = function() {
    modal3.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal3) {
      modal3.style.display = "none";
    }
  };

  var modal4 = document.getElementById("myModal4");
  var btn4 = document.getElementById("myBtn4");
  var span = document.getElementsByClassName("close")[1];
  btn4.onclick = function() {
    modal4.style.display = "block";
  }

  span.onclick = function() {
    modal4.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal4) {
      modal4.style.display = "none";
    }
  };

