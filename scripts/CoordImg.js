/*
    Program: CoordImg.js
    Programmer: Brian Gauthier
    Date: Feb 5, 2025
    Purpose: Displays a world map quadrant image based on validated latitude and longitude input.
*/

"use strict";

// determine the hemisphere for the latitude value
function getLatDirection(sLat){
    
    // delcare variables
    const EQUATOR = 0;
    let sHemi = "North";

    // determine hemisphere
    if (sLat < EQUATOR){
        sHemi = "South";
    } else if (sLat == EQUATOR) {
        sHemi = "Equator";
    }

    return sHemi;
}

// determine the hemisphere for the longitude value
function getLongDirection(sLong){
    
    // delcare variables
    const PRIMEMER = 0;
    let sHemi = "East";

    // determine hemisphere
    if (sLong < PRIMEMER){
        sHemi = "West";
    } else if (sLong == PRIMEMER) {
        sHemi = "Prime Meridian";
    }

    return sHemi;
}


// isValidLat function determines if latitude input value is valid
function isValidLat(sLat){
  
    // declare variables
    let sLatMsg  = "";
    let bValid   = true;
    let fLat     = parseFloat(sLat);
    const MINLAT = -90, MAXLAT = 90;

    // check to see if latitude value is a valid float
    if (isNaN(fLat)){
        bValid = false;
        sLatMsg = "Latitude is not a valid float";
    }

    // check to see if latitude is between -90 and 90
    else if ( fLat < MINLAT || fLat > MAXLAT){
        bValid = false;
        sLatMsg = "Latitude should be between -90 and 90";
    }

    // update error message by the input latitude element
    document.getElementById("laterr").innerHTML = sLatMsg;

    return bValid;

}


// isValidLong function determines if longitude input value is valid
function isValidLong(sLong){

    // declare variables
    let sLongMsg  = "";
    let bValid   = true;
    let fLong     = parseFloat(sLong);
    const MINLONG = -180, MAXLONG = 180;

    // check to see if longitude value is a valid float
    if (isNaN(fLong)){
        bValid = false;
        sLongMsg = "Longitude is not a valid float";
    }

    // check to see if longitude is between -180 and 180
    else if (fLong < MINLONG || fLong > MAXLONG){
        bValid = false;
        sLongMsg = "Longitude should be between -180 and 180"
    }

    // update error message by the input longitude element
    document.getElementById("longerr").innerHTML = sLongMsg;

    return bValid;

}

// function to update the image display
function updDisplay(sLat, sLong, sLatQuad, sLongQuad){

    // reference to the image element
    const mapImg = document.getElementById("mapImg");

    // parse sLat and sLong to floats for validation
    const fLat = parseFloat(sLat);
    const fLong = parseFloat(sLong);

    if (fLat === 0 || fLong === 0){
        mapImg.src ="images/World.jpg";
    } else if (isNaN(fLat) || isNaN(fLong)){
        mapImg.src = "images/BadWorld.jpg";
    } else {
        const sMapFile = "images/" + sLatQuad + sLongQuad + ".jpg";
        mapImg.src = sMapFile;
    }
}


// main function to determine latitude and longitude validation
// also to determine quadrants

function valLatLong(sLat, sLong){
    
    // declare variables to store float lat/long values
    let sLatHemi = "", sLongHemi = "", sResults = "";

    // call isValidLat function
    if (isValidLat(sLat)){
        sLatHemi = getLatDirection(sLat);
    }
    
    // call is ValidLong function
    if (isValidLong(sLong)){
        sLongHemi = getLongDirection(sLong);
    }
    
    // update the "results" label with quadrant message
    if (sLatHemi !== "" && sLongHemi !== ""){
        sResults = sLatHemi + " " + sLongHemi;
        // update image
        updDisplay(sLat, sLong, sLatHemi, sLongHemi); 
    } else {
        sResults = "Bad World"
        updDisplay(sLat, sLong, "Bad", "World");
    }
    
    document.getElementById("results").innerHTML = sResults;
   
}
