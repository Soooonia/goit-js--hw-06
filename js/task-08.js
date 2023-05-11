// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.


const form = document.querySelector(".login-form")
form.addEventListener('submit', onFormSubmit )



function onFormSubmit(event) {
    event.preventDefault();
    const formElements= event.currentTarget.elements;
    const email = formElements.email.value;
    const password=formElements.password.value
    if (!email || !password) {
        alert('всі поля повинні бути заповнені');
        return;
      }
     console.log({email, password});
      alert("Дані віддправлені");
      form.reset();
}






















// function onFormSubmit(event) {
//     event.preventDefault();
//     const emailValue = formElements.email.value;
//     const passwordValue = formElements.password.value;
//     if (emailValue == rightEmail && passwordValue == rightPassword ) {
//       return console.log ({
//         elementsEmail: rightEmail,
//         elementsPassword: rightPassword,
//       });
//     } else if (emailValue == "" || passwordValue == "") {
//         alert("Fill up all the forms")
//     }
// }