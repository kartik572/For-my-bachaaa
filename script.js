"use strict";


/* =========================================================
   💗 WEB 2 — PREMIUM BIRTHDAY EXPERIENCE
   JAVASCRIPT
   ========================================================= */


/* =========================================================
   01 — ELEMENTS
   ========================================================= */

const enterButton = document.getElementById("enterButton");
const musicButton = document.getElementById("musicButton");
const backgroundMusic = document.getElementById("backgroundMusic");

const letterCard = document.getElementById("letterCard");
const letterButton = document.getElementById("letterButton");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");
const lightboxCounter = document.getElementById("lightboxCounter");

const memoryCards = Array.from(
    document.querySelectorAll(".memory-card")
);

const cursorGlow = document.getElementById("cursorGlow");


/* =========================================================
   02 — HERO ENTRANCE
   ========================================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .querySelectorAll(".hero .reveal")
            .forEach(element => {
                element.classList.add("visible");
            });

    }, 150);

});


/* =========================================================
   03 — ENTER BUTTON
   ========================================================= */

if (enterButton) {

    enterButton.addEventListener("click", () => {

        const intro = document.querySelector(".intro");

        if (intro) {

            intro.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

        startMusic();

    });

}


/* =========================================================
   04 — MUSIC
   ========================================================= */

let musicStarted = false;


function startMusic() {

    if (!backgroundMusic) return;

    backgroundMusic.volume = 0;

    const playPromise = backgroundMusic.play();

    if (playPromise !== undefined) {

        playPromise
            .then(() => {

                musicStarted = true;

                musicButton?.classList.add("playing");

                fadeMusicIn();

            })
            .catch(() => {

                musicStarted = false;

            });

    }

}


function fadeMusicIn() {

    if (!backgroundMusic) return;

    let volume = 0;

    const fade = setInterval(() => {

        volume += 0.04;

        if (volume >= 0.65) {

            volume = 0.65;
            clearInterval(fade);

        }

        backgroundMusic.volume = volume;

    }, 80);

}


function fadeMusicOut() {

    if (!backgroundMusic) return;

    let volume = backgroundMusic.volume;

    const fade = setInterval(() => {

        volume -= 0.06;

        if (volume <= 0) {

            volume = 0;
            clearInterval(fade);

            backgroundMusic.pause();

        }

        backgroundMusic.volume = volume;

    }, 60);

}


if (musicButton) {

    musicButton.addEventListener("click", () => {

        if (!backgroundMusic) return;

        if (backgroundMusic.paused) {

            backgroundMusic.volume = 0;

            backgroundMusic
                .play()
                .then(() => {

                    musicStarted = true;

                    musicButton.classList.add("playing");

                    fadeMusicIn();

                })
                .catch(() => {});

        } else {

            fadeMusicOut();

            musicButton.classList.remove("playing");

        }

    });

}


/* =========================================================
   05 — LETTER OPENING
   ========================================================= */

if (letterButton && letterCard) {

    letterButton.addEventListener("click", () => {

        letterCard.classList.add("open");

        letterButton.textContent = "Opened with love ❤️";

    });

}


/* =========================================================
   06 — SCROLL REVEAL
   ========================================================= */

const revealSections = document.querySelectorAll(
    ".reveal-section"
);


const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px"
    }
);


revealSections.forEach(section => {

    revealObserver.observe(section);

});


/* =========================================================
   07 — GALLERY
   ========================================================= */

let currentImageIndex = 0;


function openLightbox(index) {

    if (!memoryCards.length) return;

    currentImageIndex = index;

    const image = memoryCards[index].querySelector("img");

    if (!image) return;

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;

    updateLightboxCounter();

    lightbox.classList.add("active");

    lightbox.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

}


function closeLightbox() {

    lightbox.classList.remove("active");

    lightbox.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

}


function showPreviousImage() {

    currentImageIndex--;

    if (currentImageIndex < 0) {

        currentImageIndex = memoryCards.length - 1;

    }

    updateLightboxImage();

}


function showNextImage() {

    currentImageIndex++;

    if (currentImageIndex >= memoryCards.length) {

        currentImageIndex = 0;

    }

    updateLightboxImage();

}


function updateLightboxImage() {

    const card = memoryCards[currentImageIndex];

    if (!card) return;

    const image = card.querySelector("img");

    if (!image) return;

    lightboxImage.style.opacity = "0";

    setTimeout(() => {

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        updateLightboxCounter();

        lightboxImage.style.opacity = "1";

    }, 120);

}


function updateLightboxCounter() {

    if (!lightboxCounter) return;

    const current = String(
        currentImageIndex + 1
    ).padStart(2, "0");

    const total = String(
        memoryCards.length
    ).padStart(2, "0");

    lightboxCounter.textContent =
        `${current} / ${total}`;

}


