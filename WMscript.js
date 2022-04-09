'use strict';

/* Author: Brian Massick
   Purpose: Create an estimate calculator.
   Date Last Modified: April, 8th, 2022
*/

/* Global parameters are for functions to check if other functions have happened */

let checkedSiding = false;
let checkedWindows = false;
let checkedConcrete = false;
let checkedDemoss = false;
let checkedDeck = false;
let checkedGutters = false;

let calculated = false;

let formField = document.getElementById("estimateCalculator");

function toggleSidingField() {
    /* Creates an input field for checkmarked service and removes field when unchecked
       uses onchange so I needed to create a boolean to act as a switch 
       */

    if (checkedSiding == false) {
        let numberFieldSiding = document.createElement("input");
        numberFieldSiding.type = "number";
        numberFieldSiding.name = "sidingFootage";
        numberFieldSiding.id = "sidingFootage";
        numberFieldSiding.placeholder = "Sqft of Siding Ex: 500";
    
        formField.appendChild(numberFieldSiding);
    
        checkedSiding = true;
    }else {
        let removeSiding = document.getElementById("sidingFootage");
        removeSiding.remove();
        checkedSiding = false;
    }
}

function toggleWindowsField() {
    /* Creates an input field for checkmarked service and removes field when unchecked
       uses onchange so I needed to create a boolean to act as a switch 
       */

    if (checkedWindows == false) {
        let numberFieldWindows = document.createElement("input");
        numberFieldWindows.type = "number";
        numberFieldWindows.name = "windowCount";
        numberFieldWindows.id = "windowCount";
        numberFieldWindows.placeholder = "Number of windows Ex: 8";

        formField.appendChild(numberFieldWindows);

        checkedWindows = true;
    }else {
        let removeWindows = document.getElementById("windowCount");
        removeWindows.remove();
        checkedWindows = false;
    }
}

function toggleConcreteField() {
    /* Creates an input field for checkmarked service and removes field when unchecked
       uses onchange so I needed to create a boolean to act as a switch 
       */

    if (checkedConcrete == false) {
        let numberFieldConcrete = document.createElement("input");
        numberFieldConcrete.type = "number";
        numberFieldConcrete.name = "concreteFootage";
        numberFieldConcrete.id = "concreteFootage";
        numberFieldConcrete.placeholder = "Sqft of concrete EX: 250";

        formField.appendChild(numberFieldConcrete);

        checkedConcrete = true;
    } else {
        let removeConcrete = document.getElementById("concreteFootage");
        removeConcrete.remove();
        checkedConcrete = false;
    }
}

function toggleDemossField() {
    /* Creates an input field for checkmarked service and removes field when unchecked
       uses onchange so I needed to create a boolean to act as a switch 
       */

    if (checkedDemoss == false) {
        let numberFieldDemoss = document.createElement("input");
        numberFieldDemoss.type = "number";
        numberFieldDemoss.name = "demossFootage";
        numberFieldDemoss.id = "demossFootage";
        numberFieldDemoss.placeholder = "Sqft of roof EX: 1000";

        formField.appendChild(numberFieldDemoss);

        checkedDemoss = true;
    } else {
        let removeDemoss = document.getElementById("demossFootage");
        removeDemoss.remove();
        checkedDemoss = false;
    }
}

function toggleDeckField() {
    /* Creates an input field for checkmarked service and removes field when unchecked
       uses onchange so I needed to create a boolean to act as a switch 
       */

    if (checkedDeck == false) {
        let numberFieldDeck = document.createElement("input");
        numberFieldDeck.type = "number";
        numberFieldDeck.name = "deckFootage";
        numberFieldDeck.id = "deckFootage";
        numberFieldDeck.placeholder = "Sqft of deck EX: 50";

        formField.appendChild(numberFieldDeck);

        checkedDeck = true;
    } else {
        let removeDeck = document.getElementById("deckFootage");
        removeDeck.remove();
        checkedDeck = false;
    }
}

function toggleGutterField() {
    /* Creates an input field for checkmarked service and removes field when unchecked
       uses onchange so I needed to create a boolean to act as a switch 
       */

    if (checkedGutters == false) {
        let numberFieldGutter = document.createElement("input");
        numberFieldGutter.type = "number";
        numberFieldGutter.name = "gutterLength";
        numberFieldGutter.id = "gutterLength";
        numberFieldGutter.placeholder = "Gutters in ft EX: 500";

        formField.appendChild(numberFieldGutter);

        checkedGutters = true;
    } else {
        let removeGutter = document.getElementById("gutterLength");
        removeGutter.remove();
        checkedGutters = false;
    }
}

