import { SERVER_URL } from "../../settings.js";
import { makeOptions } from "../../utils.js";

export function initAddCar() {
    // Attach an event listener to the "Add Car" button
    const carForm = document.getElementById("car-form");
    carForm.addEventListener("submit", addCar);
}

async function addCar() {
    // Get user input from form
    const brand = document.getElementById("brand").value;
    const model = document.getElementById("model").value;
    const pricePrDay = parseFloat(document.getElementById("pricePrDay").value);
    const bestDiscount = parseFloat(document.getElementById("bestDiscount").value);

    const car = {
        brand: brand,
        model: model,
        pricePrDay: pricePrDay,
        bestDiscount: bestDiscount,
    };

    const options = makeOptions("POST", car);

    try {
        // Send the POST request to add the new car
        const response = await fetch(SERVER_URL, options);

        if (!response.ok) {
            throw new Error("Failed to add the car.");
        }

    } catch (error) {
        console.error(error);
        alert("An error occurred while adding the car.");
    }
}
