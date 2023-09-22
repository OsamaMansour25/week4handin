const COUNTRY_API = "https://countries.plaul.dk/api/countries"

document.querySelector("#svg2").addEventListener("click", mapHandler);

function mapHandler(evt) {
    const elementPressed = evt.target;
    const id = elementPressed.id;

    // Check if the clicked element has an ID
    if (id) {
        elementPressed.style.fill = "blue";
        fetch(COUNTRY_API + "/" + id)
            .then((res) => res.json())
            .then((data) => {
                // Display the fetched data in the "info" div
                const infoDiv = document.querySelector(".info");
                infoDiv.textContent = JSON.stringify(data, null, 2);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}
