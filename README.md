
---

## 🚀 Cara Menggunakan

### Prasyarat
- **Browser modern** (Chrome, Firefox, Edge, Safari)
- **Koneksi Internet** untuk mengakses CDN library (jika library lokal tidak tersedia)
- **Izin Lokasi** harus diaktifkan untuk fitur GPS

### Langkah Penggunaan

1. **Buka Aplikasi**
   - Buka file `index.html` di browser
   - Atau akses melalui [GitHub Pages](https://kendekallom-afk.github.io/surat_permohonan_telaah)

2. **Tunggu GPS Terkunci**
   - Tunggu hingga sinyal GPS menunjukkan "Sangat Kuat" atau "Bagus"
   - Pastikan akurasi di bawah 12 meter untuk hasil terbaik

3. **Ambil Titik Koordinat**
   - Klik tombol **Ambil Titik**
   - Masukkan nama/label titik (contoh: "Pintu Masuk", "Batas Timur")
   - Titik akan tersimpan di daftar log

4. **Isi Data Pemohon**
   - Klik header **📄 Data Pemohon & Lokasi** untuk membuka form
   - Isi data yang diperlukan (tanda * wajib diisi)
   - Pilih desa/kelurahan (kecamatan akan terisi otomatis)

5. **Tanda Tangan**
   - Klik tombol **✍️ TANDA TANGAN**
   - Coret di kanvas atau upload foto tanda tangan
   - Gunakan fitur **Crop** dan **Enhance** untuk hasil optimal
   - Klik **Simpan** untuk menyimpan tanda tangan

6. **Lampirkan Foto**
   - Klik **📷 Tambah Foto**
   - Pilih foto dari kamera atau galeri
   - Foto akan muncul di grid preview

7. **Generate Surat**
   - Klik **👁️ LIHAT** untuk preview PDF di tab baru
   - Klik **🖨️ CETAK** untuk menyimpan file PDF

### Tips Penggunaan
- ✅ Gunakan **Enhance** pada tanda tangan untuk hasil seperti scan
- ✅ Gunakan **Crop** untuk memotong area kosong di sekitar tanda tangan
- ✅ Isi minimal **1 titik koordinat** dan **data wajib** sebelum mencetak surat
- ✅ Untuk hasil terbaik, ambil foto tanda tangan di tempat dengan pencahayaan cukup

---

## 📱 Responsive Design

Aplikasi ini dirancang **mobile-first** dan berjalan dengan baik di:
- 📱 Smartphone (Android & iOS)
- 💻 Tablet
- 🖥️ Desktop

---

## 🐛 Troubleshooting

| Masalah | Solusi |
|---------|--------|
| GPS tidak terkunci | Pastikan izin lokasi diaktifkan dan berada di area terbuka |
| Error "Cannot destructure property 'jsPDF'" | Gunakan CDN fallback (sudah terintegrasi) |
| Tanda tangan tidak muncul | Pastikan tanda tangan sudah disimpan dari editor |
| PDF tidak terdownload | Periksa koneksi internet dan izin popup browser |
| Foto tidak terbaca | Pastikan file foto berformat JPG/PNG dan ukuran tidak terlalu besar |

---

## 📝 Catatan Penting

> ⚠️ **Keamanan**: Aplikasi ini berjalan **sepenuhnya di sisi client**. Tidak ada data yang dikirim ke server. Semua data hanya tersimpan di perangkat Anda.

> 📌 **Privasi**: Kami tidak menyimpan, mengirim, atau mengakses data Anda. Semua pemrosesan dilakukan di browser Anda.

> 🔄 **Version**: Kode ini adalah versi stabil terbaru. Untuk update dan perbaikan, pantau repository ini.

---

## 🤝 Kontribusi

Kontribusi sangat diterima! Untuk berkontribusi:

1. **Fork** repository ini
2. **Buat branch** baru (`git checkout -b fitur-baru`)
3. **Commit** perubahan (`git commit -m 'Menambahkan fitur X'`)
4. **Push** ke branch (`git push origin fitur-baru`)
5. Buat **Pull Request**

---

## 📧 Kontak

- **Pengembang**: Kendek Allom
- **Email**: kendekallom@gmail.com
- **GitHub**: [kendekallom-afk](https://github.com/kendekallom-afk)

---

## 📜 Lisensi

MIT License - Silakan digunakan dan dimodifikasi sesuai kebutuhan.

---

**Selamat menggunakan mGPS Point!** 🎯

---

*Dibuat dengan ❤️ untuk kemudahan survey lapangan dan administrasi pertanahan.*
