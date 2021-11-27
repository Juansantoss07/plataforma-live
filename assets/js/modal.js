 
  var modal = document.getElementById("myModal1");
  var btn = document.getElementById("myBtn1");
  var span = document.getElementsByClassName("close")[0];
  btn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  var modal2 = document.getElementById("myModal2");
  var btn2 = document.getElementById("myBtn2");
  var span = document.getElementsByClassName("close")[1];
  btn2.onclick = function() {
    modal2.style.display = "block";
  }

  span.onclick = function() {
    modal2.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
  };

