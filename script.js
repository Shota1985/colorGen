// const randomColor = `#${Math.floor(Math.random() * 0xffffff)
//   .toString(16)
//   .padEnd(6, "0")}`;

// function makeRed(){array.forEach(elem => {elem.style.backgroundColor = "red";
//     });}
// colorDiv[0].style.backgroundColor = 'red'
//изменяет цвет на клик выбранному диву поочередно
// colorDiv.forEach((div) => {
//   div.addEventListener("click", function (e) {
//     colorDiv.forEach((d) => d.classList.remove("active"));
//     div.classList.add("active");
//   });
// });

// let randomItem = hex[Math.floor(Math.random() * hex.length)];
// console.log(randomItem);//возвращает рандомный элемент
const colorDiv = document.querySelectorAll(".color__item");
const colorBtn = document.querySelector(".change__btn");
const colorName = document.querySelector(".color__name");
const allColorsChange = document.getElementsByClassName(".change__colors");
console.log(allColorsChange);
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

colorDiv.forEach((elem) => {
  elem
    .querySelector(".change__btn")
    .addEventListener("click", function () {
      const randomColor = getRandomColor();
      elem.style.backgroundColor = randomColor;
      elem.style.borderColor = randomColor;
      elem.querySelector(".color__name").textContent = getRandomColor();
    });
});
// function mainBtn (allColorsChange){((elem) => {
//   elem.querySelector(".change__colors").addEventListener("click", function () {
//     const randomColor = getRandomColor();
//     elem.style.backgroundColor = randomColor;
//     elem.style.borderColor = randomColor;
//     elem.querySelector(".color__name").textContent = getRandomColor();
//   });
// })
// };
// function mainBtn(allColorsChange) {
//   allColorsChange.addEventListener("click", function () {colorDiv.forEach((elem) => {
//     elem.querySelector(".change__btn").addEventListener("click", function () {
//       const randomColor = getRandomColor();
//       elem.style.backgroundColor = randomColor;
//       elem.style.borderColor = randomColor;
//       elem.querySelector(".color__name").textContent = getRandomColor();
//     });
//   });
//   })
// }
// const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
// const getRandomIndex = (length) => Math.floor(Math.random() * length);

// const getRandomElements = (array, count) => {
//   const isCountMoreThanArrayLength = count > array.length;
//   const isCountLessThanOne = count < 1;
//   const isCountInteger = Math.round(count) === count;
//   if (isCountMoreThanArrayLength || isCountLessThanOne || !isCountInteger)
//     return [];
//   const unusedIndexes = Array.from(array, (v, i) => i);
//   const randomElements = [];
//   while (randomElements.length !== count) {
//     const randomUnusedIndex = getRandomIndex(unusedIndexes.length);
//     const randomIndex = unusedIndexes.splice(randomUnusedIndex, 1)[0];
//     randomElements.push(array[randomIndex]);
//   }
//   return randomElements;
// };

// function getRandomColor(div) {
//   const randomColor = "#" + getRandomElements(hex, 6).join("");
//   div.style.backgroundColor = randomColor;
//   div.style.borderColor = randomColor;
// }
// allColorsChange.forEach((el) => {
//   el.addEventListener("click", function (colorDiv) {
//     colorDiv.forEach((e) => e.classList.getRandomColor(e))
//   });
// });
