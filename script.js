/* =========================================================
   💗 WEB 2 — FOR MY BACHAaaaa
   PREMIUM JAVASCRIPT
   ========================================================= */


/* =========================================================
   ELEMENTS
   ========================================================= */

const startBtn = document.getElementById("startBtn");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");


/* =========================================================
   🎵 BACKGROUND MUSIC
   ========================================================= */

const birthdayMusic = new Audio("a-fool-for-you.mp3");

birthdayMusic.loop = true;
birthdayMusic.volume = 0.75;

let musicStarted = false;


/* =========================================================
   🎵 MUSIC BUTTON
   ========================================================= */

const musicToggle =
    document.getElementById("musicToggle");

if (musicToggle) {

    musicToggle.addEventListener("click", () => {

        if (!musicStarted) {

            birthdayMusic.play()
                .then(() => {

                    musicStarted = true;

                    musicToggle.textContent = "🔊";

                })
                .catch((error) => {

                    console.log(
                        "Music could not start:",
                        error
                    );

                });

            return;
        }


        if (birthdayMusic.paused) {

            birthdayMusic.play();

            musicToggle.textContent = "🔊";

        } else {

            birthdayMusic.pause();

            musicToggle.textContent = "🔇";

        }

    });

}


/* =========================================================
   ❤️ OPEN MY HEART
   ========================================================= */

if (startBtn) {

    startBtn.addEventListener("click", function () {

        /* Start music from user interaction */

        if (!musicStarted) {

            birthdayMusic.play()
                .then(() => {

                    musicStarted = true;

                    if (musicToggle) {
                        musicToggle.textContent = "🔊";
                    }

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


        startBtn.innerHTML =
            "Opening your heart... ❤️";

        startBtn.disabled = true;


        opening.style.transition =
            "opacity 1s ease, transform 1s ease";

        opening.style.opacity = "0";

        opening.style.transform =
            "scale(1.05)";


        setTimeout(() => {

            opening.style.display = "none";


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


            createHearts();

        }, 950);

    });

}


/* =========================================================
   💕 FLOATING HEARTS
   ========================================================= */

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


            heart.textContent =
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

            heart.style.zIndex =
                "999";


            document.body.appendChild(
                heart
            );


            const duration =
                3500 +
                Math.random() * 3000;


            const animation =
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


            animation.finished
                .then(() => {

                    heart.remove();

                })
                .catch(() => {

                    heart.remove();

                });


        }, i * 180);

    }

}


/* =========================================================
   ✨ SCROLL REVEAL
   ========================================================= */

const sections =
    document.querySelectorAll(
        ".story, .letter, .reasons, .memories, .memory-video, .final"
    );


const sectionObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    sectionObserver.unobserve(
                        entry.target
                    );

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

    sectionObserver.observe(section);

});


/* =========================================================
   📸 MEMORY CARDS
   ========================================================= */

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
            threshold: 0.12
        }

    );


memoryCards.forEach((card) => {

    memoryObserver.observe(card);

});


/* =========================================================
   📸 FULL SCREEN PHOTO GALLERY
   ========================================================= */

const photoViewer =
    document.getElementById(
        "photoViewer"
    );

const viewerImage =
    document.getElementById(
        "viewerImage"
    );

const viewerClose =
    document.getElementById(
        "viewerClose"
    );

const viewerPrev =
    document.getElementById(
        "viewerPrev"
    );

const viewerNext =
    document.getElementById(
        "viewerNext"
    );

const viewerCounter =
    document.getElementById(
        "viewerCounter"
    );

const viewerText =
    document.getElementById(
        "viewerText"
    );


const memoryButtons =
    document.querySelectorAll(
        ".memory-open"
    );


let currentPhoto = 0;


/* =========================================================
   PHOTO DATA
   ========================================================= */

