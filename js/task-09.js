function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

}
const button = document.querySelector('.change-color')
const widgetColor = document.querySelector('.color')
button.addEventListener('click', (onChangeColor)) 

function onChangeColor() {
  const color = getRandomHexColor();
  widgetColor.textContent = color;
  document.body.style.backgroundColor = color;
  console.log(widgetColor)
}




  