


const refs= {
  input: document.querySelector('#name-input'),
namfor: document.querySelector('#name-output'),
};
refs.input.addEventListener('input',(event)=>{
  refs.namfor.textContent= event.currentTarget.value;
  if (refs.namfor.textContent.length=== 0) {
    refs.namfor.textContent = 'Anonymous';
  }

})


