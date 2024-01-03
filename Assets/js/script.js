document.addEventListener("DOMContentLoaded", () => {
    const openNavLinks = document.querySelector(".bi-list");
    const navLinks = document.querySelector(".navlinks");
    const closeNav = document.querySelector(".bi-x");
    const outputElement = document.querySelector(".skills");
    const sentences = ["Website Developer", "UI/UX Designer", "Code Enthusiast"];
    let currentIndex = 0;

    openNavLinks.addEventListener("click", () => {
        navLinks.style.display = "flex";
        openNavLinks.style.display = "none";
    });

    closeNav.addEventListener("click", () => {
        navLinks.style.display = "none";
        openNavLinks.style.display = "unset";
    });

    function writeAndClear() {
        const sentence = sentences[currentIndex];
        let index = 0;

        const interval = setInterval(() => {
            outputElement.textContent += sentence[index];
            index++;

            if (index === sentence.length) {
                clearInterval(interval);

                setTimeout(() => {
                    clearAndNext();
                }, 1000);
            }
        }, 100);
    }

    writeAndClear();
});
