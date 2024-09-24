const languageDropdown = document.getElementById("language-btn")
const faqListItem = document.querySelectorAll(".inner-container ul li")

languageDropdown.addEventListener("click", () => {
  document.getElementById("language-dropdown").classList.toggle("show")
})

faqListItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.classList.toggle("show")
  })
})
const names = ["Movies","Shows","Series","Documentaries"];
let index = 0;

function changeName() {
    const nameElement = document.getElementById("changingName");
    nameElement.textContent = names[index];
    index = (index + 1) % names.length;
}

setInterval(changeName, 1200);
