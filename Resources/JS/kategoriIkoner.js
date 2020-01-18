

for (let i = 0; i < kategoriArray.length; i++) {
    
    const cat = kategoriArray[i].kategori;
    document.getElementById(cat + "Forside").addEventListener("click", function() {
        document.getElementById("bedrifter").innerHTML = "";
        document.getElementById("overskrift").innerHTML = cat;
        kategoriIkon(cat);
        document.getElementById("menu").style.display = "none";
        });
    
}