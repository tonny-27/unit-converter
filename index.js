let convertBtn = document.getElementById("convert-btn")

let lengthEl = document.getElementById("length-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", calcStats)

function calcStats() {
    let inputEl = document.getElementById("vlera")
    let baseValue = parseFloat(inputEl.value)


    /*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

    document.getElementById("meters").innerText = baseValue
    document.getElementById("liters").innerText = baseValue
    document.getElementById("kilograms").innerText = baseValue

    document.getElementById("feet").innerText = baseValue
    document.getElementById("gallons").innerText = baseValue
    document.getElementById("pounds").innerText = baseValue

    /**
     * CALCULATION OF METRIC TO IMPERIAL
     */

    let length, volume, mass;

    length = parseFloat(baseValue * meterToFeet).toFixed(2);   
    volume = parseFloat(baseValue * literToGallon).toFixed(2);
    mass = parseFloat(baseValue * kiloToPound).toFixed(2);

    document.getElementById("meter-feet").innerText = length
    document.getElementById("liters-gallons").innerText = volume
    document.getElementById("kilograms-pounds").innerText = mass


    /**
     * CALCULATION OF IMPERIAL TO METRIC
     */

    let feet, gallons, pounds;

    feet = parseFloat(baseValue/meterToFeet).toFixed(3);   
    gallons = parseFloat(baseValue/literToGallon).toFixed(3);
    pounds = parseFloat(baseValue/kiloToPound).toFixed(3);

    document.getElementById("feet-meter").innerText = feet
    document.getElementById("gallons-liters").innerText = gallons
    document.getElementById("pounds-kilograms").innerText = pounds

   

    
    lengthEl.textContent = `${baseValue} meter = ${baseValue * meterToFeet} feet` 
}

calcStats();

