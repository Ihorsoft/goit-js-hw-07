const categoriesList = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesList.length);
for (const category of categoriesList) {
    console.log("Category:", category.querySelector("h2").textContent);
    console.log("Elenents:", category.querySelectorAll("li").length);
}
  