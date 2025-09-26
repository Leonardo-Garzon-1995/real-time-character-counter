const MAX = 100;
const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');

if (charCount) charCount.textContent = `Character Count: ${textInput?.value.length ?? 0}/${MAX}`;

function updateCounter() {
    if (!textInput || !charCount) return;

    // Trim to MAX if needed
    if (textInput.value.length > MAX) {
        textInput.value = textInput.value.slice(0, MAX);
        // keep caret at end
        textInput.selectionStart = textInput.selectionEnd = textInput.value.length;
    }

    // Update counter text and color when at max
    const len = textInput.value.length;
    charCount.textContent = `Character Count: ${len}/${MAX}`;
    charCount.style.color = len >= MAX ? 'red' : '';
}

function displayText() {
    const displayTextEl = document.querySelector('.display-text');
    if (displayTextEl) displayTextEl.textContent = textInput?.value;
}

// Update live and after IME composition
textInput?.addEventListener('input', updateCounter);
textInput?.addEventListener('input', displayText);
textInput?.addEventListener('compositionend', updateCounter);
textInput?.addEventListener('compositionend', displayText);

// Ensure initial state is correct if textarea has pre-filled content
updateCounter();

