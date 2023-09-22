import {SERVER_URL} from "../settings.js";

export function initEditCar() {
  console.log("initEditCar");

  // Get the search form and editing form
  const searchForm = document.getElementById("searchCar-form");
  const editForm = document.getElementById("editCar-form");

  // Get form elements for editing

  const brandInput = document.getElementById("brand");
  const modelInput = document.getElementById("model");
  const pricePrDayInput = document.getElementById("pricePrDay");
  const bestDiscountInput = document.getElementById("bestDiscount");

  // Add event listeners
  document.getElementById("findCar").addEventListener("click", fillForm)

  async function fillForm(evt) {
    evt.preventDefault(); // Prevent form submission

    try {
      // Call the findCar function to populate the edit form
      const car = await findCar();

      // Populate the edit form with car details
      brandInput.value = car.brand;
      modelInput.value = car.model;
      pricePrDayInput.value = car.pricePrDay;
      bestDiscountInput.value = car.bestDiscount;

      // Show the edit form
      editForm.style.display = "block";
    } catch (error) {
      console.error(error);
      // Handle the error (e.g., display an error message)
    }
  }

  editForm.addEventListener("submit", function (evt) {
    evt.preventDefault(); // Prevent form submission
    // Call a function to update the car details on the server
    // Handle success or display an error message
    // Hide the edit form if needed
  });
}

async function findCar() {

  const id = document.getElementById("car-id").value;

  try {
    const car = await fetch(SERVER_URL + "/" + id)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Car not Found");
          }
          return res.json();
        });

    // Fill the form fields with the car information
    document.getElementById("brand").value = car.brand;
    document.getElementById("model").value = car.model;
    document.getElementById("pricePrDay").value = parseInt(car.pricePrDay);
    document.getElementById("bestDiscount").value = parseInt(car.bestDiscount);

    // Show the form
    document.getElementById("car-form").style.display = "block";
  } catch (e) {
    document.getElementById("error").innerText = e.message;
  }
}


