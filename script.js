/* =========================================
   💗 WEB 2 — FOR MY BACHAaaaa
   CLEAN JAVASCRIPT
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

/*
   IMPORTANT:
   The file must be named exactly:

   a-fool-for-you.mp3

   and must be in the same GitHub folder
   as index.html.
*/

const birthdayMusic = new Audio("a-fool-for-you.mp3");

birthdayMusic.loop = true;
birthdayMusic.volume = 0.75;

let musicStarted = false;


/* =========================================
   ❤️ OPEN MY HEART
   ========================================= */

if (startBtn) {

    startBtn.addEventListener("click", function () {

        /*
           START MUSIC IMMEDIATELY.

           This is intentionally inside the
           button click so iPhone/iPad browsers
           allow the audio to start.
        */

        if (!musicStarted) {

            birthdayMusic.play()
                .then(() => {

                    musicStarted = true;

                    console.log(
                        "🎵 Music started for my Bachaaaaa ❤️"
                    );

                })
                .catch((error) => {

                    console.log(
                        "Music could not start automatically:",
                        error
                    );

                });

        }


        /* Button animation */

        startBtn.innerHTML =
            "Opening your heart... ❤️";

        startBtn.disabled = true;


        /* Opening screen animation */

        opening.style.transition =
            "opacity 1s ease, transform 1s ease";

        opening.style.opacity = "0";

        opening.style.transform =
            "scale(1.05)";


        setTimeout(() => {

            opening.style.display = "none";


            /* Show main website */

            mainContent.classList.remove("hidden");

            mainContent.style.opacity = "0";

            mainContent.style.transform =
                "translateY(25px)";


            requestAnimationFrame(() => {

                mainContent.style.transition =
                    "opacity 1.2s ease, transform 1.2s ease";

                mainContent.style.opacity = "1";

                mainContent.style.transform =
                    "translateY(0)";

            });


            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });


            /* Celebration hearts */

            createHearts();

        }, 950);

    });

}


/* =========================================
   💕 FLOATING HEARTS
   ========================================= */

