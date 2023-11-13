// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Function to format the current date as YYYY-MM-DD
    function getCurrentDate() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    // Get the element where you want to display the date stamp
    const dateStampElement = document.getElementById("dateStamp");

    // Set the inner text of the date stamp element to the current date
    dateStampElement.innerText = getCurrentDate();
});
