/* REVEAL SCROLL ANIMATION */
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add("show"); } });
}, {
    threshold: 0.1
});
reveals.forEach(el => observer.observe(el));

/* ADD TO CALENDAR */

// Function to open Google Calendar directly (simplifies the button in index.html)
function addGoogleCalendar() {
    const gcLink = "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    "&text=Wedding+Celebration" +
    "&dates=20260222T130000Z/20260222T170000Z" +
    "&location=Aashirwad+Lawns+%26+Mangal+Karayalay+Dugaon+Maharashtra" +
    "&details=Join+us+on+our+special+day.";
    window.open(gcLink, "_blank");
}
