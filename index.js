const MAX = 50;
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

// Update live and after IME composition
textInput?.addEventListener('input', updateCounter);
textInput?.addEventListener('compositionend', updateCounter);

// Ensure initial state is correct if textarea has pre-filled content
updateCounter();