function configureListeners() {
  // select img elements
  let images = document.querySelectorAll("img");

  // iterate over images and add mouseover event listeners
  for (i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseover", (e) => {
      //   console.log("mouse is over");
    });
  }
}

function addOpacity(event) {
  if (!this.classList.contains("dim")) {
    this.classList.add("dim");
  }
  getProductInfo(event.target.id);
}

function removeOpacity(event) {
  if (this.classList.contains("dim")) {
    this.classList.remove("dim");
  }

  let element = document.getElementById("color-price");
  element.textContent = "";

  let color = document.getElementById("color-name");
  color.textContent = "";

  event.preventDefault();
}
// function removeOpacity(event) {
//   //remove appropriate CSS class
//   event.classList.remove("dim");

//   let element = document.getElementById("color-price");
//   element.textContent = "";

//   let color = document.getElementById("color-name");
//   color.textContent = "";

//   event.preventDefault();
// }

function getProductInfo(paintColor) {
  let price;
  let colorName;

  switch (paintColor) {
    case "pn1":
      price = "$14.99";
      colorName = "Lime Green";
      break;
    case "pn2":
      price = "$11.14";
      colorName = "Medium Brown";
      break;
    case "pn3":
      price = "$22.99";
      colorName = "Royal Blue";
      break;
    case "pn4":
      price = "$4.99";
      colorName = "Solid Black";
      break;
    case "pn5":
      price = "$8.22";
      colorName = "Solid Cyan";
      break;
    case "pn6":
      price = "$11.99";
      colorName = "Solid Purple";
      break;
    case "pn7":
      price = "$13.42";
      colorName = "Solid Red";
      break;
    case "pn8":
      price = "$21.98";
      colorName = "Solid White";
      break;
    case "pn9":
      price = "14.99";
      colorName = "Solid Yellow";
      break;
    default:
  }

  function updatePrice(colorName, price) {
    // select element with corresponding id
    let colorPrice = document.querySelectorAll(".color-price");
    // display price
    colorPrice.textContent = price;
    // select element with corresponding id
    let color = document.querySelectorAll(".color-name");
    //display color name
    color.textContent = colorName;
  }
}
