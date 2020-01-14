

document.getElementById("addBedFerdig").addEventListener("click", function() {
  const navnValue = document.getElementById("addBedNavn").value;
  const bildeValue = document.getElementById("addBedBilde").value;
  const byValue = document.getElementById("addBedBy").value;
  const kategoriValue = document.getElementById("addBedKategori").value;
  const underkategoriValue = document.getElementById("addBedUnderkategori").value;
  const beskrivelseValue = document.getElementById("addBedBeskrivelse").value;

  console.log(alleBedrifter);
  const newBedrift = new bedrift("10",navnValue,bildeValue,byValue,kategoriValue,underkategoriValue,beskrivelseValue);
  alleBedrifter.push(newBedrift);
  console.log(alleBedrifter);
});
