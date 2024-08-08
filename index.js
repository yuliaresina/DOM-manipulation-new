//1.Name of the recipe
const nameOfRecipeRef = document.getElementById("recipe-name");
const nameOfRecipe = nameOfRecipeRef.textContent;
console.log(`Recipe name: ${nameOfRecipe}`);

//2. What HTML tag is used?
const recipeNameElement = document.getElementById("recipe-name");
console.log(recipeNameElement);

//3. Font size of the paragraph tag?
const descriptionRef = document.querySelector('.description');
const fontDes = window.getComputedStyle(descriptionRef).fontSize;
console.log(fontDes);

//4. Value of the alt attribute on the image?
let altText = document.querySelector("img").alt;
console.log(`Alt text on image: ${altText}`);

//5.What are the dimentions of the url of the image?
let imgRef = document.querySelector("img");
let imgUrl = imgRef.src;
let imgHeight = imgRef.clientHeight;
let imgWidth = imgRef.clientWidth;
let imgObject = {
  url: imgUrl,
  height: imgHeight,
  width: imgWidth,
};
console.log(imgObject);

//6. How many ingredients in the paste?

const ingredientsRef = document.querySelectorAll('.ingredients-list-paste li');
console.log(ingredientsRef.length);

//7. 4th element in the paste list?
let fourthElement = document.querySelector(".ingredients-list-paste").children[1];
let fourthElementText = fourthElement.textContent;
console.log(`Fourth ingredient on list is: ${fourthElementText}`);

//8. Array of objects from the instruction
let instructionsRef = document.querySelectorAll(".instructions-list li");

const instructionsArray = [];

instructionsRef.forEach((element, index) => {
let instructionObject = {
order: index + 1,
text: element.textContent.trim(),
  };
  instructionsArray.push(instructionObject);
});

console.log(instructionsArray);