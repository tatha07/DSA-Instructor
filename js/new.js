function enterSystem(targetUrl) {
    const box = document.getElementById('gateway-box');
    box.classList.add('portal-transition');
    setTimeout(() => {
        window.location.href = targetUrl;
    }, 1500);
}