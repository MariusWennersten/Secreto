


const filterCatTest = [];
const filterByTest = [];

const filterCatAdder = function(array) {
  for (let i = 0; i < array.length; i++) {

    if (filterCatTest.indexOf(array[i].underkategori) === -1) {
      const filterCat = document.createElement("p");
      filterCat.setAttribute("id", "filter" + array[i].navn);
      filterCat.innerHTML = array[i].underkategori;
      document.getElementById("filterCat").appendChild(filterCat);
      const underCat = array[i].underkategori;
      const navnCat = array[i].index;

      filterCatTest.push(array[i].underkategori);
    }

  }

  for (let i = 0; i < array.length; i++) {

    if (filterByTest.indexOf(array[i].by) === -1) {
      const filterBy = document.createElement("p");
      filterBy.setAttribute("id", "filter" + array[i].index);
      filterBy.innerHTML = array[i].by;
      document.getElementById("filterBy").appendChild(filterBy);

      filterByTest.push(array[i].by);
    }

  }

}

filterCatAdder(alleBedrifter);

let removeByAttr = function(arr, attr, value) {
  let j = arr.length;
  while(j--) {
    if (arr[j]
    && arr[j].hasOwnProperty(attr)
    && (arguments.length > 2 && arr[j][attr] === value) ) {

      arr.splice(j,1);
    }
  }
  return arr;
}

let filterCatArray = [];
// const filterArrayTest = [];
const minArray = [];

const filterCatOnClick = function(array) {
  for (let i = 0; i < array.length; i++) {

    const underCat = array[i].underkategori;
    const aNavn = array[i].navn
    if (document.getElementById("filter" + array[i].navn)) {
      document.getElementById("filter" + array[i].navn).addEventListener("click", function() {

        if (document.getElementById("filter" + aNavn).classList.contains("active") == false) {
          document.getElementById("filter" + aNavn).classList.toggle("active");
          const nyArray = alleBedrifter.filter(bedrift => bedrift.underkategori == underCat);
          filterCatArray.push.apply(filterCatArray, nyArray);
          // filterArrayTest.push(underCat);
          return;
        }
        else {
          removeByAttr(filterCatArray, "underkategori", underCat);
          document.getElementById("filter" + aNavn).classList.remove('active');
          // const index = filterCatArrayTest.indexOf(underCat);
          // filterCatArrayTest.splice(index, 1,)
        }

      });
    }
  }
}
filterCatOnClick(alleBedrifter);

let filterByArray = [];

const filterByOnClick = function(array) {
  for (let i = 0; i < array.length; i++) {

    const by = array[i].by;
    const aIndex = array[i].index;
    if (document.getElementById("filter" + array[i].index)) {
      document.getElementById("filter" + array[i].index).addEventListener("click", function() {

        if (document.getElementById("filter" + aIndex).classList.contains("active") == false) {
          console.log("add");
          document.getElementById("filter" + aIndex).classList.toggle("active");
          const nyArray = alleBedrifter.filter(bedrift => bedrift.by == by);
          filterByArray.push.apply(filterByArray, nyArray);

          // filterByArray = filterByArray.filter(aIndex => !filterCatArray.includes(aIndex));
          // filterCatArray = filterCatArray.filter(aIndex => !filterByArray.includes(aIndex));
          // filterCatArray = filterCatArray.filter(by => filterByArray.includes(by));

          // array1 = array1.filter(val => !array2.includes(val));

          // filterArrayTest.push(by);
          return;
        }
        else {
          console.log("remove");
          removeByAttr(filterCatArray, "by", by);
          document.getElementById("filter" + aIndex).classList.remove('active');
          // const index = filterArrayTest.indexOf(by);
          // filterArrayTest.splice(index, 1,)
        }

      });
    }
  }
}
filterByOnClick(alleBedrifter);

let filterOutputArray = [];

const filterDoneClick = function() {
  filterOutputArray = [];

  for (let i = 0; i < filterCatArray.length; i++) {
    if (filterByArray[i]) {
      const by = filterByArray[i].by;
      const underCat = filterByArray[i].underkategori;
      denneArray = filterCatArray.filter(by => filterCatArray.includes(by));
      andreArray = filterByArray.filter(underCat => filterByArray.includes(underCat));
      let z = denneArray.filter(function(val) {
        return andreArray.indexOf(val) != -1;
      });
      console.log(z);
      filterOutputArray.push.apply(filterOutputArray, z);
    }
  }
  console.log(filterOutputArray);
    uniq = [...new Set(filterOutputArray)];
    document.getElementById("bedrifter").innerHTML = "";
    bedriftIkon(uniq);
}

document.getElementById("filterPText").addEventListener("click", function() {
  if (document.getElementById("filterContent").style.display == "block") {
    document.getElementById("filterContent").style.display = "none";
    document.getElementById("filterPluss").innerText = "+";
    document.getElementById("filterPluss").style.fontSize = "6rem";
    document.getElementById("filterPluss").style.top = "11rem";


    for (let i = 0; i < alleBedrifter.length; i++) {
      if (document.getElementById("filter" + alleBedrifter[i].navn)) {
        if (document.getElementById("filter" + alleBedrifter[i].navn).classList.contains("active") == true) {
          filterDoneClick();
          return;
        }
      }
    }
  }
  else {
    document.getElementById("filterContent").style.display = "block";
    document.getElementById("filterPluss").innerText = "-";
    document.getElementById("filterPluss").style.fontSize = "12rem";
    document.getElementById("filterPluss").style.top = "7rem";
  }
});
