(function (designWidth) {
  var size = (window.innerWidth || document.documentElement.clientWidth) / designWidth * 100;
  document.documentElement.style.fontSize = size + "px";
  document.body.style.fontSize = 14 + "px";
  console.log("--");

})(750);
