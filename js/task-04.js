const valueEl = document.querySelector('#value');
const counterValue = {
    value: 0,
    decrement(value) {
      this.value += 1;
    },
    increment(value) {
      this.value -= 1;
    },
  };
const decrementBtn = document.querySelector('button[data-action="decrement"]');
decrementBtn.addEventListener('click',()=>{
    counterValue.increment();
    valueEl.textContent = counterValue.value;
    });
  const incrementBtn = document.querySelector('button[data-action="increment"]')
  incrementBtn.addEventListener('click',()=>{
    counterValue.decrement()
    valueEl.textContent = counterValue.value;
  })

console.log(decrementBtn)
console.log(incrementBtn)
