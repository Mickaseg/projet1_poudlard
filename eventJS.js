    function lirelasuite(num) {
      const x = document.getElementById("Ligne10_article"+ num);
      if (x.className === "TexteCache") {
        x.className += " TexteAffiche";
      } else {
        x.className = "TexteCache";
      }
    }
