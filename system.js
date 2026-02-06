const SYSTEM_KEY = 'RECEIPT_SYSTEM';

function getTransaction() {
    return JSON.parse(localStorage.getItem(SYSTEM_KEY)) || {};
}

function setTransaction(data) {
    localStorage.setItem(SYSTEM_KEY, JSON.stringify(data));
}

function updateTransaction(newData) {
    const tx = getTransaction();
    setTransaction({ ...tx, ...newData });
    console.log("Current TX State:", getTransaction()); // Membantu debugging di console browser
}

function resetTransaction() {
    localStorage.removeItem(SYSTEM_KEY);
}

// Fungsi tambahan: Cek apakah data lengkap sebelum lanjut ke kamera
function isTransactionReady() {
    const tx = getTransaction();
    return tx.layout && tx.paymentStatus === 'PAID';
}
