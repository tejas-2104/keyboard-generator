const keyDisplay = document.getElementById('keyDisplay');
const keyCodeDisplay = document.getElementById('keyCodeDisplay');

document.addEventListener('keydown', (event) => {
    const key = event.key;
    const keyCode = event.keyCode;

    const keyString = event.ctrlKey || event.altKey || event.metaKey ? `${event.code} (${key})` : key;

    keyDisplay.textContent = `Pressed Key: ${keyString}`;
    keyCodeDisplay.textContent = `Key Code: ${keyCode}`;
});
