document.addEventListener('DOMContentLoaded', () => {
    const themeButtons = document.querySelectorAll('[data-theme]');
    const body = document.body;

    function applyTheme(theme) {
        body.classList.remove('theme-dark', 'theme-light', 'theme-auto');
        body.classList.add(`theme-${theme}`);
        themeButtons.forEach(btn => {
            if (btn.dataset.theme === theme) {
                btn.classList.add('is-active');
            } else {
                btn.classList.remove('is-active');
            }
        });
        localStorage.setItem('no-focus-theme', theme);
    }
    themeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const newTheme = btn.dataset.theme;
            applyTheme(newTheme);
        });
    });
    const savedTheme = localStorage.getItem('no-focus-theme') || 'dark';
    applyTheme(savedTheme);
});
