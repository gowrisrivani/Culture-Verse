document.addEventListener('DOMContentLoaded', function () {
    fetchData();
});

async function fetchData() {
    try {
        const response = await fetch('events.json');
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayData(data) {
    const dataContainer = document.getElementById('data-container');

    // Example: Display data as a list
    const list = document.createElement('ul');
    data.forEach(event => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>${event.event}</strong><br>
            <em>Date:</em> ${event.date}<br>
            <em>Location:</em> ${event.location}<br>
            <em>Description:</em> ${event.description}
        `;
        list.appendChild(listItem);
    });

    dataContainer.appendChild(list);
}