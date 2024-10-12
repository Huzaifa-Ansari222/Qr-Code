document.addEventListener('DOMContentLoaded', () => {
    // Hide QR code container initially
    const qrCodeContainer = document.getElementById("qrCode");
    qrCodeContainer.style.display = 'none';

    const generateButton = document.getElementById("generate");
    const downloadButton = document.getElementById("download");
    const qrInput = document.getElementById("qrInput");

    generateButton.addEventListener('click', () => {
        const qrInputValue = qrInput.value.trim();
        
        // Clear previous QR code
        qrCodeContainer.innerHTML = '';

        if (qrInputValue) {
            // Generate QR code using jQuery.qrcode (as jQuery version)
            $("#qrCode").qrcode({
                width: 256,
                height: 256,
                text: qrInputValue
            });

            // Show QR code div and download button
            qrCodeContainer.style.display = 'block';
            downloadButton.style.display = 'block';
        } else {
            alert("Please enter a URL or text.");
        }
    });

    // Download QR code as image
    downloadButton.addEventListener('click', () => {
        const canvas = document.querySelector("canvas");
        if (canvas) {
            const link = document.createElement("a");
            link.href = canvas.toDataURL("image/png");
            link.download = "qr_code.png";
            link.click();
        } else {
            alert("Please generate a QR code first.");
        }
    });
});
