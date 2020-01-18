

function bedrift(index, navn, bilde, by, kategori, underkategori, bidrag, deskripsjon) {
  this.index = index;
  this.navn = navn;
  this.bilde = bilde;
  this.by = by;
  this.kategori = kategori;
  this.underkategori = underkategori;
  this.bidrag = bidrag;
  this.deskripsjon = deskripsjon;
}

const alleBedrifter = [
  new bedrift("1","Nico As","resources/Images/stockfront.jpg","Bardu", "helse", "lege","0","St. James's i Lothiarika er et populært hotell med god service og fin beliggenhet ved rullesteinstranden rett utenfor Lardos. "),
  new bedrift("2","Marius As","resources/images/stockfront.jpg","Bergen", "mat", "pizza","0","St. James's i Lothiarika er et populært hotell med god service og fin beliggenhet ved rullesteinstranden rett utenfor Lardos. "),
  new bedrift("3","Einar As","resources/images/stockfront.jpg","Trondheim", "mat", "pizza","3","St. James's i Lothiarika er et populært hotell med god service og fin beliggenhet ved rullesteinstranden rett utenfor Lardos. "),
  new bedrift("4","Petter As","resources/images/stockfront.jpg","Trondheim", "velvære", "frisør","2","St. James's i Lothiarika er et populært hotell med god service og fin beliggenhet ved rullesteinstranden rett utenfor Lardos. "),
  new bedrift("5","Simen As","resources/images/stockfront.jpg","Oslo", "velvære", "frisør","0","St. James's i Lothiarika er et populært hotell med god service og fin beliggenhet ved rullesteinstranden rett utenfor Lardos. "),
  new bedrift("6","Vivian As","resources/images/stockfront.jpg","Oslo", "mat", "sushi","1","St. James's i Lothiarika er et populært hotell med god service og fin beliggenhet ved rullesteinstranden rett utenfor Lardos. "),
  new bedrift("7","Enya As","resources/images/stockfront.jpg","Oslo", "helse", "MR","0","St. James's i Lothiarika er et populært hotell med god service og fin beliggenhet ved rullesteinstranden rett utenfor Lardos. "),
  new bedrift("8","Oscar As","resources/images/stockfront.jpg","Bardu", "elektronikk", "skjermreperasjon","0","St. James's i Lothiarika er et populært hotell med god service og fin beliggenhet ved rullesteinstranden rett utenfor Lardos. "),
  new bedrift("9","Abdul As","resources/images/stockfront.jpg","Oslo", "bolig", "rørlegger","0","St. James's i Lothiarika er et populært hotell med god service og fin beliggenhet ved rullesteinstranden rett utenfor Lardos. "),
  new bedrift("10","Jan As","resources/images/stockfront.jpg","Trondheim", "motor", "verksted","0","St. James's i Lothiarika er et populært hotell med god service og fin beliggenhet ved rullesteinstranden rett utenfor Lardos. "),
];

const kategoriArray = [];
const kategoriArrayTest = [];

for (let i = 0; i < alleBedrifter.length; i++) {
  if (kategoriArrayTest.indexOf(alleBedrifter[i].kategori) === -1) {
    kategoriArrayTest.push(alleBedrifter[i].kategori)
    kategoriArray.push(alleBedrifter[i]);
  }
}

const underkatArray = [];
const underkatArrayTest = [];

for (let i = 0; i < alleBedrifter.length; i++) {
  if (underkatArrayTest.indexOf(alleBedrifter[i].underkategori) === -1) {
    underkatArrayTest.push(alleBedrifter[i].underkategori)
    underkatArray.push(alleBedrifter[i]);
  }
}



const matArray = alleBedrifter.filter(bedrift => bedrift.kategori == "mat");
const helseArray = alleBedrifter.filter(bedrift => bedrift.kategori == "helse");
const velværeArray = alleBedrifter.filter(bedrift => bedrift.kategori == "velvære");
const elektronikkArray = alleBedrifter.filter(bedrift => bedrift.kategori == "elektronikk");
const boligArray = alleBedrifter.filter(bedrift => bedrift.kategori == "bolig");
const motorArray = alleBedrifter.filter(bedrift => bedrift.kategori == "motor");

alleBedrifter.sort((a,b) => (a.bidrag < b.bidrag) ? 1 : ((b.bidrag < a.bidrag) ? -1 : 0));

 // let removeByAttr = function(arr, attr, value) {
 //   let j = arr.length;
 //   while(j--) {
 //     if (arr[j]
 //     && arr[j].hasOwnProperty(attr)
 //     && (arguments.length > 2 && arr[j][attr] === value) ) {
 //
 //       arr.splice(j,1);
 //     }
 //   }
 //   return arr;
 // }