const memories = Array.from(
    memoryCards
).map((card, index) => {

    const image =
        card.querySelector("img");

    return {

        src:
            image
                ? image.getAttribute("src")
                : `photo_${String(index + 1).padStart(2, "0")}.jpeg`,

        alt:
            image
                ? image.getAttribute("alt")
                : `Our memory ${index + 1}`,

        caption:
            card.getAttribute(
                "data-caption"
            ) ||
            (
                card.querySelector("p")
                    ? card.querySelector("p").textContent.trim()
                    : "A beautiful memory. ❤️"
            )

    };

});


/* =========================================================
   OPEN PHOTO
   ========================================================= */

function openPhoto(index) {

    if (
        !photoViewer ||
        !viewerImage ||
        memories.length === 0
    ) {

        return;

    }


    currentPhoto =
        (index + memories.length) %
        memories.length;


    const memory =
        memories[currentPhoto];


    viewerImage.src =
        memory.src;

    viewerImage.alt =
        memory.alt;


    if (viewerText) {

        viewerText.textContent =
            memory.caption;

    }


    if (viewerCounter) {

        viewerCounter.textContent =
            `${String(currentPhoto + 1).padStart(2, "0")} / ${memories.length}`;

    }


    photoViewer.classList.add(
        "active"
    );

    photoViewer.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   CLOSE PHOTO
   ========================================================= */

function closePhoto() {

    if (!photoViewer) {
        return;
    }


    photoViewer.classList.remove(
        "active"
    );

    photoViewer.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";

}


/* =========================================================
   NEXT PHOTO
   ========================================================= */

function nextPhoto() {

    openPhoto(
        currentPhoto + 1
    );

}


/* =========================================================
   PREVIOUS PHOTO
   ========================================================= */

function previousPhoto() {

    openPhoto(
        currentPhoto - 1
    );

}


/* =========================================================
   PHOTO BUTTON EVENTS
   ========================================================= */

memoryButtons.forEach(
    (button, index) => {

        button.addEventListener(
            "click",
            () => {

                openPhoto(index);

            }
        );

    }
);


/* =========================================================
   VIEWER BUTTONS
   ========================================================= */

if (viewerClose) {

    viewerClose.addEventListener(
        "click",
        closePhoto
    );

}


if (viewerNext) {

    viewerNext.addEventListener(
        "click",
        nextPhoto
    );

}


if (viewerPrev) {

    viewerPrev.addEventListener(
        "click",
        previousPhoto
    );

}


/* =========================================================
   CLICK OUTSIDE PHOTO = CLOSE
   ========================================================= */

if (photoViewer) {

    photoViewer.addEventListener(
        "click",
        (event) => {

            if (
                event.target ===
                photoViewer
            ) {

                closePhoto();

            }

        }
    );

}


/* =========================================================
   ⌨️ KEYBOARD CONTROLS
   ========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            !photoViewer ||
            !photoViewer.classList.contains("active")
        ) {

            return;

        }


        if (event.key === "Escape") {

            closePhoto();

        }


        if (
            event.key === "ArrowRight"
        ) {

            nextPhoto();

        }


        if (
            event.key === "ArrowLeft"
        ) {

            previousPhoto();

        }

    }
);


/* =========================================================
   📱 SWIPE SUPPORT
   ========================================================= */

let touchStartX = 0;
let touchStartY = 0;


if (photoViewer) {

    photoViewer.addEventListener(
        "touchstart",
        (event) => {

            if (
                event.touches.length !== 1
            ) {

                return;

            }


            touchStartX =
                event.touches[0].clientX;

            touchStartY =
                event.touches[0].clientY;

        },
        {
            passive: true
        }
    );


    photoViewer.addEventListener(
        "touchend",
        (event) => {

            if (
                event.changedTouches.length !== 1
            ) {

                return;

            }


            const touchEndX =
                event.changedTouches[0].clientX;

            const touchEndY =
                event.changedTouches[0].clientY;


            const differenceX =
                touchEndX -
                touchStartX;

            const differenceY =
                touchEndY -
                touchStartY;


            /* Ignore mostly vertical swipes */

            if (
                Math.abs(differenceX) <
                Math.abs(differenceY)
            ) {

                return;

            }


            /* Minimum swipe distance */

            if (
                Math.abs(differenceX) <
                50
            ) {

                return;

            }


            if (
                differenceX < 0
            ) {

                nextPhoto();

            } else {

                previousPhoto();

            }

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   📸 PRELOAD NEARBY PHOTOS
   ========================================================= */

function preloadPhoto(index) {

    if (
        memories.length === 0
    ) {

        return;

    }


    const safeIndex =
        (
            index +
            memories.length
        ) %
        memories.length;


    const image =
        new Image();


    image.src =
        memories[safeIndex].src;

}


function preloadNearbyPhotos() {

    preloadPhoto(
        currentPhoto + 1
    );

    preloadPhoto(
        currentPhoto - 1
    );

}


if (photoViewer) {

    photoViewer.addEventListener(
        "transitionend",
        preloadNearbyPhotos
    );

}


/* =========================================================
   ❤️ CLICK HEART EFFECT
   ========================================================= */

document.addEventListener(
    "click",
    function (event) {

        if (
            event.target.closest("button") ||
            event.target.closest("video") ||
            event.target.closest(".photo-viewer")
        ) {

            return;

        }


        const heart =
            document.createElement("span");


        heart.innerHTML =
            "❤️";


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


        const animation =
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


        animation.finished
            .then(() => {

                heart.remove();

            })
            .catch(() => {

                heart.remove();

            });

    }
);


/* =========================================================
   🎂 BIRTHDAY COUNTDOWN
   30 AUGUST 2026 — 12:00 AM IST
   ========================================================= */

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


/* =========================================================
   ⏳ UPDATE COUNTDOWN
   ========================================================= */

function updateBirthdayCountdown() {

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
        birthdayTarget -
        now;


    if (
        difference <= 0
    ) {

        countdownDays.textContent =
            "00";

        countdownHours.textContent =
            "00";

        countdownMinutes.textContent =
            "00";

        countdownSeconds.textContent =
            "00";


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
            (
                difference /
                (1000 * 60 * 60)
            ) % 24
        );


    const minutes =
        Math.floor(
            (
                difference /
                (1000 * 60)
            ) % 60
        );


    const seconds =
        Math.floor(
            (
                difference /
                1000
            ) % 60
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


updateBirthdayCountdown();


setInterval(
    updateBirthdayCountdown,
    1000
);


/* =========================================================
   🎂 BIRTHDAY CELEBRATION
   ========================================================= */

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


    setTimeout(() => {

        createHearts();

    }, 500);


    setTimeout(() => {

        startFireworks();

    }, 800);

}


/* =========================================================
   🎆 FIREWORKS
   ========================================================= */

function startFireworks() {

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


    function createFirework() {

        fireworks.push({

            x:
                Math.random() *
                canvas.width,

            y:
                canvas.height,

            targetY:
                Math.random() *
                canvas.height *
                0.45,

            speed:
                7

        });

    }


    function explode(
        x,
        y
    ) {

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

                x:
                    x,

                y:
                    y,

                vx:
                    Math.cos(angle) *
                    speed,

                vy:
                    Math.sin(angle) *
                    speed,

                life:
                    100,

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


    function animate() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        fireworks.forEach(
            (
                firework,
                index
            ) => {

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


        particles.forEach(
            (
                particle,
                index
            ) => {

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


        ctx.globalAlpha =
            1;


        requestAnimationFrame(
            animate
        );

    }


    setInterval(
        createFirework,
        450
    );


    animate();

}


/* =========================================================
   🎵 MUSIC ERROR
   ========================================================= */

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


/* =========================================================
   📸 IMAGE ERROR HELPER
   ========================================================= */

document.querySelectorAll(
    ".memory-photo img"
).forEach(
    (image) => {

        image.addEventListener(
            "error",
            () => {

                console.log(
                    "❌ Could not load:",
                    image.src
                );

            }
        );

    }
);


/* =========================================================
   💗 CONSOLE MESSAGE
   ========================================================= */

console.log(
    "💗 Koushiki Birthday Website loaded successfully."
);

console.log(
    `📸 ${memories.length} memories loaded.`
);

console.log(
    "🎥 Two videos available."
);

console.log(
    "🎵 Birthday music ready."
);
