document.addEventListener('DOMContentLoaded', () => {

    const qrText = document.getElementById('qr-text');
    const genBtn = document.getElementById('generate-btn');
    const downBtn = document.getElementById('download-id');
    const qrCodeContainer = document.getElementById('qr-code');

    genBtn.addEventListener('click', () => {
        const text = qrText.value.trim();

        if (!text) {
            alert('Please enter text or URL');
            return;
        }

        qrCodeContainer.innerHTML = '';
        qrCodeContainer.style.display = 'block';

        new QRCode(qrCodeContainer, {
            text: text,
            width: 200,
            height: 200,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });

        downBtn.style.display = 'block';
    });

    downBtn.addEventListener('click', () => {
        const canvas = qrCodeContainer.querySelector('canvas');
        if (!canvas) return;

        const link = document.createElement('a');
        link.download = 'qrcode.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });

    qrText.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            genBtn.click();
        }
    });

});
