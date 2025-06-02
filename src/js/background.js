const colorSelector = document.getElementById('colorSelector');
const toggleSlideshow = document.getElementById('toggleSlideshow');
const banner = document.getElementById('banner');

function applyColor(color) {
    document.body.style.backgroundColor = color;
    document.documentElement.style.setProperty('--bg-color', color);
}

function updateSlideshowVisibility() {
    if (toggleSlideshow.checked) {
        banner.classList.remove('hidden');
    } else {
        banner.classList.add('hidden');
    }
}

colorSelector.addEventListener('change', function () {
    const selectedColor = this.value;
    applyColor(selectedColor);
    localStorage.setItem('bgColor', selectedColor);
    localStorage.setItem('showSlideshow', toggleSlideshow.checked);
});

toggleSlideshow.addEventListener('change', function () {
    updateSlideshowVisibility();
    localStorage.setItem('showSlideshow', this.checked);
});

window.addEventListener('load', function () {
    const savedColor = localStorage.getItem('bgColor');
    const savedSlideshow = localStorage.getItem('showSlideshow');

    if (savedColor) {
        applyColor(savedColor);
        colorSelector.value = savedColor;
    }

    if (savedSlideshow !== null) {
        const show = savedSlideshow === 'true';
        toggleSlideshow.checked = show;
        updateSlideshowVisibility();
    }
});
