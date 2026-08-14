/* ================================
   WEB 2 — FOR MY BACHAaaaa ❤️
   ================================ */

const startBtn = document.getElementById("startBtn");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");

startBtn.addEventListener("click", () => {

    /* Change button */
    startBtn.innerHTML = "Opening your heart... ❤️";

    startBtn.disabled = true;

    /* Small pause for the effect */
    setTimeout(() => {

        /* Hide opening screen */
        opening.style.opacity = "0";
        opening.style.transform = "scale(1.05)";

        setTimeout(() => {

            opening.style.display = "none";

            /* Show main website */
            mainContent.classList.remove("hidden");

            mainContent.style.opacity = "0";
            mainContent.style.transform = "translateY(20px)";

            requestAnimationFrame(() => {

                mainContent.style.transition =
                    "opacity 1.2s ease, transform 1.2s ease";

                mainContent.style.opacity = "1";
                mainContent.style.transform = "translateY(0)";

            });

            /* Scroll to the beginning */
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            /* Start celebration */
            createHearts();

        }, 900);

    }, 700);

});


/* ================================
   EXTRA FLOATING HEARTS
   ================================ */

function createHearts() {

    for (let i = 0; i < 18; i++) {

        setTimeout(() => {

            const heart = document.createElement("div");

            heart.innerHTML = ["❤️", "💗", "💕", "💖", "💞"][
                Math.floor(Math.random() * 5)
            ];

            heart.style.position = "fixed";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.bottom = "-40px";
            heart.style.fontSize =
                (16 + Math.random() * 24) + "px";

            heart.style.pointerEvents = "none";
            heart.style.zIndex = "20";

            document.body.appendChild(heart);

            const duration =
                3500 + Math.random() * 3000;

            heart.animate(
                [
                    {
                        transform: "translateY(0) rotate(0deg)",
                        opacity: 0
                    },
                    {
                        transform:
                            `translateY(-50vh) rotate(20deg)`,
                        opacity: 1
                    },
                    {
                        transform:
                            `translateY(-110vh) rotate(-20deg)`,
                        opacity: 0
                    }
                ],
                {
                    duration: duration,
                    easing: "ease-out"
                }
            );

            setTimeout(() => {
                heart.remove();
            }, duration);

        }, i * 180);

    }

}


/* ================================
   SCROLL REVEAL
   ================================ */

const sections = document.querySelectorAll(
    ".story, .letter, .reasons, .final"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach((section) => {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(40px)";

    section.style.transition =
        "opacity 1s ease, transform 1s ease";

    observer.observe(section);

});


/* ================================
   CLICK HEART EFFECT
   ================================ */

document.addEventListener("click", (event) => {

    if (
        event.target.tagName === "BUTTON" ||
        event.target.closest("button")
    ) {
        return;
    }

    const heart = document.createElement("span");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = event.clientX + "px";
    heart.style.top = event.clientY + "px";

    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";

    heart.style.fontSize = "20px";

    document.body.appendChild(heart);

    heart.animate(
        [
            {
                transform: "translate(-50%, -50%) scale(.5)",
                opacity: 1
            },
            {
                transform:
                    "translate(-50%, -120px) scale(1.4)",
                opacity: 0
            }
        ],
        {
            duration: 900,
            easing: "ease-out"
        }
    );

    setTimeout(() => {
        heart.remove();
    }, 900);

});


/* ================================
   CONSOLE MESSAGE ❤️
   ================================ */

console.log(
    "Made with love for my Bachaaaaa ❤️"
);
/* ================================
   BIRTHDAY COUNTDOWN 🎂
   30 AUGUST 2026 — 12:00 AM IST
   ================================ */

const birthdayTarget = new Date("2026-08-30T00:00:00+05:30").getTime();

const countdownDays = document.getElementById("countdownDays");
const countdownHours = document.getElementById("countdownHours");
const countdownMinutes = document.getElementById("countdownMinutes");
const countdownSeconds = document.getElementById("countdownSeconds");

function updateBirthdayCountdown() {

    const now = new Date().getTime();
    const difference = birthdayTarget - now;

    /* Birthday has arrived 🎂 */
    if (difference <= 0) {

        countdownDays.textContent = "00";
        countdownHours.textContent = "00";
        countdownMinutes.textContent = "00";
        countdownSeconds.textContent = "00";

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    countdownDays.textContent =
        String(days).padStart(2, "0");

    countdownHours.textContent =
        String(hours).padStart(2, "0");

    countdownMinutes.textContent =
        String(minutes).padStart(2, "0");

    countdownSeconds.textContent =
        String(seconds).padStart(2, "0");
}


/* Update immediately */
updateBirthdayCountdown();

/* Update every second */
setInterval(updateBirthdayCountdown, 1000);
