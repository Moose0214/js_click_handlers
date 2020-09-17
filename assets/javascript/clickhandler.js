const colorBox = document.querySelector("#color-box");
// JS for the gray button
const grayButton = document.querySelector("#gray-button");
grayButton.addEventListener("click", function () {
  colorBox.className = "gray";
  this.style.backgroundColor = "gray";
});
// JS for the blue button
const blueButton = document.querySelector("#blue-button");
blueButton.addEventListener("click", function () {
  colorBox.className = "blue";
  this.style.backgroundColor = "blue";
});
/* TODO 1
 *
 * Add the JS for the pink button
 *
 */
const pinkButton = document.querySelector("#pink-button");
pinkButton.addEventListener("click", function () {
  colorBox.className = "pink";
  this.style.backgroundColor = "pink";
});

let count = 0;
const countspan = document.querySelector("#countspan");
const counterButton = document.querySelector("#counter-button");
let numberValue = Number(countspan.innerHTML);
console.log(numberValue);
counterButton.addEventListener("click", function () {
  numberValue += 1;
  countspan.innerHTML = numberValue;
  /* TODO 2
   *
   * Fill in this function so that it increments
   * (adds one to) the variable named count,
   * then updates the inner text of "countspan"
   * to show the current value of "count".
   */
});
const evenOrOddButton = document.querySelector("#even-or-odd-button");
evenOrOddButton.addEventListener("click", function () {
  if (numberValue % 2 == 0) {
    alert("Even");
  } else {
    alert("Odd");
  }
  /* TODO 3
   *
   * Fill in this function so that it shows an
   * alert dialog stating whether the count variable
   * (from part 2, above) is even or odd.
   */
});
