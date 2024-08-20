const images = [
    'url("/styles/images/bali-8838762_1920.jpg")', 
    'url("/styles/images/ocean-7890172_1920.jpg")', 
    'url("/styles/images/beach-8563083_1920.jpg")', 
    'url("/styles/images/blue-8341156_1920.jpg")', 
    'url("/styles/images/sea-4839056_1920.jpg")', 
];

function randomizeBackground() {
    const randomIndex = Math.floor(Math.random() * images.length);
    document.body.style.backgroundImage = images[randomIndex];
}

randomizeBackground();