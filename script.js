/* =========================================
   WEB 2 — FOR MY BACHAaaaa ❤️
   ========================================= */


/* =========================================
   ELEMENTS
   ========================================= */

const startBtn = document.getElementById("startBtn");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");



/* =========================================
   🎵 BACKGROUND MUSIC
   ========================================= */

const loveSong = new Audio("a-fool-for-you.mp3");

loveSong.loop = true;
loveSong.volume = 0.75;



/* =========================================
   ❤️ OPEN MY HEART
   ========================================= */

if (startBtn) {

    startBtn.addEventListener("click", () => {

        /* Start music immediately from the user's tap */
        loveSong.play().catch(() => {
            console.log("Music could not start automatically.");
        });


        /* Change button */
        startBtn.innerHTML =
            "Opening your heart... ❤️";

        startBtn.disabled = true;


        /* Small cinematic pause */
        setTimeout(() => {

            /* Hide opening screen */
            opening.style.opacity = "0";
            opening.style.transform =
                "scale(1.05)";


            setTimeout(() => {

                opening.style.display = "none";


                /* Show main website */
                mainContent.classList.remove("hidden");

                mainContent.style.opacity = "0";

                mainContent.style.transform =
                    "translateY(20px)";


                requestAnimationFrame(() => {

                    mainContent.style.transition =
                        "opacity 1.2s ease, transform 1.2s ease";

                    mainContent.style.opacity = "1";

                    mainContent.style.transform =
                        "translateY(0)";

                });


                /* Start celebration */
                createHearts();


                /* Start at top */
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });


            }, 900);


        }, 700);

    });

}



/* =========================================
   ❤️ EXTRA FLOATING HEARTS
   ========================================= */

function createHearts() {

    for (let i = 0; i < 18; i++) {

        setTimeout(() => {

            const heart =
                document.createElement("div");


            heart.innerHTML =
                ["❤️", "💗", "💕", "💖", "💞"][
                    Math.floor(Math.random() * 5)
                ];


            heart.style.position = "fixed";

            heart.style.left =
                Math.random() * 100 + "vw";

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
                        transform:
                            "translateY(0) rotate(0deg)",
                        opacity: 0
                    },

                    {
                        transform:
                            "translateY(-50vh) rotate(20deg)",
                        opacity: 1
                    },

                    {
                        transform:
                            "translateY(-110vh) rotate(-20deg)",
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



/* =========================================
   ✨ SCROLL REVEAL
   ========================================= */

const sections = document.querySelectorAll(
    ".story, .letter, .reasons, .memories, .final"
);


const observer =
    new IntersectionObserver(

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



/* =========================================
   ❤️ CLICK HEART EFFECT
   ========================================= */

document.addEventListener("click", (event) => {

    if (
        event.target.tagName === "BUTTON" ||
        event.target.closest("button")
    ) {
        return;
    }


    const heart =
        document.createElement("span");


    heart.innerHTML = "❤️";


    heart.style.position = "fixed";

    heart.style.left =
        event.clientX + "px";

    heart.style.top =
        event.clientY + "px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "999";

    heart.style.fontSize = "20px";


    document.body.appendChild(heart);


    heart.animate(

        [
            {
                transform:
                    "translate(-50%, -50%) scale(.5)",
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



/* =========================================
   🎂 BIRTHDAY COUNTDOWN
   30 AUGUST 2026 — 12:00 AM IST
   ========================================= */

const birthdayTarget =
    new Date(
        "2026-08-30T00:00:00+05:30"
    ).getTime();


const countdownDays =
    document.getElementById("countdownDays");

const countdownHours =
    document.getElementById("countdownHours");

const countdownMinutes =
    document.getElementById("countdownMinutes");

const countdownSeconds =
    document.getElementById("countdownSeconds");



function updateBirthdayCountdown() {

    const now =
        Date.now();


    const difference =
        birthdayTarget - now;


    /* Birthday has arrived 🎂 */

    if (difference <= 0) {

        if (countdownDays)
            countdownDays.textContent = "00";

        if (countdownHours)
            countdownHours.textContent = "00";

        if (countdownMinutes)
            countdownMinutes.textContent = "00";

        if (countdownSeconds)
            countdownSeconds.textContent = "00";


        startBirthdayCelebration();

        return;

    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference /
                (1000 * 60 * 60)) % 24
        );


    const minutes =
        Math.floor(
            (difference /
                (1000 * 60)) % 60
        );


    const seconds =
        Math.floor(
            (difference /
                1000) % 60
        );


    if (countdownDays)
        countdownDays.textContent =
            String(days).padStart(2, "0");


    if (countdownHours)
        countdownHours.textContent =
            String(hours).padStart(2, "0");


    if (countdownMinutes)
        countdownMinutes.textContent =
            String(minutes).padStart(2, "0");


    if (countdownSeconds)
        countdownSeconds.textContent =
            String(seconds).padStart(2, "0");

}



/* Update immediately */

updateBirthdayCountdown();


/* Update every second */

setInterval(
    updateBirthdayCountdown,
    1000
);



/* =========================================
   🎂 BIRTHDAY CELEBRATION
   ========================================= */

let birthdayCelebrationStarted =
    false;


function startBirthdayCelebration() {

    if (birthdayCelebrationStarted)
        return;


    birthdayCelebrationStarted = true;


    /* Hide countdown */

    const countdown =
        document.getElementById(
            "birthdayCountdown"
        );


    if (countdown) {

        countdown.style.transition =
            "opacity 1s ease, transform 1s ease";

        countdown.style.opacity = "0";

        countdown.style.transform =
            "scale(0.8)";

    }


    /* Keep the love song playing */

    loveSong.play().catch(() => {});


    /* Fireworks */

    for (let i = 0; i < 12; i++) {

        setTimeout(() => {

            createFirework();

        }, i * 450);

    }


    /* Extra hearts */

    setTimeout(() => {

        createHearts();

    }, 1000);

}



/* =========================================
   🎆 FIREWORK
   ========================================= */

function createFirework() {

    const firework =
        document.createElement("div");


    firework.className =
        "firework";


    firework.style.left =
        (15 + Math.random() * 70) + "vw";


    firework.style.top =
        (15 + Math.random() * 45) + "vh";


    document.body.appendChild(
        firework
    );


    const particles = 24;


    for (let i = 0; i < particles; i++) {

        const particle =
            document.createElement("span");


        particle.className =
            "firework-particle";


        const angle =
            (Math.PI * 2 * i) /
            particles;


        const distance =
            60 +
            Math.random() * 100;


        particle.style.setProperty(
            "--x",
            Math.cos(angle) *
            distance +
            "px"
        );


        particle.style.setProperty(
            "--y",
            Math.sin(angle) *
            distance +
            "px"
        );


        firework.appendChild(
            particle
        );

    }


    setTimeout(() => {

        firework.remove();

    }, 1800);

}



/* =========================================
   💗 CONSOLE MESSAGE
   ========================================= */

console.log(
    "Made with love for my Bachaaaaa ❤️"
);
