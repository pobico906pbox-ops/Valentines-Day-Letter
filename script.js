const envelope = document.querySelector('.envelope');
const heartSeal = document.querySelector('.heart-seal');
const instruction = document.querySelector('#envelope-instruction');

const isDesktop = () => window.matchMedia('(min-width: 768px)').matches;
const OPEN_DURATION_MOBILE = 5200;
const CLOSE_DURATION_MOBILE = 4400;
const OPEN_DURATION_DESKTOP = 5900;
const CLOSE_DURATION_DESKTOP = 5200;

envelope.addEventListener('click', () => {
    if (envelope.classList.contains('animating')) return;

    envelope.classList.add('animating');

    const isOpen = envelope.classList.contains('open');
    const openDur = isDesktop() ? OPEN_DURATION_DESKTOP : OPEN_DURATION_MOBILE;
    const closeDur = isDesktop() ? CLOSE_DURATION_DESKTOP : CLOSE_DURATION_MOBILE;

    if (isOpen) {
        // Close
        if (instruction) instruction.textContent = 'Closing...';
        envelope.classList.remove('open');
        setTimeout(() => {
            heartSeal.style.opacity = 1;
        }, closeDur - 500);
        setTimeout(() => {
            envelope.classList.remove('animating');
            if (instruction) instruction.textContent = 'Click the envelope 💌';
        }, closeDur);
    } else {
        // Open
        if (instruction) instruction.textContent = 'Opening...';
        heartSeal.style.opacity = 0;
        envelope.classList.add('open');
        envelope.classList.add('played');
        setTimeout(() => {
            envelope.classList.remove('animating');
            if (instruction) instruction.textContent = 'Click the envelope to close 💌';
        }, openDur);
    }
});

heartSeal.style.transition = 'opacity 0.3s ease';