// Vanta Background Initialization
document.addEventListener('DOMContentLoaded', function() {
    const vantaElement = document.getElementById('vanta-background');
    
    if (vantaElement && typeof VANTA !== 'undefined') {
        // Initialize Vanta.NET effect
        window.vantaEffect = VANTA.NET({
            el: vantaElement,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x3fa4ff,
            backgroundColor: 0x0,
            points: 11.00,
            maxDistance: 22.00,
            spacing: 16.00
        });
        
        // Handle window resize
        let resizeTimeout;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function() {
                if (window.vantaEffect) {
                    window.vantaEffect.resize();
                }
            }, 250);
        });
    }
});