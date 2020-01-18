

const underkategoriIkon = function(underkategori) {
  const nyArray = alleBedrifter.filter(bedrift => bedrift.underkategori == underkategori);
  bedriftIkon(nyArray);
  document.getElementById("overskrift").innerHTML = underkategori;
}

const kategoriIkon = function(kategori) {
  const nyArray = alleBedrifter.filter(bedrift => bedrift.kategori == kategori);
  bedriftIkon(nyArray);
  document.getElementById("overskrift").innerHTML = kategori;
}

const byIkon = function(by) {
  const nyArray = alleBedrifter.filter(bedrift => bedrift.by == by);
  bedriftIkon(nyArray);
  document.getElementById("overskrift").innerHTML = by;
}

const navnIkon = function(navn) {
  const nyArray = alleBedrifter.filter(bedrift => bedrift.navn == navn);
  bedriftIkon(nyArray);
  document.getElementById("overskrift").innerHTML = "Egendefinert";
}



function search(value){
    document.getElementById("bedrifter").innerHTML = "";
    for (let i=0; i < alleBedrifter.length; i++) {
        if (alleBedrifter[i].underkategori.toLowerCase() === value) {
          underkategoriIkon(alleBedrifter[i].underkategori);
          return;
      }
        else if (alleBedrifter[i].kategori.toLowerCase() === value) {
          kategoriIkon(alleBedrifter[i].kategori);
          return;
        }
        else if (alleBedrifter[i].by.toLowerCase() === value) {
          byIkon(alleBedrifter[i].by);
          return;
      }
        else if (alleBedrifter[i].navn.toLowerCase().includes(value)) {
          navnIkon(alleBedrifter[i].navn);
        }
    }
}


document.getElementById("searchIcon").addEventListener("click", function() {
  if (document.getElementById("mobileHeader").style.display == "none" || document.getElementById("mobileHeader").style.display == "") {
    document.getElementById("mobileHeader").style.display = "block";
    document.getElementById("searchFieldset").style.display = "block";
  }
  else {
    document.getElementById("mobileHeader").style.display = "none";
    document.getElementById("searchFieldset").style.display = "none";
  }
});

document.getElementById("mobileSearch").addEventListener("click", function() {
  document.getElementById("mobileHeader").style.display = "none";
  document.getElementById("searchFieldset").style.display = "none";
  document.getElementById("overskrift").innerHTML = "Ingen resultater";
  document.getElementById("bedrifter").innerHTML = "";
  let value = document.getElementById("searchInput").value;
  value = value.trim().toLowerCase();
 
  search(value);
});
