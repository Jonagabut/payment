// Fungsi untuk menghasilkan ID pelanggan acak
function generateRandomCustomerId() {
    var randomNumber = Math.floor(Math.random() * 1000000); // Angka acak antara 0 dan 999999
    return randomNumber.toString().padStart(6, '0'); // Mengubah ke string dengan panjang minimal 6 digit (gunakan sesuai kebutuhan)
}

// Fungsi untuk mengirim pesan WhatsApp setelah pembayaran berhasil
function sendWhatsAppMessage(total, customerName, customerId) {
    var message = `pembayaran zon store:\n\nTotal: Rp ${total}\n\nPelanggan: ${customerName}\nID Pelanggan: ${customerId}\n\nSudah dibayar via DANA.`;
    var encodedMessage = encodeURIComponent(message);
    window.location.href = `https://wa.me/6285179798301?text=${encodedMessage}`;
    alert("Pesanan Anda telah berhasil. Terima kasih!");
}

// Fungsi untuk melakukan pembayaran
function processPayment() {
    // Simulasi data pembelian
    var total = 00;
    var customerName = "Buyer Zon";
    var customerId = generateRandomCustomerId(); // Menghasilkan ID pelanggan acak

    // Simulasi pengiriman pesan WhatsApp setelah pembayaran berhasil
    sendWhatsAppMessage(total, customerName, customerId);
}

// Menangani klik pada tombol konfirmasi pembayaran
document.getElementById("confirmButton").addEventListener("click", processPayment);
