// ============================================
// LOGGING & ERROR HANDLING
// ============================================
console.log('🚀 main.js mulai diload...');

// Tangkap semua error global
window.onerror = function(msg, url, line, col, error) {
    console.error('❌ Global Error:', msg, 'di', url, 'baris', line);
    // Tampilkan di UI jika ada
    var logDiv = document.getElementById('log');
    if (logDiv) {
        logDiv.innerHTML = '⚠️ Error: ' + msg + ' (baris ' + line + ')' + '<br>' + logDiv.innerHTML;
    }
    return true;
};

// ============================================
// VARIABEL GLOBAL (DEFINISIKAN DI AWAL)
// ============================================
// PASTIKAN SEMUA VARIABEL GLOBAL DIDEKLARASIKAN
var currentLat = null;
var currentLng = null;
var currentAcc = null;
var watchID = null;
var daftarTitik = [];
var matchedTipe = null;
var ttdData = null;
var daftarFoto = [];

console.log('📦 Variabel global dideklarasikan');
// ============================================
// DATABASE WILAYAH
// ============================================
const databaseWilayah = [
    // ... (copy dari kode sebelumnya, semua data wilayah)
];

// ============================================
// VARIABEL GLOBAL
// ============================================
let currentLat = null, currentLng = null, currentAcc = null, watchID = null;
let daftarTitik = [];
let matchedTipe = null;
let ttdData = null;
let daftarFoto = [];
let fotoAsli = null;
let fotoSementara = null;
let cropX = 0, cropY = 0, cropW = 0, cropH = 0;
let editorCanvas, editorCtx;
let isDragging = false;
let dragStartX = 0, dragStartY = 0;
let dragType = 'move';
let isDrawing = false;
let lastX = 0, lastY = 0;
let canvas, ctx;

// ============================================
// FUNGSI UTILITY
// ============================================
function showAlert(msg) { /* ... */ }
function showConfirm(msg, onYes) { /* ... */ }
function showPrompt(msg, defaultVal, onSubmit) { /* ... */ }
function toProperCase(str) { /* ... */ }
function autoCariWilayah() { /* ... */ }
function formatOptionalVal(id) { /* ... */ }

// ============================================
// FUNGSI GPS
// ============================================
// ============================================
// FUNGSI GPS (DENGAN WINDOW SCOPE)
// ============================================

// Buat fungsi global dengan window
window.startGPS = function() {
    console.log('🟢 startGPS() dipanggil');
    
    if (!("geolocation" in navigator)) {
        console.error('❌ Geolocation tidak didukung');
        document.getElementById("lat").innerText = "Tidak Didukung";
        document.getElementById("lng").innerText = "Tidak Didukung";
        document.getElementById("sat-status").innerText = "Tidak Didukung";
        return;
    }

    // Bersihkan watch sebelumnya
    if (window.watchID !== null && window.watchID !== undefined) {
        navigator.geolocation.clearWatch(window.watchID);
        window.watchID = null;
    }

    // Update status
    document.getElementById("lat").innerText = "Mengambil lokasi...";
    document.getElementById("lng").innerText = "Mengambil lokasi...";
    document.getElementById("sat-status").innerText = "Mencari sinyal...";
    document.getElementById("acc").innerText = "-";

    // Mulai watch position
    try {
        window.watchID = navigator.geolocation.watchPosition(
            window.updatePosition,
            window.handleError,
            { enableHighAccuracy: true, timeout: 30000, maximumAge: 5000 }
        );
        console.log('🟢 GPS started with watchID:', window.watchID);
    } catch (error) {
        console.error('🔴 Error starting GPS:', error);
    }
};

// Buat fungsi updatePosition global
window.updatePosition = function(pos) {
    console.log('📍 Posisi GPS diperbarui:', pos.coords.latitude, pos.coords.longitude);
    
    window.currentLat = pos.coords.latitude.toFixed(6);
    window.currentLng = pos.coords.longitude.toFixed(6);
    window.currentAcc = Math.round(pos.coords.accuracy);

    document.getElementById("lat").innerText = window.currentLat;
    document.getElementById("lng").innerText = window.currentLng;
    document.getElementById("acc").innerText = window.currentAcc;

    const accBox = document.getElementById("acc-box");
    const satStatus = document.getElementById("sat-status");

    if (window.currentAcc <= 5) {
        accBox.className = "badge acc-good";
        satStatus.innerText = "🟢 Sangat Kuat (3D Fix)";
    } else if (window.currentAcc <= 12) {
        accBox.className = "badge acc-good";
        satStatus.innerText = "🟢 Bagus (Fix)";
    } else if (window.currentAcc <= 30) {
        accBox.className = "badge acc-warn";
        satStatus.innerText = "🟡 Sedang (Proses Kunci)";
    } else {
        accBox.className = "badge acc-warn";
        satStatus.innerText = "🔴 Lemah (Cari Sinyal)";
    }
};

