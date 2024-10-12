$(document).ready(function() {
    // Hide QR code container initially
    $("#qrCode").hide();

    $("#generate").click(function() {
        const qrInput = $("#qrInput").val();
        
        // Clear previous QR code
        $("#qrCode").empty();

        if (qrInput) {
            // Generate QR code
            $("#qrCode").qrcode({
                width: 256,
                height: 256,
                text: qrInput
            });

            // Show QR code div and download button
            $("#qrCode").show();
            $("#download").show();
        } else {
            alert("Please enter a URL or text.");
        }
    });

    // Download QR code as image
    $("#download").click(function() {
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
