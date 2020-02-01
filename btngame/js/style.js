{
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        const results = ['ホイミ', 'ベホイミ', 'ベホイム', 'ベホマ', 'ベホマラー', 'ベホマズン'];
        const n = Math.floor(Math.random() * results.length);
        btn.textContent = results[n];
    });

    btn.addEventListener('mousedown', () => {
        btn.classList.add('pressed');
    });
    btn.addEventListener('mouseup', () => {
        btn.classList.remove('pressed');
    });


}