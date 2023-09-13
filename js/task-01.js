const categories = document.querySelectorAll("#categories > .item");
console.log("Number of categories:", categories.length);

categories.forEach(category => {
    const categoryTitle = category.querySelector("h2").textContent;
    console.log("Category:", categoryTitle);

    const categoryElements = category.querySelectorAll("ul > li");
    console.log("Elements:", categoryElements.length);
});
