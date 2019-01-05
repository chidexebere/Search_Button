

//selecting dom elements for manipulation

const searchButton = document.querySelector(".button");
const partialMatchLink = document.querySelector("#partial-match");
const autofillMatchLink = document.querySelector("#autofill-match");
const otherMatchLink = document.querySelector("#other-match");
const partial = document.querySelector("#partial-popup");
const autofill = document.querySelector("#autofill-popup");
const other = document.querySelector("#other-popup");
const popup = document.querySelector(".popUp");
const cancelBtn = document.querySelector(".cancelButton");
const proceedBtn = document.querySelector(".proceedButton");



//Function to toggle element :display and not display 
function toggleElement(x) {
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}

//display and hide input box,when search button is clicked
searchButton.addEventListener('click', function () {
    const inputField = document.getElementById("mySearch");
    toggleElement(inputField);
});


//To display PopUp once a Match list is selected

partialMatchLink.addEventListener("click", function () {
    toggleElement(partial);
});


autofillMatchLink.addEventListener("click", function () {
    toggleElement(autofill);
});

otherMatchLink.addEventListener("click", function () {
    toggleElement(other);
});




//close Match popup when cancel or proceed button is clicked
cancelBtn.addEventListener("click", function (e) {
    popup.style.display = "none";

})

proceedBtn.addEventListener("click", function (e) {
    popup.style.display = "none";

})








