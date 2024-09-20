
// help page
let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


//side bar -main
const bars = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".sidebar");
const closingButton = document.querySelector(".fa-times");

bars.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});
closingButton.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});



// // Search Bar--page search
// const searchBarContainerEl = document.querySelector(".search-bar-container");
// const magnifierEl = document.querySelector(".magnifier");
// magnifierEl.addEventListener("click", () => {
//   searchBarContainerEl.classList.toggle("active");
// });



// //sign-up side bar
// const bars1 = document.querySelector(".fa-user");
// const sidebar1 = document.querySelector(".sidebar");
// const closingButton1 = document.querySelector(".fa-times");

// bars1.addEventListener("click", () => {
//   sidebar1.classList.toggle("show-sidebar");
// });

// closingButton.addEventListener("click", () => {
//   sidebar1.classList.remove("show-sidebar");
// });

