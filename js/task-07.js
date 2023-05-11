const refs = {
    newInput: document.querySelector('#font-size-control'),
newInline: document.querySelector('#text')
}
//  newInline.style.fontSize =newInput.value+'px'

refs.newInput.addEventListener('input', (event)=>{
   refs.newInline.style.fontSize =refs.newInput.value+'px'
    refs.newInput.value===refs.newInline.fontSize
    refs.newInline.style.fontSize = event.currentTarget.value + "px";
})