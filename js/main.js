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
