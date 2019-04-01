


function loadDoc() {
    var xhttp = new XMLHttpRequest();
    
    
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        obj = JSON.parse(xhttp.response);
        console.log(obj.quote);
        
        document.getElementById("title").innerHTML = obj.quote;
        
      }
    };
    
    
    xhttp.open("GET", "https://thatsthespir.it/api", true);
    xhttp.send();}