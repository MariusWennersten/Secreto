


document.getElementById("menuIcon").addEventListener("click", function() {
  if (document.getElementById("menu").style.display == "block") {
    document.getElementById("menu").style.display = "none";
  }
  else {
    document.getElementById("menu").style.display = "block";
  }
});

// Legger kategoriene inn i menyen
for (let i = 0; i < kategoriArray.length; i++) {
  const kategori1 = kategoriArray[i].kategori;
  document.getElementById(kategori1 + "Menu").addEventListener("click", function() {
    if (document.getElementById(kategori1 + "Nest").style.display == "block") {
      document.getElementById(kategori1 + "Nest").style.display = "none";
    }
    else {
      document.getElementById(kategori1 + "Nest").style.display = "block";
      for (let i = 0; i < kategoriArray.length; i++) {
        const kategori2 = kategoriArray[i].kategori;
        if (kategori1 !== kategori2) {
        document.getElementById(kategori2 + "Nest").style.display = "none";
        }
      
      }
    }
  });
  
}

// Legger underkategoriene under sine respektive kategorier i menyen
for (let i = 0; i < underkatArray.length; i++) {
  const nest = document.createElement("p");
  nest.setAttribute("id", underkatArray[i].underkategori);
  nest.innerHTML = underkatArray[i].underkategori;
  document.getElementById(underkatArray[i].kategori + "Nest").appendChild(nest);
  const underkat = underkatArray[i].underkategori;
  
  document.getElementById(underkat).addEventListener("click", function() {
    document.getElementById("bedrifter").innerHTML = "";
    document.getElementById("overskrift").innerHTML = underkat;
    underkategoriIkon(underkat);
    document.getElementById("menu").style.display = "none";
    });
  
}