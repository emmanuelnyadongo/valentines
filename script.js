document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('surprise').classList.remove('hidden');
    
    // Fireworks effect
    for (let i = 0; i < 10; i++) {
        let firework = document.createElement('div');
        firework.className = 'firework';
        document.body.appendChild(firework);
        
        setTimeout(() => {
            firework.remove();
        }, 1000);
    }
});

document.getElementById('noBtn').addEventListener('mouseover', function() {
    let x = Math.random() * window.innerWidth - 100;
    let y = Math.random() * window.innerHeight - 100;
    
    this.style.position = "absolute";
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});

document.body.onload = function() {
    let heartInterval = setInterval(() => {
        let heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.fontSize = Math.random() * 30 + 10 + 'px';
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }, 300);
};
