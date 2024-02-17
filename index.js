
// document.getElementsByClassName("submitBtn").onclick = 
//     function () {
//         this.css("background-color", hsl(25, 97%, 53%)); 
//     }
// const ratingBtnColorChange = document.getElementById("ratingBtn").onclick = 
//     function () {
//         this.css("background-color", hsl(25, 97%, 53%));
//     }

// const ratingBtnColorChange = document.getElementById("ratingBtn");

//     function ratingBtnColorChange (newRatingBtnClr) {
//         ("ratingBtn").onclick {
//             ratingBtnColorChange.css("background-color", hsl(25, 97%, 53%))
//         };
//     }

const ratingButtons = document.querySelectorAll("ratingBtn")
// console.log(ratingButtons);

let ratingValue = "";
let selectedRating = document.getElementsById("selectedRating");

const submitBtn = document.querySelector(".submitBtn");

for (let i = 0; i < ratingBtn.length; i++) {
    ratingBtn[i].addEventListener('click', function() {
        ratingValue = i + 1;
    });
}

submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(ratingValue);
    selectedRating.innerText = ratingValue;
  });