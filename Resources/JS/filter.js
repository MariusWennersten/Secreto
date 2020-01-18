
for (let i = 0; i < underkatArray.length; i++) {
  const filterCat = document.createElement("p");
  filterCat.setAttribute("id", "filter" + underkatArray[i].navn);
  filterCat.innerHTML = underkatArray[i].underkategori;
  document.getElementById("filterCat").appendChild(filterCat);
}

const filterByTest = [];
for (let i = 0; i < alleBedrifter.length; i++) {
  if (filterByTest.indexOf(alleBedrifter[i].by) === -1) {
    const filterBy = document.createElement("p");
    filterBy.setAttribute("id", "filter" + alleBedrifter[i].index);
    filterBy.innerHTML = alleBedrifter[i].by;
    document.getElementById("filterBy").appendChild(filterBy);

    filterByTest.push(alleBedrifter[i].by);
  }
}

let ukatFilter = [false, false, false, false, false, false, false, false];
let byFilterA = [false, false, false, false, false, false, false, false];

const filterCatOnClick = function(array) {
  for (let i = 0; i < array.length; i++) {

    const underkat = array[i].underkategori;
    const aNavn = array[i].navn
    if (document.getElementById("filter" + array[i].navn)) {
      document.getElementById("filter" + array[i].navn).addEventListener("click", function() {

        if (document.getElementById("filter" + aNavn).classList.contains("active") == false) {
          document.getElementById("filter" + aNavn).classList.toggle("active");
          for (var j = 0; j < ukatFilter.length; j++) {
            if (!ukatFilter[j]) {
              ukatFilter[j] = array[i].underkategori;
              return;
            }
          }
        }
        else {
          for (var j = 0; j < ukatFilter.length; j++) {
            if (ukatFilter[j] == underkat) {
              ukatFilter[j] = false;
            }
          }
          document.getElementById("filter" + aNavn).classList.remove('active');
        }
      });
    }
  }
}
filterCatOnClick(alleBedrifter);

const filterByOnClick = function(array) {
  for (let i = 0; i < array.length; i++) {

    const by = array[i].by;
    const aIndex = array[i].index;
    if (document.getElementById("filter" + array[i].index)) {
      document.getElementById("filter" + array[i].index).addEventListener("click", function() {

        if (document.getElementById("filter" + aIndex).classList.contains("active") == false) {
          document.getElementById("filter" + aIndex).classList.toggle("active");

          for (var j = 0; j < byFilterA.length; j++) {
            if (!byFilterA[j]) {
              byFilterA[j] = array[i].by;
              return;
            }
          }
        }
        else {
          for (var j = 0; j < byFilterA.length; j++) {
            if (byFilterA[j] == by) {
              byFilterA[j] = false;
            }
          }
          document.getElementById("filter" + aIndex).classList.remove('active');
        }
      });
    }
  }
}
filterByOnClick(alleBedrifter);

let filterBedrifter = [];

const filterDoneClick = function() {
  filterBedrifter = alleBedrifter.filter(x => (byFilterA[0] == false || (x.by == byFilterA[0] || x.by == byFilterA[1] ||x.by ==  byFilterA[2] || x.by == byFilterA[3] || x.by == byFilterA[4])) &&
  (ukatFilter[0] == false || (x.underkategori == ukatFilter[0] || x.underkategori == ukatFilter[1] ||x.underkategori ==  ukatFilter[2] || x.underkategori == ukatFilter[3] || x.underkategori == ukatFilter[4])));
      document.getElementById("bedrifter").innerHTML = "";
      document.getElementById("overskrift").innerHTML = "Egendefinert";
      bedriftIkon(filterBedrifter);
  }

document.getElementById("filterPText").addEventListener("click", function() {
  if (document.getElementById("filterContent").style.display == "block") {
    document.getElementById("filterContent").style.display = "none";
    document.getElementById("filterPluss").innerText = "+";
    document.getElementById("filterPluss").style.fontSize = "6rem";
    document.getElementById("filterPluss").style.top = "37.5rem";

  }
  else {
    document.getElementById("filterContent").style.display = "block";
    document.getElementById("filterPluss").innerText = "-";
    document.getElementById("filterPluss").style.fontSize = "12rem";
    document.getElementById("filterPluss").style.top = "32.5rem";
  }
});

document.getElementById("filterDone").addEventListener("click", function() {
  document.getElementById("filterContent").style.display = "none";
  document.getElementById("filterPluss").innerText = "+";
  document.getElementById("filterPluss").style.fontSize = "6rem";
  document.getElementById("filterPluss").style.top = "37.5rem";
  document.getElementById("bedrifter").innerHTML = "";
  filterDoneClick();
});
