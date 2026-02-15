function showBrand() {
  let budget = Number(document.getElementById("budget").value);

  if (!budget || budget <= 0) {
    document.getElementById("brand").innerHTML =
      "<span style='color:red;'>Please enter a valid budget.</span>";
    return;
  }

  let discount = budget * 0.20;
  let finalDiscount = discount.toFixed(2);

  let brands = "";

  if (budget < 10000) {
    brands = "War Paints, Unlockables, Decals";
  } 
  else if (budget < 30000) {
    brands = "Weapons, Festivizers, Cosmetics";
  } 
  else {
    brands = "Unusuals, Strangifiers";
  }

  let brandBox = document.getElementById("brand");
  brandBox.style.backgroundColor = "#b96300"; resultBoxColor= "#a84f1d"; 
  brandBox.style.color = "#e6a077";
  brandBox.style.padding = "15px";
  brandBox.style.borderRadius = "10px";

  brandBox.innerHTML =
    "<b>Available Crates:<br>" +
    brands +
    "<br><br>Discounts: " +
    "<span style='color:red; font-size:25px;'>" +
    finalDiscount +
    "</span> discount.</b>";
}

function showStore() {
  let budget = Number(document.getElementById("budget").value);

  if (!budget || budget <= 0) {
    document.getElementById("stores").innerHTML =
      "<span style='color:red;'>Enter a budget first.</span>";
    return;
  }

  let store = "";

  if (budget < 30000) {
    store = "Unique, Decorated";
  } 
  else if (budget < 60000) {
    store = "Genuine, Festivized";
  } 
  else {
    store = "Collector's, Australium";
  }

  let storeBox = document.getElementById("stores");
  storeBox.style.backgroundColor = "#b96300"; resultBoxColor= "#a84f1d";
  storeBox.style.color = "#e6a077";
  storeBox.style.padding = "15px";
  storeBox.style.borderRadius = "10px";

  storeBox.innerHTML =
    "<b>Recommended Store:<br>" + store + "</b>";
}
