

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
  new bedrift("4","Petter As","resources/images/stockfront.jpg","Trondheim", "velvere", "frisør","2","St. James's i Lothiarika er et populært hotell med god service og fin beliggenhet ved rullesteinstranden rett utenfor Lardos. "),
  new bedrift("5","Simen As","resources/images/stockfront.jpg","Oslo", "velvere", "frisør","0","St. James's i Lothiarika er et populært hotell med god service og fin beliggenhet ved rullesteinstranden rett utenfor Lardos. "),
  new bedrift("6","Vivian As","resources/images/stockfront.jpg","Oslo", "mat", "sushi","1","St. James's i Lothiarika er et populært hotell med god service og fin beliggenhet ved rullesteinstranden rett utenfor Lardos. "),
  new bedrift("7","Enya As","resources/images/stockfront.jpg","Oslo", "helse", "MR","0","St. James's i Lothiarika er et populært hotell med god service og fin beliggenhet ved rullesteinstranden rett utenfor Lardos. "),
];

const matArray = alleBedrifter.filter(bedrift => bedrift.kategori == "mat");
const helseArray = alleBedrifter.filter(bedrift => bedrift.kategori == "helse");
const velvereArray = alleBedrifter.filter(bedrift => bedrift.kategori == "velvere");


console.log(alleBedrifter);

alleBedrifter.sort((a,b) => (a.bidrag < b.bidrag) ? 1 : ((b.bidrag < a.bidrag) ? -1 : 0));

console.log(alleBedrifter);
