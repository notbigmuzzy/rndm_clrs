let colorThief = new ColorThief();
let randomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let reloadButton = document.getElementById("reload-img");
reloadButton.addEventListener("click", function() {
  let imgElement = document.querySelector("#picture");
      newImageNo = randomNumber(2, 12),
      imgUrl = "img/" + newImageNo + ".jpg";
  imgElement.src = imgUrl;
});

let imgRefresh = document.querySelector("#picture");
imgRefresh.addEventListener('load', function() {
  let newColorRGBValues = colorThief.getColor(imgRefresh),
      newPallete = colorThief.getPalette(imgRefresh),
      newColorRGBString = newColorRGBValues.toString(),
      refreshColors = "rgb(" + newColorRGBString + ")",
      r = newColorRGBValues[0],
      g = newColorRGBValues[1],
      b = newColorRGBValues[2],
      luma = 0.2126 * r + 0.7152 * g + 0.0722 * b,
      color = "black";

  if (luma < 100) {
      color = "white";
  }

  document.querySelector('main-wrap').style.backgroundColor = refreshColors;
  document.querySelector('main-wrap').style.color = color;
});