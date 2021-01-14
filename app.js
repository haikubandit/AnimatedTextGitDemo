function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}


const letters = document.querySelectorAll('.letter');
const internalId = setInterval(function () {
    for (const letter of letters) {
        letter.getElementsByClassName.color = randomRGB();
    }
}, 1000);