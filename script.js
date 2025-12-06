/* COUNTDOWN TIMER */
function startCountdown() {
    const weddingDate = new Date("2026-02-22T18:30:00").getTime();

    setInterval(() => {
        const now = new Date().getTime();
        const diff = weddingDate - now;

        const d = Math.floor(diff / (1000*60*60*24));
        const h = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
        const m = Math.floor((diff % (1000*60*60)) / (1000*60));
        const s = Math.floor((diff % (1000*60)) / 1000);

        document.getElementById("countdown").innerHTML =
        `${d}d : ${h}h : ${m}m : ${s}s`;
    }, 1000);
}
startCountdown();

/* REVEAL SCROLL ANIMATION */
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add("show"); } });
});
reveals.forEach(el => observer.observe(el));

/* ADD TO CALENDAR */
function showCalendarOptions() {
    const popup = document.getElementById("calendar-popup");
    popup.style.display = popup.style.display === "block" ? "none" : "block";
}
function addGoogleCalendar() {
    const gcLink = "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    "&text=Wedding+Celebration" +
    "&dates=20260222T130000Z/20260222T170000Z" +
    "&location=Aashirwad+Lawns+%26+Mangal+Karayalay+Dugaon+Maharashtra" +
    "&details=Join+us+on+our+special+day.";
    window.open(gcLink, "_blank");
}
function downloadICS() {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:Wedding Celebration
DTSTART:20260222T130000Z
DTEND:20260222T170000Z
LOCATION:Aashirwad Lawns & Mangal Karayalay, Dugaon, Maharashtra
END:VEVENT
END:VCALENDAR`;
    const blob = new Blob([icsContent], { type:"text/calendar" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "wedding.ics";
    link.click();
}

/* PHONEPE WISHES */
function openPhonePe() {
    const upiID = "9322019318-2@ibl";
    const receiverName = "Vaishnavi & Shivam";
    const txnRef = "WEDDING" + Date.now();
    const description = "Wedding Wishes";
    const upiLink = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(receiverName)}&tr=${txnRef}&tn=${encodeURIComponent(description)}`;
    window.location.href = upiLink;
    setTimeout(() => {
        alert("📲 PhonePe will open on your phone.\n\nIf it doesn't open, please:\n1. Open PhonePe app\n2. Go to Send Money\n3. Enter UPI: " + upiID + "\n\nThank you for your wishes! ❤️");
    }, 500);
}

/* WISHES TAB SWITCHER */
function switchTab(event, tabName) {
    const contents = document.querySelectorAll('.wishes-tab-content');
    const buttons = document.querySelectorAll('.wishes-tab-btn');
    
    contents.forEach(content => content.classList.remove('active'));
    buttons.forEach(button => button.classList.remove('active'));
    
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}
