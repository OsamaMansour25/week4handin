<!-- Your HTML remains the same -->
    async function initAllUsers() {
    console.log("initAllCars")

    try {
    const users = await getUsers();
    const listItems = users.map(user => `
                <li>${user.name} , ${user.phone}</li>
            `).join("");
    document.getElementById("user-list").innerHTML = listItems; // Remember XSS
} catch (error) {
    console.error("Error fetching user data:", error);
}
}

    async function getUsers() {
    try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
}
    const users = await response.json();
    return users;
} catch (error) {
    throw new Error(`Error fetching users: ${error.message}`);
}
}

    // Add an event listener to trigger initAllUsers when the "Get all" button is clicked
    document.getElementById("btn-get-all").addEventListener("click", initAllUsers);

