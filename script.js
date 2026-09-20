console.log("HM LAB initializing...");


// ==============================
// BOOT SCREEN
// ==============================

const bootScreen = document.getElementById("boot-screen");
const bootText = document.getElementById("boot-text");

if (bootScreen && bootText) {

    setTimeout(() => {
        bootText.textContent = "SYSTEM ONLINE";
    }, 1200);

    setTimeout(() => {
        bootScreen.style.opacity = "0";
    }, 2200);

    setTimeout(() => {
        bootScreen.style.display = "none";
    }, 3000);

}


// ==============================
// LAB STATUS BUTTON
// ==============================

const statusButton = document.getElementById("status-button");
const labStatus = document.getElementById("lab-status");

if (statusButton && labStatus) {

    statusButton.addEventListener("click", function () {

        labStatus.textContent =
            "LAB STATUS: ACTIVE — PROJECTS IN DEVELOPMENT";

    });

}
