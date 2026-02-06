import confetti from 'canvas-confetti';

export function genConfetti() {
    var end = Date.now() + (5 * 1000);

    // go Buckeyes!
    var colors = ['#bb0016ff', '#ffffff'];

    (function frame() {
        confetti({
            particleCount: 10,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 10,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}