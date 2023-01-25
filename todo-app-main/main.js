const sunBtn = document.querySelector(".sun")
const moonBtn = document.querySelector(".moon")


moonBtn.addEventListener("click", () => {
   document.body.classList.add("dark")
   moonBtn.style.display = "none"
   sunBtn.style.display = "inline"
})

sunBtn.addEventListener("click", () => {
   document.body.classList.remove("dark")
   sunBtn.style.display = "none"
   moonBtn.style.display = "inline"
})