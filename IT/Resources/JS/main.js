


document.getElementById("menuIcon").addEventListener("click", function() {
  if (document.getElementById("menu").style.display == "block") {
    document.getElementById("menu").style.display = "none";
  }
  else {
    document.getElementById("menu").style.display = "block";
  }
});


const menuClickCreator = function(kategori) {
  document.getElementById(kategori + "Menu").addEventListener("click", function() {
    if (document.getElementById(kategori + "Nest").style.display == "block") {
      document.getElementById(kategori + "Nest").style.display = "none";
    }
    else {
      document.getElementById(kategori + "Nest").style.display = "block";
    }
  });
}

menuClickCreator("mat");
menuClickCreator("helse");
menuClickCreator("velvere");
