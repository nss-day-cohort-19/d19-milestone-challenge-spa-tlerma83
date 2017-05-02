console.log("I hate IFFEs");

var CarLot = (function(poopsie){
//create method to clear input field, when this methos is called input field will become n empty string
    poopsie.clearField = function(){

        inputField.value = "";
        //need to get elementsbyclassName then loop through the array it gives back
        var cards = document.getElementsByClassName("border");

            for (var t =0; t < cards.length; t++) {

                var card = cards[t];
//this will change border and background color back to original in the populatepage function when another item is clicked
                card.style.borderWidth = '3px';
                card.style.backgroundColor = "white";
            }


    }
//when clicked  this will pass in the currently selected div and a color when it is called
    poopsie.addStyle = function (currentDiv, color){
        currentDiv.style.backgroundColor = color;
        currentDiv.style.borderWidth = "8px";
    }

    return poopsie;
})(CarLot || {});
