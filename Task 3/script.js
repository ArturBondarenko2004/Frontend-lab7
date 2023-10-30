const runawayButton = document.querySelector('.button');
const container = document.querySelector('.container');

runawayButton.addEventListener('mouseover', () => {
    const maxX = container.clientWidth - runawayButton.clientWidth;
    const maxY = container.clientHeight - runawayButton.clientHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    runawayButton.style.left = randomX + 'px';
    runawayButton.style.top = randomY + 'px';
});
