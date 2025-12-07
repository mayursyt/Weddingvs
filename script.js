/* COUNTDOWN TIMER */
function startCountdown() {
    // 1. UPDATED DATE/TIME: February 21, 2026 at 12 PM (noon)
    const weddingDate = new Date("2026-02-21T12:00:00").getTime();

    setInterval(() => {
        const now = new Date().getTime();
        const diff = weddingDate - now;

        const d = Math.floor(diff / (1000*60*60*24));
        const h = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
        const m = Math.floor((diff % (1000*60*60)) / (1000*60));
        const s = Math.floor((diff % (1000*60)) / 1000);

        // 2. UPDATED FORMAT: D : H : M : S
        document.getElementById("countdown").innerHTML =
        `${d}D : ${h}H : ${m}M : ${s}S`;
    }, 1000);
}
startCountdown();

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
