

const bedriftIkon = function(array) {
  for (let i = 0; i < array.length; i++) {
    const underDiv = document.createElement("div");

    document.getElementById("bedrifter").appendChild(underDiv);
    const bedriftsbilde = document.createElement("img");
    bedriftsbilde.src = array[i].bilde;
    const bildeDiv = document.createElement("div");
    underDiv.setAttribute("class", "underDiv");

    const navnHeader = document.createElement("p");
    navnHeader.innerHTML = array[i].navn;
    navnHeader.setAttribute("class", "navnHeader");

    const type = document.createElement("p");
    type.setAttribute("class", "type");
    type.innerHTML = array[i].by + ", " + array[i].kategori + " > " + array[i].underkategori;

    const deskripsjon = document.createElement("p");
    deskripsjon.setAttribute("class", "deskripsjon");
    deskripsjon.innerHTML = array[i].deskripsjon;

    underDiv.appendChild(bildeDiv);
    bildeDiv.appendChild(bedriftsbilde);
    underDiv.appendChild(navnHeader);
    underDiv.appendChild(type);
    underDiv.appendChild(deskripsjon);
  }
}
bedriftIkon(alleBedrifter);


const nestAdderTest = [];

const nestAdder = function(array, kategori) {
  for (let i = 0; i < array.length; i++) {

    if (nestAdderTest.indexOf(array[i].underkategori) === -1) {
      const nest = document.createElement("p");
      nest.setAttribute("id", array[i].underkategori);
      nest.innerHTML = array[i].underkategori;
      document.getElementById(kategori + "Nest").appendChild(nest);
      const underCat = array[i].underkategori;

      document.getElementById(underCat).addEventListener("click", function() {
        document.getElementById("bedrifter").innerHTML = "";
        document.getElementById("overskrift").innerHTML = underCat;
        underkategoriIkon(underCat);
        document.getElementById("menu").style.display = "none";
        });

      nestAdderTest.push(array[i].underkategori);
    }
  }
}
nestAdder(matArray, "mat");
nestAdder(helseArray, "helse");
nestAdder(velvereArray, "velvere")
