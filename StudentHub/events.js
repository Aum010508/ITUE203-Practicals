async function loadEvents() {
    try {
        const response = await fetch('events.json');
        const data = await response.json();
        const container = document.querySelector('#events-container'); 
        let htmlContent = "";

        data.forEach((event) => {
    htmlContent += `
        <div class="Event-element">
            <h3>${event.name}</h3><hr>
            <p>📅 <strong>Date:</strong> ${event.date}</p>
            <p>📍 <strong>Venue:</strong> ${event.venue}</p>
        </div>&nbsp;
    `;
});
        container.innerHTML = htmlContent;

    } catch (error) {
        console.error("Error reading JSON:", error);
        document.querySelector('#events-container').innerHTML = "<p>Unable to load events right now.</p>"; 
    }
}

loadEvents();
