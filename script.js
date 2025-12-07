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

/* PHONEPE WISHES */
function openPhonePe() {
    // UPI ID (Consistent with contact details)
    const upiID = "9767372894@ybl";
    const receiverName = "Vaishnavi & Shivam";
    const txnRef = "WEDDING" + Date.now();
    const description = "Wedding Wishes";
    
    // FIX: Added &cu=INR (Currency Code) for security compliance
    const upiLink = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(receiverName)}&tr=${txnRef}&tn=${encodeURIComponent(description)}&cu=INR`;
    
    window.location.href = upiLink;
    setTimeout(() => {
        alert("📲 The UPI app installed on your phone will open to send wishes.\n\nIf it doesn't open, please:\n1. Open your UPI app (like PhonePe/Google Pay)\n2. Go to Send Money\n3. Enter UPI: " + upiID + "\n\nThank you for your wishes! ❤️");
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
