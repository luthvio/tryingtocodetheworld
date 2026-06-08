const button = document.getElementById('hiButton');

button.addEventListener('click', (e) => {
    // 1. Ambil posisi koordinat tombol di layar saat diklik
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // 2. Buat ledakan kembang api love (30 partikel)
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️'; 
        heart.classList.add('heart-particle');

        heart.style.left = x + 'px';
        heart.style.top = y + 'px';

        const angle = Math.random() * Math.PI * 2;
        const velocity = 50 + Math.random() * 150; 
        const targetX = Math.cos(angle) * velocity + 'px';
        const targetY = Math.sin(angle) * velocity + 'px';

        heart.style.setProperty('--x', targetX);
        heart.style.setProperty('--y', targetY);

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1000);
    }

    // 3. SEBELUMNYA DIHILANGKAN, SEKARANG KITA SULAP TOMBOLNYA:
    // Sembunyikan tombol sekejap agar animasi fade in terasa pas
    button.style.display = 'none'; 
    
    setTimeout(() => {
        button.innerText = "Thank You :)";          // Ubah tulisan tombol
        button.classList.add('thank-you-state');     // Berikan warna pink soft & animasi fade in
        button.style.display = 'block';              // Munculkan kembali tombolnya
    }, 100); // Muncul kembali setelah 0.1 detik (setelah kembang api meledak)
});