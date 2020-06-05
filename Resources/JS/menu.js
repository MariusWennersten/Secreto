


document.getElementById("menuIcon").addEventListener("click", function() {
  if (document.getElementById("menu").style.display == "block") {
    document.getElementById("menu").style.display = "none";
  }
  else {
    document.getElementById("menu").style.display = "block";
  }
});

// Legger kategoriene og underkategoriene inn i menyen
for (let i = 0; i < kategoriArray.length; i++) {
  const idk = document.createElement("p");
  idk.setAttribute("id", kategoriArray[i].kategori + "Menu");
  idk.setAttribute("class", "triangleList");
  idk.innerHTML = kategoriArray[i].kategori;
  document.getElementById("menuList").appendChild(idk);

  const mby = document.createElement("div");
  mby.setAttribute("id", kategoriArray[i].kategori + "Nest");
  mby.setAttribute("class", "menuNest");
  document.getElementById(kategoriArray[i].kategori + "Menu").appendChild(mby);

  for (let j = 0; j < alleBedrifter.length; j++) {
    if (alleBedrifter[j].kategori === kategoriArray[i].kategori 
      && !document.getElementById(alleBedrifter[j].underkategori)) {
     
      const hmm = document.createElement("p");
      hmm.setAttribute("id", alleBedrifter[j].underkategori);
      hmm.innerHTML = alleBedrifter[j].underkategori;
      document.getElementById(kategoriArray[i].kategori + "Nest").appendChild(hmm);
    }
  }
  // Viser underkategoriene når kategorien blir trykket på
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

// Hvis brukeren trykker på en underkategori blir den tatt til underkategoriens side
for (let i = 0; i < underkatArray.length; i++) {
  const underkat = underkatArray[i].underkategori;
  
  document.getElementById(underkat).addEventListener("click", function() {
    document.getElementById("bedrifter").innerHTML = "";
    document.getElementById("overskrift").innerHTML = underkat;
    underkategoriIkon(underkat);
    document.getElementById("menu").style.display = "none";
    });
  
}