function createHearts() {

    for (let i = 0; i < 18; i++) {

        setTimeout(() => {

            const heart =
                document.createElement("div");

            const heartTypes = [
                "❤️",
                "💗",
                "💕",
                "💖",
                "💞"
            ];

            heart.innerHTML =
                heartTypes[
                    Math.floor(
                        Math.random() *
                        heartTypes.length
                    )
                ];


            heart.style.position = "fixed";

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.bottom =
                "-40px";

            heart.style.fontSize =
                (16 + Math.random() * 24) + "px";

            heart.style.pointerEvents =
                "none";

            heart.style.zIndex = "999";


            document.body.appendChild(heart);


            const duration =
                3500 +
                Math.random() * 3000;


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

const sections =
    document.querySelectorAll(
        ".story, .letter, .reasons, .memories, .final"
    );


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.12
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
   📸 MEMORY CARD ANIMATION
   ========================================= */

const memoryCards =
    document.querySelectorAll(
        ".memory-card"
    );


memoryCards.forEach((card, index) => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(35px) scale(.98)";

    card.style.transition =
        "opacity .8s ease, transform .8s ease";

    card.style.transitionDelay =
        (index % 3) * 0.12 + "s";

});


const memoryObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0) scale(1)";

                    memoryObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


memoryCards.forEach((card) => {

    memoryObserver.observe(card);

});


/* =========================================
   ❤️ CLICK HEART EFFECT
   ========================================= */

document.addEventListener(
    "click",
    function (event) {

        /*
           Don't create click hearts when
           pressing buttons.
        */

        if (
            event.target.tagName === "BUTTON" ||
            event.target.closest("button")
        ) {

            return;

        }


        const heart =
            document.createElement("span");


        heart.innerHTML = "❤️";


        heart.style.position =
            "fixed";

        heart.style.left =
            event.clientX + "px";

        heart.style.top =
            event.clientY + "px";

        heart.style.pointerEvents =
            "none";

        heart.style.zIndex =
            "9999";

        heart.style.fontSize =
            "20px";


        document.body.appendChild(
            heart
        );


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

    }
);


/* =========================================
   🎂 BIRTHDAY COUNTDOWN
   30 AUGUST 2026 — 12:00 AM IST
   ========================================= */

const birthdayTarget =
    new Date(
        "2026-08-30T00:00:00+05:30"
    ).getTime();


const countdownDays =
    document.getElementById(
        "countdownDays"
    );

const countdownHours =
    document.getElementById(
        "countdownHours"
    );

const countdownMinutes =
    document.getElementById(
        "countdownMinutes"
    );

const countdownSeconds =
    document.getElementById(
        "countdownSeconds"
    );


let birthdayCelebrationStarted =
    false;


/* =========================================
   ⏳ UPDATE COUNTDOWN
   ========================================= */

function updateBirthdayCountdown() {

    /*
       If the countdown elements don't exist,
       simply stop here.
    */

    if (
        !countdownDays ||
        !countdownHours ||
        !countdownMinutes ||
        !countdownSeconds
    ) {

        return;

    }


    const now =
        Date.now();


    const difference =
        birthdayTarget - now;


    /* Birthday has arrived 🎂 */

    if (difference <= 0) {

        countdownDays.textContent = "00";

        countdownHours.textContent = "00";

        countdownMinutes.textContent = "00";

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
                (1000 * 60 * 60)) %
            24
        );


    const minutes =
        Math.floor(
            (difference /
                (1000 * 60)) %
            60
        );


    const seconds =
        Math.floor(
            (difference /
                1000) %
            60
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


/* Start countdown */

updateBirthdayCountdown();


setInterval(
    updateBirthdayCountdown,
    1000
);


/* =========================================
   🎂 BIRTHDAY CELEBRATION
   ========================================= */

function startBirthdayCelebration() {

    if (
        birthdayCelebrationStarted
    ) {

        return;

    }


    birthdayCelebrationStarted =
        true;


    console.log(
        "🎂 Happy Birthday Koushiki ❤️"
    );


    const countdown =
        document.getElementById(
            "birthdayCountdown"
        );


    if (countdown) {

        countdown.style.transition =
            "opacity 1s ease, transform 1s ease";

        countdown.style.opacity =
            "0";

        countdown.style.transform =
            "scale(.85)";


        setTimeout(() => {

            countdown.style.display =
                "none";

        }, 1000);

    }


    /*
       IMPORTANT:

       The music is NOT started here.

       Music already starts when she presses
       "Open My Heart ❤️".
    */


    /* Birthday hearts */

    setTimeout(() => {

        createHearts();

    }, 500);


    /* Birthday fireworks */

    setTimeout(() => {

        startFireworks();

    }, 800);

}


/* =========================================
   🎆 FIREWORKS
   ========================================= */

function startFireworks() {

    /*
       Prevent duplicate fireworks canvases.
    */

    if (
        document.getElementById(
            "fireworksCanvas"
        )
    ) {

        return;

    }


    const canvas =
        document.createElement(
            "canvas"
        );


    canvas.id =
        "fireworksCanvas";


    canvas.style.position =
        "fixed";

    canvas.style.left =
        "0";

    canvas.style.top =
        "0";

    canvas.style.width =
        "100%";

    canvas.style.height =
        "100%";

    canvas.style.pointerEvents =
        "none";

    canvas.style.zIndex =
        "9999";


    document.body.appendChild(
        canvas
    );


    const ctx =
        canvas.getContext("2d");


    function resizeCanvas() {

        canvas.width =
            window.innerWidth;

        canvas.height =
            window.innerHeight;

    }


    resizeCanvas();


    window.addEventListener(
        "resize",
        resizeCanvas
    );


    const fireworks = [];

    const particles = [];


    /* =====================================
       CREATE FIREWORK
       ===================================== */

    function createFirework() {

        const x =
            Math.random() *
            canvas.width;


        const targetY =
            Math.random() *
            canvas.height *
            0.45;


        fireworks.push({

            x: x,

            y: canvas.height,

            targetY: targetY,

            speed: 7

        });

    }


    /* =====================================
       EXPLODE FIREWORK
       ===================================== */

    function explode(x, y) {

        const emojis = [
            "❤️",
            "💗",
            "💕",
            "💖",
            "✨"
        ];


        for (
            let i = 0;
            i < 35;
            i++
        ) {

            const angle =
                Math.random() *
                Math.PI *
                2;


            const speed =
                2 +
                Math.random() *
                5;


            particles.push({

                x: x,

                y: y,

                vx:
                    Math.cos(angle) *
                    speed,

                vy:
                    Math.sin(angle) *
                    speed,

                life: 100,

                emoji:
                    emojis[
                        Math.floor(
                            Math.random() *
                            emojis.length
                        )
                    ]

            });

        }

    }


    /* =====================================
       ANIMATION
       ===================================== */

    function animate() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        /* Fireworks going upward */

        fireworks.forEach(
            (firework, index) => {

                firework.y -=
                    firework.speed;


                ctx.font =
                    "18px serif";


                ctx.fillText(
                    "✨",
                    firework.x,
                    firework.y
                );


                if (
                    firework.y <=
                    firework.targetY
                ) {

                    explode(
                        firework.x,
                        firework.y
                    );


                    fireworks.splice(
                        index,
                        1
                    );

                }

            }
        );


        /* Explosion particles */

        particles.forEach(
            (particle, index) => {

                particle.x +=
                    particle.vx;

                particle.y +=
                    particle.vy;

                particle.vy +=
                    0.05;

                particle.life -=
                    1;


                ctx.globalAlpha =
                    particle.life /
                    100;


                ctx.font =
                    "22px serif";


                ctx.fillText(
                    particle.emoji,
                    particle.x,
                    particle.y
                );


                if (
                    particle.life <=
                    0
                ) {

                    particles.splice(
                        index,
                        1
                    );

                }

            }
        );


        ctx.globalAlpha = 1;


        requestAnimationFrame(
            animate
        );

    }


    /* New firework every 450ms */

    setInterval(
        createFirework,
        450
    );


    animate();

}


/* =========================================
   🎵 MUSIC ERROR HELPER
   ========================================= */

birthdayMusic.addEventListener(
    "error",
    function () {

        console.log(
            "❌ Music file could not be loaded."
        );

        console.log(
            "Check that a-fool-for-you.mp3 is in the same folder as index.html."
        );

    }
);


/* =========================================
   💗 CONSOLE MESSAGE
   ========================================= */

console.log(
    "Made with love for my Bachaaaaa ❤️"
);
