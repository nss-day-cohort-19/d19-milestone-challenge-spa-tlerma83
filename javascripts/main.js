console.log("testing main2.js");

//this is a global var that holds my currentTarget from my click event. This way I can access it in other functions. I don't know how to make this private or if it should be private
var holyCrapOnAStick;

var inputField = document.getElementById("input");
var container = document.getElementById("container");


//starting data load and error function that are built in to loadInventory Method
CarLot.loadInventory(callback);

function callback () {

    //starting getInventoryArray method and getting the data, the fisrt IFFE only creates the method. The load will not happen unless I call that built in methos that I made. This is where the callback is used
    //I am tellling this var to call my func and method and set it equal to a var
    var getThatInventoryYo = CarLot.getInventoryArray();

    //Here I am calling the function that prints to the DOM and passing my JSON once it has loaded
    populatePage(getThatInventoryYo);
}



function populatePage (inventory) {
  // Loop over the inventory and populate the page
//    var containDiv;
//    containDiv = "<div class='row' class='conatiner>";
    for (var r = 0; r < inventory.length; r++) {
        var holdCarArray = inventory[r];
        console.log("buildCars", holdCarArray);
        container.innerHTML +=
        `<div class="row">
        <div class="col-sm border">
        <h3>${holdCarArray.make}</h3>
        <p>${holdCarArray.model}</p>
        <p>${holdCarArray.year}</p>
        <p>${holdCarArray.type}</p>
        <p>${holdCarArray.description}</p>
        </div>
        </div`;

    }
//    containDiv += "</div">;
//    container.innerHTML = containDiv;

// call Carlot IFFE and use new method activateEvents and pass in the arguments/functions that it will be using for the event listeners
  CarLot.activateEvents(listenForDiv, changeText);
}

// grab the div being clicked and alter it...set the event.currentTarget so I can access the div selected in my next function to use the input field
function listenForDiv () {
    holyCrapOnAStick = event.currentTarget;
    inputField.focus();
    CarLot.clearField();//this function clears input field and set border and color back to OG
    CarLot.addStyle(holyCrapOnAStick, "red");
    //this sends current target and a color to change element
}

//get the variable that is holding which event was selected, get the p tag and it is an array so tell it which index you want. I need the last p tag which has an index 0f 3
function changeText () {
    var holdMyCrap = holyCrapOnAStick.getElementsByTagName("p")[3];
    console.log("what is this", holdMyCrap);
    holdMyCrap.innerHTML = inputField.value;
    //Carlot.addstyle();
}