memoryCards.forEach((card, index) => {

    card.addEventListener("click", () => {

        openLightbox(index);

    });

});


if (lightboxClose) {

    lightboxClose.addEventListener(
        "click",
        closeLightbox
    );

}


if (lightboxPrev) {

    lightboxPrev.addEventListener(
        "click",
        showPreviousImage
    );

}


if (lightboxNext) {

    lightboxNext.addEventListener(
        "click",
        showNextImage
    );

}


/* =========================================================
   08 — LIGHTBOX BACKGROUND CLICK
   ========================================================= */

if (lightbox) {

    lightbox.addEventListener("click", event => {

        if (event.target === lightbox) {

            closeLightbox();

        }

    });

}


/* =========================================================
   09 — KEYBOARD CONTROLS
   ========================================================= */

document.addEventListener("keydown", event => {

    if (!lightbox.classList.contains("active")) {
        return;
    }

    if (event.key === "Escape") {

        closeLightbox();

    }

    if (event.key === "ArrowLeft") {

        showPreviousImage();

    }

    if (event.key === "ArrowRight") {

        showNextImage();

    }

});


/* =========================================================
   10 — SWIPE SUPPORT
   ========================================================= */

let touchStartX = 0;
let touchEndX = 0;


if (lightbox) {

    lightbox.addEventListener(
        "touchstart",
        event => {

            touchStartX =
                event.changedTouches[0].screenX;

        },
        { passive: true }
    );


    lightbox.addEventListener(
        "touchend",
        event => {

            touchEndX =
                event.changedTouches[0].screenX;

            handleSwipe();

        },
        { passive: true }
    );

}


function handleSwipe() {

    const distance =
        touchEndX - touchStartX;

    if (Math.abs(distance) < 50) {
        return;
    }

    if (distance > 0) {

        showPreviousImage();

    } else {

        showNextImage();

    }

}


/* =========================================================
   11 — CURSOR GLOW
   ========================================================= */

if (
    cursorGlow &&
    window.matchMedia("(pointer: fine)").matches
) {

    let mouseX = 0;
    let mouseY = 0;

    let glowX = 0;
    let glowY = 0;


    document.addEventListener("mousemove", event => {

        mouseX = event.clientX;
        mouseY = event.clientY;

        cursorGlow.style.opacity = "1";

    });


    document.addEventListener("mouseleave", () => {

        cursorGlow.style.opacity = "0";

    });


    function animateGlow() {

        glowX += (mouseX - glowX) * 0.08;
        glowY += (mouseY - glowY) * 0.08;

        cursorGlow.style.left =
            `${glowX}px`;

        cursorGlow.style.top =
            `${glowY}px`;

        requestAnimationFrame(animateGlow);

    }


    animateGlow();

}


/* =========================================================
   12 — IMAGE HOVER DEPTH
   ========================================================= */

if (window.matchMedia("(pointer: fine)").matches) {

    memoryCards.forEach(card => {

        card.addEventListener("mousemove", event => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const rotateX =
                ((y / rect.height) - 0.5) * -5;

            const rotateY =
                ((x / rect.width) - 0.5) * 5;

            card.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-3px)`;

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

}


/* =========================================================
   13 — VIDEO OBSERVER
   ========================================================= */

const birthdayVideo =
    document.getElementById("birthdayVideo");


if (birthdayVideo) {

    const videoObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        birthdayVideo.classList.add(
                            "video-visible"
                        );

                    }

                });

            },
            {
                threshold: 0.25
            }
        );

    videoObserver.observe(birthdayVideo);

}


/* =========================================================
   14 — PREVENT BROKEN IMAGE EXPERIENCE
   ========================================================= */

memoryCards.forEach(card => {

    const image =
        card.querySelector("img");

    if (!image) return;

    image.addEventListener("error", () => {

        card.classList.add("image-error");

    });

});


/* =========================================================
   15 — FINAL SECTION EFFECT
   ========================================================= */

const finalSection =
    document.querySelector(".final-section");


if (finalSection) {

    const finalObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        finalSection.classList.add(
                            "final-visible"
                        );

                    }

                });

            },
            {
                threshold: 0.3
            }
        );

    finalObserver.observe(finalSection);

}


/* =========================================================
   16 — SMOOTH ANCHOR SUPPORT
   ========================================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


/* =========================================================
   17 — INITIAL STATE
   ========================================================= */

if (lightboxImage) {

    lightboxImage.style.transition =
        "opacity 0.25s ease";

}


/* =========================================================
   18 — CONSOLE CONFIRMATION
   ========================================================= */

console.log(
    "💗 Web 2 — Koushiki Birthday Experience loaded."
);
