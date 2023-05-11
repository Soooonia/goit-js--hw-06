const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newIngredients = document.querySelector('#ingredients');
const element = ingredients.map(ingredient=>{
  const liIngredient = document.createElement('li')
  liIngredient.classList.add('item') 
  liIngredient.textContent=ingredient
  return liIngredient
})

newIngredients.append(...element)
console.log(newIngredients)