function calculateEstimate() {
    /* 
    Calculates an estimate and displays costs.
    Again it uses the global boolean values to determine state of each value
    If user tries to calculate again after submitting once it will just update the prices
    */
    let calculationField = document.getElementById("calculatedamount");

    let sidingCost;
    let windowCost;
    let concreteCost;
    let demossCost;
    let deckCost;
    let gutterCost;
    
    if (checkedSiding == true) {
        let sidingFootage = document.getElementById("sidingFootage").value;
        sidingCost = calculateSiding(sidingFootage);
    }else { sidingCost = 0; }

    if (checkedWindows == true) {
        let windowCount = document.getElementById("windowCount").value;
        windowCost = calculateWindows(windowCount);
    }else { windowCost = 0; }

    if (checkedConcrete == true) {
        let concreteFootage = document.getElementById("concreteFootage").value;
        concreteCost = calculateConcrete(concreteFootage);
    }else { concreteCost = 0; }

    if (checkedDemoss == true) {
        let demossFootage = document.getElementById("demossFootage").value;
        demossCost = calculateDemoss(demossFootage);
    }else { demossCost = 0; }

    if (checkedDeck == true) {
        let deckFootage = document.getElementById("deckFootage").value;
        deckCost = calculateDeck(deckFootage);
    }else { deckCost = 0; }

    if (checkedGutters == true) {
        let gutterLength = document.getElementById("gutterLength").value;
        gutterCost = calculateGutter(gutterLength);
    }else { gutterCost = 0; }

    if (calculated == false) {

        let sidingCostField = document.createElement("p");
        sidingCostField.id = "sidingCost";
        sidingCostField.innerHTML = "Cost of Siding = $" + sidingCost;
        calculationField.appendChild(sidingCostField);

        let windowCostField = document.createElement("p");
        windowCostField.id = "windowCost";
        windowCostField.innerHTML = "Cost of Windows = $" + windowCost;
        calculationField.appendChild(windowCostField);

        let concreteCostField = document.createElement("p");
        concreteCostField.id = "concreteCost";
        concreteCostField.innerHTML = "Cost of Concrete = $" + concreteCost;
        calculationField.appendChild(concreteCostField);

        let demossCostField = document.createElement("p");
        demossCostField.id = "demossCost";
        demossCostField.innerHTML = "Cost of De-mossing = $" + demossCost;
        calculationField.appendChild(demossCostField);

        let deckCostField = document.createElement("p");
        deckCostField.id = "deckCost";
        deckCostField.innerHTML = "Cost of Deck = $" + deckCost;
        calculationField.appendChild(deckCostField);

        let gutterCostField = document.createElement("p");
        gutterCostField.id = "gutterCost";
        gutterCostField.innerHTML = "Cost of Gutters = $" + gutterCost;
        calculationField.appendChild(gutterCostField);

        let totalCostField = document.createElement("p");
        totalCostField.id = "totalCost";
        let totalCost = sidingCost + windowCost + concreteCost + demossCost + deckCost + gutterCost;
        totalCostField.innerHTML = "Total Cost = $" + totalCost;
        calculationField.appendChild(totalCostField);

        calculated = true;
    }else {

        let sidingCostField = document.getElementById("sidingCost");
        sidingCostField.innerHTML = "Cost of Siding = $" + sidingCost;
        calculationField.appendChild(sidingCostField);

        let windowCostField = document.getElementById("windowCost");
        windowCostField.innerHTML = "Cost of Windows = $" + windowCost;
        calculationField.appendChild(windowCostField);

        let concreteCostField = document.getElementById("concreteCost");
        concreteCostField.innerHTML = "Cost of Concrete = $" + concreteCost;
        calculationField.appendChild(concreteCostField);

        let demossCostField = document.getElementById("demossCost");
        demossCostField.innerHTML = "Cost of De-mossing = $" + demossCost;
        calculationField.appendChild(demossCostField);

        let deckCostField = document.getElementById("deckCost");
        deckCostField.innerHTML = "Cost of Deck = $" + deckCost;
        calculationField.appendChild(deckCostField);

        let gutterCostField = document.getElementById("gutterCost");
        gutterCostField.innerHTML = "Cost of Gutters = $" + gutterCost;
        calculationField.appendChild(gutterCostField);

        let totalCostField = document.getElementById("totalCost");
        let totalCost = sidingCost + windowCost + concreteCost + demossCost + deckCost + gutterCost;
        totalCostField.innerHTML = "Total Cost = $" + totalCost;
        calculationField.appendChild(totalCostField);

    }
}
/*
Calculate functions just simply calculate the price of each service.
These in theory would be MUCH more detailed and as such they are separate 
*/

function calculateSiding(siding) {
    return siding * 0.5;
}

function calculateWindows(windows) {
    return windows * 20;
}

function calculateConcrete(concrete) {
    return concrete * 0.25;
}

function calculateDemoss(demoss) {
    return demoss * 0.75;
}

function calculateDeck(deck) {
    return deck * 0.5;
}

function calculateGutter(gutter) {
    return gutter * 0.1;
}

function clearEstimate() {
    /*
    This is simply a function for a button that clears the calculated values.
    */
    let siding = document.getElementById("sidingCost");
    let windows = document.getElementById("windowCost");
    let concrete = document.getElementById("concreteCost");
    let demoss = document.getElementById("demossCost");
    let deck = document.getElementById("deckCost");
    let gutter = document.getElementById("gutterCost");
    let total = document.getElementById("totalCost");

    siding.remove();
    windows.remove();
    concrete.remove();
    demoss.remove();
    deck.remove();
    gutter.remove();
    total.remove();

    calculated = false;
}