var ad = document.getElementById("add");
var sub = document.getElementById("subtract");
var mul = document.getElementById("multiply");
var div = document.getElementById("divide");

ad.addEventListener("click", () => {
  handlePlus();
});
sub.addEventListener("click", () => {
  handleMinus();
});
mul.addEventListener("click", () => {
  handleMultiply();
});
div.addEventListener("click", () => {
  handleDivide();
});

const handlePlus = (y, z) => {
  var y = document.getElementById("txt1").value;
  var z = document.getElementById("txt2").value;
  var x = +y + +z;
  document.getElementById("ans").value = x;
  console.log(x);
};
const handleMinus = (y, z) => {
  var y = document.getElementById("txt1").value;
  var z = document.getElementById("txt2").value;
  var x = +y - +z;
  document.getElementById("ans").value = x;
  console.log(x);
};
const handleMultiply = (y, z) => {
  var y = document.getElementById("txt1").value;
  var z = document.getElementById("txt2").value;
  var x = +y * +z;
  document.getElementById("ans").value = x;
  console.log(x);
};
const handleDivide = (y, z) => {
  var y = document.getElementById("txt1").value;
  var z = document.getElementById("txt2").value;
  var x = +y / +z;
  document.getElementById("ans").value = x;
  console.log(x);
};
