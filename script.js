(function() {

  const button = document.querySelector(".button");
  const colors = document.querySelectorAll(".colors");
  const texts = document.querySelectorAll(".color-text");

  //select finish button
  button.addEventListener("click", function() {
    //change colors' width and text to 100%
    colors.forEach(color => {color.style.width = "100%";});
    texts.forEach(text => {text.innerHTML = "100%";});
  });
})();
