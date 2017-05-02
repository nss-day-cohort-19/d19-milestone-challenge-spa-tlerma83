console.log("another IFFE");

//calling my IFFE function again, passing an argument in which will be the Original Carlot variable so I can add another method to it
var CarLot = (function (poop) {

    //the two arguments I am passing in are the functions for the click events which are created on the main.js page
    poop.activateEvents = function (alterDiv, changeText) {

        var inputField = document.getElementById("input");
        inputField.addEventListener("keyup", changeText);

        var getDiv = document.getElementsByClassName("border");

        // getting the elementsByClass name returnd an array. If I add an eventListener to the entire array it does not tell me which one in the index was clicked but rather the whole array. So I needed to loop through the array of elements then add the eventisten
        for (var p = 0; p < getDiv.length; p++) {
            var listenToCards = getDiv[p];
            listenToCards.addEventListener("click", alterDiv);
        }

    }
    //still not sure why my return had to be here or why it is needed but this whole thing blows up without it
    return poop;

//have to pass in the original Carlot var to add to it or the variable gets over-written
})(CarLot || {});
