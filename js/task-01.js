
const categoriesItems = document.querySelectorAll(".item")
console.log(`Number of categories: ${categoriesItems.length}`)
categoriesItems.forEach((item) => {
    const categoryTitle = item.querySelector('h2').textContent;
    // const categoryItems = item.children.length ; // Віднімаємо заголовок категорії
    const categoryItems = item.lastElementChild.querySelectorAll("li").length 
    console.log(`Category: ${categoryTitle}`);
     console.log(`Elements: ${categoryItems}`);
  });