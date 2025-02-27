document.querySelectorAll('.track').forEach(track => {
    track.addEventListener('mouseenter', () => {
        track.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    });

    track.addEventListener('mouseleave', () => {
        track.style.boxShadow = 'none';
    });
});