// Buat fungsi handleError global
window.handleError = function(err) {
    console.error('🔴 GPS Error:', err);
    
    document.getElementById("lat").innerText = "Error";
    document.getElementById("lng").innerText = "Error";
    document.getElementById("sat-status").innerText = "Terputus";
    document.getElementById("acc").innerText = "-";

    let errorMsg = "";
    switch(err.code) {
        case err.PERMISSION_DENIED:
            errorMsg = "❌ Izin lokasi ditolak!";
            break;
        case err.POSITION_UNAVAILABLE:
            errorMsg = "❌ Sinyal GPS tidak tersedia!";
            break;
        case err.TIMEOUT:
            errorMsg = "⏰ Timeout! Coba di area terbuka.";
            break;
        default:
            errorMsg = "❌ Error: " + err.message;
    }
    
    // Tampilkan di log
    var logDiv = document.getElementById('log');
    if (logDiv && logDiv.innerHTML.includes('Belum ada titik')) {
        logDiv.innerHTML = '⚠️ ' + errorMsg;
    }
};
// lanjut ....

function startGPS() { /* ... */ }
function refreshGPS() { /* ... */ }
function updatePosition(pos) { /* ... */ }
function handleError(err) { /* ... */ }

// ============================================
// FUNGSI MANAJEMEN TITIK
// ============================================
function copyKoordinat() { /* ... */ }
function copyKoordinatAktif() { /* ... */ }
function fallbackCopy(text) { /* ... */ }
function simpanTitik() { /* ... */ }
function editTitikSatu(index) { /* ... */ }
function hapusTitikSatu(index) { /* ... */ }
function updateTampilanLog() { /* ... */ }
function hapusSemuaTitik() { /* ... */ }

// ============================================
// FUNGSI TANDA TANGAN
// ============================================
function bukaModalTandaTangan() { /* ... */ }
function tutupModalTtd() { /* ... */ }
function initCanvas() { /* ... */ }
function startDrawing(e) { /* ... */ }
function draw(e) { /* ... */ }
function stopDrawing() { /* ... */ }
function handleTouchStart(e) { /* ... */ }
function handleTouchMove(e) { /* ... */ }
function getCanvasPosition(e) { /* ... */ }
function hapusKanvas() { /* ... */ }
function simpanDariKanvas() { /* ... */ }
function ambilFotoTtdDariKamera() { /* ... */ }
function ambilFotoTtdDariGaleri() { /* ... */ }
function prosesFotoTtd(event) { /* ... */ }
function tampilkanPreviewTtd() { /* ... */ }
function hapusTandaTangan() { /* ... */ }

// ============================================
// FUNGSI EDITOR FOTO
// ============================================
function bukaEditorFoto(dataUrl) { /* ... */ }
function tutupEditor() { /* ... */ }
function initEditorCanvas() { /* ... */ }
function gambarCropArea() { /* ... */ }
function mulaiDrag(e) { /* ... */ }
function drag(e) { /* ... */ }
function stopDrag() { /* ... */ }
function touchMulaiDrag(e) { /* ... */ }
function touchDrag(e) { /* ... */ }
function terapkanCrop() { /* ... */ }
function initEditorCanvasTanpaCrop() { /* ... */ }
function enhanceFoto() { /* ... */ }
function resetEditor() { /* ... */ }
function simpanDariEditor() { /* ... */ }
function kompresFoto(file, maxWidth, maxHeight, quality) { /* ... */ }

// ============================================
// FUNGSI FOTO DOKUMENTASI
// ============================================
function tampilkanPilihanFoto() { /* ... */ }
function tutupPilihanFoto() { /* ... */ }
function ambilDariKamera() { /* ... */ }
function ambilDariGaleri() { /* ... */ }
function prosesFileFoto(event) { /* ... */ }
function renderGaleriFoto() { /* ... */ }
function hapusFotoSatu(index) { /* ... */ }
function hapusSemuaFoto() { /* ... */ }

// ============================================
// FUNGSI PEMBUAT PDF
// ============================================
function buatDokumenPDF() { /* ... */ }

// ============================================
// FUNGSI PROSES SURAT
// ============================================
function prosesSurat(mode) { /* ... */ }

// ============================================
// FUNGSI LAINNYA
// ============================================
function simpanTxt() { /* ... */ }
function bacaFileTxt(event) { /* ... */ }
function toggleForm() { /* ... */ }
function loadFormState() { /* ... */ }

// ============================================
// INIT ON LOAD
// ============================================
window.onload = function() {
    startGPS();
    loadFormState();
};
