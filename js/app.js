// ============================================
        // DATABASE WILAYAH
        // ============================================
        const databaseWilayah = [
            { kec: "Bonehau", tipe: "Desa", nama: "Banua Ada" }, { kec: "Bonehau", tipe: "Desa", nama: "Bonehau" },
            { kec: "Bonehau", tipe: "Desa", nama: "Buttu Ada" }, { kec: "Bonehau", tipe: "Desa", nama: "Hinua" },
            { kec: "Bonehau", tipe: "Desa", nama: "Kinatang" }, { kec: "Bonehau", tipe: "Desa", nama: "Lumika" },
            { kec: "Bonehau", tipe: "Desa", nama: "Mappu" }, { kec: "Bonehau", tipe: "Desa", nama: "Salutiwo" },
            { kec: "Bonehau", tipe: "Desa", nama: "Tamalea" }, { kec: "Kalukku", tipe: "Desa", nama: "Belang Belang" },
            { kec: "Kalukku", tipe: "Desa", nama: "Beru-Beru" }, { kec: "Kalukku", tipe: "Desa", nama: "Guliling" },
            { kec: "Kalukku", tipe: "Desa", nama: "Kabuloang" }, { kec: "Kalukku", tipe: "Desa", nama: "Kalukku Barat" },
            { kec: "Kalukku", tipe: "Desa", nama: "Keang" }, { kec: "Kalukku", tipe: "Desa", nama: "Pammulukang" },
            { kec: "Kalukku", tipe: "Desa", nama: "Pokkang" }, { kec: "Kalukku", tipe: "Desa", nama: "Sondoang" },
            { kec: "Kalukku", tipe: "Desa", nama: "Uhaimate" }, { kec: "Kalukku", tipe: "Kelurahan", nama: "Banua Ada" },
            { kec: "Kalukku", tipe: "Kelurahan", nama: "Kalukku" }, { kec: "Kalukku", tipe: "Kelurahan", nama: "Sinyonyoi" },
            { kec: "Kalukku", tipe: "Kelurahan", nama: "Sinyonyoi Selatan" }, { kec: "Kalumpang", tipe: "Desa", nama: "Batu Makkada" },
            { kec: "Kalumpang", tipe: "Desa", nama: "Kalumpang" }, { kec: "Kalumpang", tipe: "Desa", nama: "Karama" },
            { kec: "Kalumpang", tipe: "Desa", nama: "Karataun" }, { kec: "Kalumpang", tipe: "Desa", nama: "Kondo Bulo" },
            { kec: "Kalumpang", tipe: "Desa", nama: "Lasa'" }, { kec: "Kalumpang", tipe: "Desa", nama: "Limbong" },
            { kec: "Kalumpang", tipe: "Desa", nama: "Makkaliki" }, { kec: "Kalumpang", tipe: "Desa", nama: "Polio" },
            { kec: "Kalumpang", tipe: "Desa", nama: "Salumakki" }, { kec: "Kalumpang", tipe: "Desa", nama: "Sandapang" },
            { kec: "Kalumpang", tipe: "Desa", nama: "Siraun" }, { kec: "Kalumpang", tipe: "Desa", nama: "Tumoga" },
            { kec: "Kepulauan Bala-balakang", tipe: "Desa", nama: "Bala Balakang" }, { kec: "Kepulauan Bala-balakang", tipe: "Desa", nama: "Bala Balakang Timur" },
            { kec: "Mamuju", tipe: "Desa", nama: "Bambu" }, { kec: "Mamuju", tipe: "Desa", nama: "Batu Pannu" },
            { kec: "Mamuju", tipe: "Desa", nama: "Karampuang" }, { kec: "Mamuju", tipe: "Desa", nama: "Tadui" },
            { kec: "Mamuju", tipe: "Kelurahan", nama: "Binanga" }, { kec: "Mamuju", tipe: "Kelurahan", nama: "Kasiwa" },
            { kec: "Mamuju", tipe: "Kelurahan", nama: "Karema" }, { kec: "Mamuju", tipe: "Kelurahan", nama: "Mamunyu" },
            { kec: "Mamuju", tipe: "Kelurahan", nama: "Rimuku" }, { kec: "Papalang", tipe: "Desa", nama: "Batu Ampa" },
            { kec: "Papalang", tipe: "Desa", nama: "Boda-Boda" }, { kec: "Papalang", tipe: "Desa", nama: "Bonda" },
            { kec: "Papalang", tipe: "Desa", nama: "Papalang" }, { kec: "Papalang", tipe: "Desa", nama: "Salukayu" },
            { kec: "Papalang", tipe: "Desa", nama: "Sisango" }, { kec: "Papalang", tipe: "Desa", nama: "Sukadamai" },
            { kec: "Papalang", tipe: "Desa", nama: "Toabo" }, { kec: "Papalang", tipe: "Desa", nama: "Topore" },
            { kec: "Sampaga", tipe: "Desa", nama: "Bunde" }, { kec: "Sampaga", tipe: "Desa", nama: "Kalonding" },
            { kec: "Sampaga", tipe: "Desa", nama: "Losso" }, { kec: "Sampaga", tipe: "Desa", nama: "Salubarana" },
            { kec: "Sampaga", tipe: "Desa", nama: "Sampaga" }, { kec: "Sampaga", tipe: "Desa", nama: "Tanambuah" },
            { kec: "Sampaga", tipe: "Desa", nama: "Tarailu" }, { kec: "Simboro", tipe: "Desa", nama: "Botteng" },
            { kec: "Simboro", tipe: "Desa", nama: "Botteng Utara" }, { kec: "Simboro", tipe: "Desa", nama: "Pati'di" },
            { kec: "Simboro", tipe: "Desa", nama: "Saletto" }, { kec: "Simboro", tipe: "Desa", nama: "Sumare" },
            { kec: "Simboro", tipe: "Desa", nama: "Tapandullu" }, { kec: "Simboro", tipe: "Kelurahan", nama: "Rangas" },
            { kec: "Simboro", tipe: "Kelurahan", nama: "Simboro" }, { kec: "Tapalang", tipe: "Desa", nama: "Bela" },
            { kec: "Tapalang", tipe: "Desa", nama: "Kopeang" }, { kec: "Tapalang", tipe: "Desa", nama: "Orobatu" },
            { kec: "Tapalang", tipe: "Desa", nama: "Rantedoda" }, { kec: "Tapalang", tipe: "Desa", nama: "Taan" },
            { kec: "Tapalang", tipe: "Desa", nama: "Takandeang" }, { kec: "Tapalang", tipe: "Desa", nama: "Tampalang" },
            { kec: "Tapalang", tipe: "Kelurahan", nama: "Dayanginna" }, { kec: "Tapalang", tipe: "Kelurahan", nama: "Galung" },
            { kec: "Tapalang", tipe: "Kelurahan", nama: "Kasambang" }, { kec: "Tapalang Barat", tipe: "Desa", nama: "Ahu" },
            { kec: "Tapalang Barat", tipe: "Desa", nama: "Dungkait" }, { kec: "Tapalang Barat", tipe: "Desa", nama: "Labuang Rano" },
            { kec: "Tapalang Barat", tipe: "Desa", nama: "Lebani" }, { kec: "Tapalang Barat", tipe: "Desa", nama: "Pangasaan" },
            { kec: "Tapalang Barat", tipe: "Desa", nama: "Pasabu" }, { kec: "Tapalang Barat", tipe: "Desa", nama: "Tanete Pao" },
            { kec: "Tommo", tipe: "Desa", nama: "Buana Sakti" }, { kec: "Tommo", tipe: "Desa", nama: "Campaloga" },
            { kec: "Tommo", tipe: "Desa", nama: "Kakullasan" }, { kec: "Tommo", tipe: "Desa", nama: "Kalepu" },
            { kec: "Tommo", tipe: "Desa", nama: "Leling" }, { kec: "Tommo", tipe: "Desa", nama: "Leling Barat" },
            { kec: "Tommo", tipe: "Desa", nama: "Leling Utara" }, { kec: "Tommo", tipe: "Desa", nama: "Malino" },
            { kec: "Tommo", tipe: "Desa", nama: "Rantemario" }, { kec: "Tommo", tipe: "Desa", nama: "Saludengen" },
            { kec: "Tommo", tipe: "Desa", nama: "Sandana" }, { kec: "Tommo", tipe: "Desa", nama: "Tamejarra" },
            { kec: "Tommo", tipe: "Desa", nama: "Tamemongga" }, { kec: "Tommo", tipe: "Desa", nama: "Tommo" }
        ];

        // ============================================
        // VARIABEL GLOBAL
        // ============================================
        let currentLat = null, currentLng = null, currentAcc = null, watchID = null;
        let daftarTitik = [];
        let mapInstance = null, currentMarker = null, savedPointsLayer = null, mapHasCentered = false;
        let searchMarker = null;
        let matchedTipe = null;
        let ttdData = null;
        let daftarFoto = [];

        // Variabel untuk Editor Foto
        let fotoAsli = null;
        let fotoSementara = null;
        let cropX = 0, cropY = 0, cropW = 0, cropH = 0;
        let editorCanvas, editorCtx;
        let isDragging = false;
        let dragStartX = 0, dragStartY = 0;
        let dragType = 'move';

        // ============================================
        // FUNGSI UTILITY
        // ============================================
        function showAlert(msg) {
            document.getElementById('custom-alert-msg').innerText = msg;
            document.getElementById('custom-alert-modal').style.display = 'flex';
        }

        function showConfirm(msg, onYes) {
            const modal = document.getElementById('custom-confirm-modal');
            document.getElementById('custom-confirm-msg').innerText = msg;
            modal.style.display = 'flex';

            const yesBtn = document.getElementById('custom-confirm-yes');
            const noBtn = document.getElementById('custom-confirm-no');

            const newYes = yesBtn.cloneNode(true);
            const newNo = noBtn.cloneNode(true);
            yesBtn.parentNode.replaceChild(newYes, yesBtn);
            noBtn.parentNode.replaceChild(newNo, noBtn);

            newYes.onclick = function () { modal.style.display = 'none'; onYes(); };
            newNo.onclick = function () { modal.style.display = 'none'; };
        }

        function showPrompt(msg, defaultVal, onSubmit) {
            const modal = document.getElementById('custom-prompt-modal');
            document.getElementById('custom-prompt-msg').innerText = msg;
            const inputEl = document.getElementById('custom-prompt-input');
            inputEl.value = defaultVal || '';
            modal.style.display = 'flex';
            setTimeout(() => inputEl.focus(), 100);

            const okBtn = document.getElementById('custom-prompt-ok');
            const cancelBtn = document.getElementById('custom-prompt-cancel');

            const newOk = okBtn.cloneNode(true);
            const newCancel = cancelBtn.cloneNode(true);
            okBtn.parentNode.replaceChild(newOk, okBtn);
            cancelBtn.parentNode.replaceChild(newCancel, cancelBtn);

            newOk.onclick = function () {
                const val = inputEl.value;
                modal.style.display = 'none';
                onSubmit(val);
            };
            newCancel.onclick = function () { modal.style.display = 'none'; };
        }

        window.onerror = function (msg, url, line) {
            showAlert("Error Sistem:\n" + msg + "\n(baris " + line + ")");
            return true;
        };

        function toProperCase(str) {
            return str.toLowerCase().replace(/(?:^|\s|-|\/)\S/g, a => a.toUpperCase());
        }

        function autoCariWilayah() {
            const inputVal = document.getElementById("lahan-desa-input").value.trim().toLowerCase();
            const kecInput = document.getElementById("lahan-kec");

            if (!inputVal) { kecInput.value = ""; matchedTipe = null; return; }
            const found = databaseWilayah.find(item => item.nama.toLowerCase() === inputVal);

            if (found) {
                kecInput.value = found.kec;
                matchedTipe = found.tipe;
            } else {
                matchedTipe = null;
            }
        }

        function formatOptionalVal(id) {
            const val = document.getElementById(id).value.trim();
            return val !== "" ? val : "....";
        }

        // ============================================
        // FUNGSI GPS
        // ============================================
        const geoOptions = { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 };

        function startGPS() {
            if ("geolocation" in navigator) {
                if (watchID !== null) navigator.geolocation.clearWatch(watchID);
                watchID = navigator.geolocation.watchPosition(updatePosition, handleError, geoOptions);
            } else {
                showAlert("Perangkat Anda tidak mendukung fitur GPS.");
            }
        }

        function refreshGPS() {
            document.getElementById("lat").innerText = "Memperbarui...";
            document.getElementById("lng").innerText = "Memperbarui...";
            document.getElementById("sat-status").innerText = "Mencari...";
            startGPS();
        }

        function updatePosition(pos) {
            currentLat = pos.coords.latitude.toFixed(6);
            currentLng = pos.coords.longitude.toFixed(6);
            currentAcc = Math.round(pos.coords.accuracy);

            document.getElementById("lat").innerText = currentLat;
            document.getElementById("lng").innerText = currentLng;
            document.getElementById("acc").innerText = currentAcc;

            const accBox = document.getElementById("acc-box");
            const satStatus = document.getElementById("sat-status");

            if (currentAcc <= 5) {
                accBox.className = "badge acc-good";
                satStatus.innerText = "Sangat Kuat (3D Fix)";
            } else if (currentAcc <= 12) {
                accBox.className = "badge acc-good";
                satStatus.innerText = "Bagus (Fix)";
            } else {
                accBox.className = "badge acc-warn";
                satStatus.innerText = "Lemah (Proses Kunci)";
            }

            updateMapPosition();
        }

        function handleError(err) {
            document.getElementById("lat").innerText = "Error Akses GPS";
            document.getElementById("lng").innerText = "Cek Akses Lokasi";
            document.getElementById("sat-status").innerText = "Terputus";
            document.getElementById("map-sat-status").innerText = "Terputus";
        }

        function tampilkanView(view) {
            const gpsView = document.getElementById('gps-view');
            const mapView = document.getElementById('map-view');
            const formView = document.getElementById('form-view');
            const isMap = view === 'map';

            gpsView.classList.toggle('view-hidden', isMap);
            mapView.classList.toggle('view-hidden', !isMap);
            formView.classList.toggle('view-hidden', isMap);

            if (isMap) {
                initMap();
                setTimeout(() => mapInstance.invalidateSize(), 0);
            }
        }

        function initMap() {
            if (mapInstance) return;

            mapInstance = L.map('map', {
                zoomControl: true,
                rotate: true,
                touchRotate: true,
                rotateControl: false
            }).setView([-2.672878, 118.848438], 13);
            L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
                maxZoom: 21,
                attribution: '&copy; Google'
            }).addTo(mapInstance);
            savedPointsLayer = L.layerGroup().addTo(mapInstance);
            updateMapPosition();
            renderSavedPointsOnMap();
        }

        function updateMapPosition() {
            const mapAcc = document.getElementById('map-acc');
            const mapSatStatus = document.getElementById('map-sat-status');
            if (mapAcc) mapAcc.innerText = currentAcc || '-';
            if (mapSatStatus) mapSatStatus.innerText = document.getElementById('sat-status').innerText;
            if (!mapInstance || !currentLat || !currentLng) return;

            const position = [Number(currentLat), Number(currentLng)];
            if (!currentMarker) {
                currentMarker = L.circleMarker(position, {
                    radius: 8,
                    color: '#ffffff',
                    weight: 3,
                    fillColor: '#2563eb',
                    fillOpacity: 1,
                    pane: 'overlayPane'
                }).addTo(mapInstance).bindPopup('Lokasi GPS aktif');
            } else {
                currentMarker.setLatLng(position);
            }

            if (!mapHasCentered) {
                mapInstance.setView(position, 18);
                mapHasCentered = true;
            }
        }

        function pusatkanPetaKeGPS() {
            if (!currentLat || !currentLng) return showAlert('Tunggu hingga sinyal GPS terunci!');
            initMap();
            mapInstance.setBearing(0);
            mapInstance.setView([Number(currentLat), Number(currentLng)], 18);
            if (currentMarker) currentMarker.openPopup();
        }

        async function cariAlamat(event) {
            event.preventDefault();
            const input = document.getElementById('map-search-input');
            const query = input.value.trim();
            if (!query) return showAlert('Masukkan alamat yang ingin dicari.');

            const searchButton = event.submitter;
            if (searchButton) searchButton.disabled = true;

            try {
                const url = `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&accept-language=id&q=${encodeURIComponent(query)}`;
                const response = await fetch(url, { headers: { Accept: 'application/json' } });
                if (!response.ok) throw new Error('Layanan pencarian tidak tersedia.');
                const results = await response.json();
                if (!results.length) return showAlert('Alamat tidak ditemukan. Coba gunakan nama wilayah yang lebih lengkap.');

                const result = results[0];
                const position = [Number(result.lat), Number(result.lon)];
                initMap();
                mapInstance.setView(position, 17);

                if (searchMarker) searchMarker.remove();
                searchMarker = L.marker(position, { rotateWithView: true }).addTo(mapInstance).bindPopup(
                    `<b>Hasil Pencarian</b><br>${result.display_name}`
                ).openPopup();
            } catch (error) {
                showAlert('Pencarian alamat gagal. Periksa koneksi internet lalu coba lagi.');
            } finally {
                if (searchButton) searchButton.disabled = false;
            }
        }

        function renderSavedPointsOnMap() {
            if (!savedPointsLayer) return;
            savedPointsLayer.clearLayers();
            daftarTitik.forEach((t, index) => {
                const marker = L.marker([Number(t.lat), Number(t.lng)], {
                    rotateWithView: true
                })
                    .bindTooltip(t.nama || `Titik ${index + 1}`, {
                        permanent: true,
                        direction: 'top',
                        offset: [0, -28],
                        className: 'map-point-label'
                    })
                    .bindPopup(`<b>${t.nama}</b><br>${t.lng}, ${t.lat}<br>Akurasi: ${t.acc} m`);
                marker.addTo(savedPointsLayer);
            });
        }

        function simpanTitikDariPeta() {
            if (!mapInstance) return showAlert('Peta belum siap.');
            const center = mapInstance.getCenter();
            simpanTitikDenganKoordinat(center.lat, center.lng, currentAcc || '-');
        }

        // ============================================
        // FUNGSI MANAJEMEN TITIK
        // ============================================
        function copyKoordinat() {
            if (daftarTitik.length === 0) {
                return showAlert("Belum ada titik tersimpan di dalam log!");
            }

            const nama = document.getElementById("pemohon-nama").value.trim();
            const pekerjaan = document.getElementById("pemohon-pekerjaan").value.trim();
            const alamat = document.getElementById("pemohon-alamat").value.trim();
            const hp = document.getElementById("pemohon-hp").value.trim();
            const keperluan = document.getElementById("pemohon-keperluan").value.trim();

            const jalan = document.getElementById("lahan-jalan").value.trim();
            const desa = document.getElementById("lahan-desa-input").value.trim();
            const kec = document.getElementById("lahan-kec").value.trim();
            const kab = document.getElementById("lahan-kab").value.trim();

            let teksSalinan = "SURAT PERMOHONAN TELAAH\n";
            teksSalinan += "[DATA PEMOHON]\n";
            teksSalinan += `Nama Lengkap : ${nama || "-"}\n`;
            teksSalinan += `Pekerjaan    : ${pekerjaan || "-"}\n`;
            teksSalinan += `Alamat KTP   : ${alamat || "-"}\n`;
            teksSalinan += `No. HP/WA    : ${hp || "-"}\n`;
            teksSalinan += `Keperluan    : ${keperluan || "-"}\n\n`;

            teksSalinan += "[LOKASI LAHAN]\n";
            teksSalinan += `Jalan/Dusun  : ${jalan || "-"}\n`;
            teksSalinan += `Desa/Kel.    : ${desa ? toProperCase(desa) : "-"}\n`;
            teksSalinan += `Kecamatan    : ${kec || "-"}\n`;
            teksSalinan += `Kab/Prov     : ${kab || "-"}\n\n`;
           
            teksSalinan += "[DAFTAR TITIK KOORDINAT]\n";
            daftarTitik.forEach((t, i) => {
                teksSalinan += `${i + 1}. ${t.nama}\n`;
                teksSalinan += `   Koordinat : ${t.lng}, ${t.lat}\n`;
                teksSalinan += `   Akurasi   : ±${t.acc}m\n`;
                teksSalinan += `   Waktu     : ${t.waktu}\n\n`;
            });

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(teksSalinan).then(() => {
                    showAlert("✅ Semua data berhasil disalin ke clipboard!");
                }).catch(() => fallbackCopy(teksSalinan));
            } else {
                fallbackCopy(teksSalinan);
            }
        }

        function copyKoordinatAktif() {
            if (!currentLng || !currentLat) return showAlert("Tunggu hingga sinyal GPS terunci!");

            const teksAktif = `${currentLng}, ${currentLat}`;

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(teksAktif).then(() => {
                    showAlert("Koordinat aktif berhasil disalin:\n" + teksAktif);
                }).catch(() => fallbackCopy(teksAktif));
            } else {
                fallbackCopy(teksAktif);
            }
        }

        function fallbackCopy(text) {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.focus();
            ta.select();
            try {
                document.execCommand('copy');
                showAlert("Koordinat berhasil disalin:\n" + text);
            } catch (e) {
                showAlert("Gagal menyalin otomatis:\n" + text);
            }
            document.body.removeChild(ta);
        }

        function simpanTitik() {
    if (!currentLat || !currentLng) {
        showAlert("Tunggu GPS mendapat sinyal terlebih dahulu!");
        return false;
    }

    return simpanTitikDenganKoordinat(currentLat, currentLng, currentAcc);
}

        function simpanTitikDenganKoordinat(lat, lng, acc) {
    if (!Number.isFinite(Number(lat)) || !Number.isFinite(Number(lng))) {
        showAlert("Koordinat titik tidak valid!");
        return false;
    }

    const titik = {
        nama: `Titik ${nomorTitikBerikutnya()}`,
        lat: Number(lat).toFixed(6),
        lng: Number(lng).toFixed(6),
        acc: acc,
        waktu: new Date().toLocaleTimeString()
    };

    daftarTitik.push(titik);
    autoSaveData();  // ✅ Simpan ke localStorage
    updateTampilanLog();  // ✅ Update display
    renderSavedPointsOnMap();
    return true;
}

        function nomorTitikBerikutnya() {
    const nomorTerbesar = daftarTitik.reduce((terbesar, titik) => {
        const cocok = String(titik.nama || '').match(/^Titik\s+(\d+)$/i);
        return cocok ? Math.max(terbesar, Number(cocok[1])) : terbesar;
    }, 0);
    return nomorTerbesar + 1;
}

        function editTitikSatu(index) {
    const t = daftarTitik[index];

    showPrompt("Edit Nama Titik:", t.nama, function (namaBaru) {
        if (!namaBaru || namaBaru.trim() === "") return;

        const nilaiAwal = `${t.lng}, ${t.lat}`;
        showPrompt("Edit Koordinat (Format: Longitude, Latitude):", nilaiAwal, function (koordinatBaru) {
            if (!koordinatBaru || !koordinatBaru.includes(",")) {
                return showAlert("Format salah! Gunakan pemisah koma.\nContoh: 118.848438, -2.672878");
            }

            const parts = koordinatBaru.split(",");
            const lngBaru = parts[0].trim();
            const latBaru = parts[1].trim();

            if (isNaN(lngBaru) || isNaN(latBaru)) {
                return showAlert("Angka Longitude atau Latitude tidak valid!");
            }

            daftarTitik[index].nama = namaBaru.replace(/,/g, " ");
            daftarTitik[index].lng = lngBaru;
            daftarTitik[index].lat = latBaru;

            autoSaveData();  // ✅ Simpan ke localStorage
            updateTampilanLog();  // ✅ Gunakan nama fungsi yang benar
        });
    });
}
        function hapusTitikSatu(index) {
    const t = daftarTitik[index];
    showConfirm(`Apakah Anda yakin ingin menghapus "${t.nama}"?`, function () {
        daftarTitik.splice(index, 1);
        autoSaveData();  // ✅ Simpan ke localStorage
        updateTampilanLog();  // ✅ Update display
    });
}

        function updateTampilanLog() {
            const logDiv = document.getElementById("log");
            if (daftarTitik.length === 0) {
                logDiv.innerHTML = "Belum ada titik tersimpan.";
                renderSavedPointsOnMap();
                return;
            }
            let html = "";
            daftarTitik.forEach((t, i) => {
                html += `
                <div class="log-item">
                    <span><b>${i + 1}. ${t.nama}</b>: ${t.lng}, ${t.lat} (${t.acc}m)</span>
                    <div style="display:flex; gap:10px; align-items:center;">
                        <button onclick="editTitikSatu(${i})" style="border:none; background:none; cursor:pointer; font-size:16px; padding:0;" title="Edit Titik">📝</button>
                        <button onclick="hapusTitikSatu(${i})" style="border:none; background:none; cursor:pointer; color:#ef4444; font-size:16px; font-weight:bold; padding:0;" title="Hapus Titik">✕</button>
                    </div>
                </div>`;
            });
            logDiv.innerHTML = html;
            renderSavedPointsOnMap();
        }

        function hapusSemuaTitik() {
    showConfirm("Yakin ingin menghapus semua titik?", function() {
        daftarTitik = [];
        localStorage.removeItem('daftarTitik');
        updateTampilanLog();  // ✅ Update display
    });
}
        // ============================================
        // FUNGSI TANDA TANGAN (KANVAS, KAMERA, GALERI)
        // ============================================
        let isDrawing = false;
        let lastX = 0, lastY = 0;
        let canvas, ctx;

        function bukaModalTandaTangan() {
            const modal = document.getElementById('modal-ttd');
            modal.style.display = 'flex';
            setTimeout(() => initCanvas(), 100);
        }

        function tutupModalTtd() {
            document.getElementById('modal-ttd').style.display = 'none';
        }

        function initCanvas() {
            canvas = document.getElementById('canvas-ttd');
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * (window.devicePixelRatio || 1);
            canvas.height = rect.height * (window.devicePixelRatio || 1);
            ctx = canvas.getContext('2d');
            ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, rect.width, rect.height);
            ctx.strokeStyle = '#1e293b';
            ctx.lineWidth = 2.5;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            canvas.addEventListener('mousedown', startDrawing);
            canvas.addEventListener('mousemove', draw);
            canvas.addEventListener('mouseup', stopDrawing);
            canvas.addEventListener('mouseleave', stopDrawing);
            canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
            canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
            canvas.addEventListener('touchend', stopDrawing, { passive: false });
        }

        function startDrawing(e) {
            isDrawing = true;
            const pos = getCanvasPosition(e);
            lastX = pos.x;
            lastY = pos.y;
        }

        function draw(e) {
            if (!isDrawing) return;
            const pos = getCanvasPosition(e);
            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
            lastX = pos.x;
            lastY = pos.y;
        }

        function stopDrawing() { isDrawing = false; }

        function handleTouchStart(e) {
            e.preventDefault();
            const touch = e.touches[0];
            const rect = canvas.getBoundingClientRect();
            const pos = { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
            isDrawing = true;
            lastX = pos.x;
            lastY = pos.y;
        }

        function handleTouchMove(e) {
            e.preventDefault();
            if (!isDrawing) return;
            const touch = e.touches[0];
            const rect = canvas.getBoundingClientRect();
            const pos = { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
            lastX = pos.x;
            lastY = pos.y;
        }

        function getCanvasPosition(e) {
            const rect = canvas.getBoundingClientRect();
            return { x: e.clientX - rect.left, y: e.clientY - rect.top };
        }

        function hapusKanvas() {
            const rect = canvas.getBoundingClientRect();
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, rect.width, rect.height);
        }

        function simpanDariKanvas() {
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            let isEmpty = true;
            for (let i = 0; i < data.length; i += 4) {
                if (data[i] < 250 || data[i+1] < 250 || data[i+2] < 250) {
                    isEmpty = false;
                    break;
                }
            }
            if (isEmpty) {
                showAlert('Harap tulis tanda tangan terlebih dahulu!');
                return;
            }

            const dataUrl = canvas.toDataURL('image/png');
            const img = new Image();
            img.onload = function() {
                const compressedCanvas = document.createElement('canvas');
                const maxWidth = 400, maxHeight = 150;
                let width = img.width, height = img.height;
                if (width > height) {
                    if (width > maxWidth) {
                        height = Math.round(height * maxWidth / width);
                        width = maxWidth;
                    }
                } else {
                    if (height > maxHeight) {
                        width = Math.round(width * maxHeight / height);
                        height = maxHeight;
                    }
                }
                compressedCanvas.width = width;
                compressedCanvas.height = height;
                const compressedCtx = compressedCanvas.getContext('2d');
                compressedCtx.fillStyle = 'white';
                compressedCtx.fillRect(0, 0, width, height);
                compressedCtx.drawImage(img, 0, 0, width, height);
                ttdData = compressedCanvas.toDataURL('image/jpeg', 0.9);
                tampilkanPreviewTtd();
                tutupModalTtd();
                showAlert('✅ Tanda tangan berhasil disimpan!');
            };
            img.src = dataUrl;
        }

        function ambilFotoTtdDariKamera() {
            tutupModalTtd();
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.setAttribute('capture', 'environment');
            input.onchange = function(event) { prosesFotoTtd(event); };
            input.click();
        }

        function ambilFotoTtdDariGaleri() {
            tutupModalTtd();
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/png, image/jpeg, image/jpg';
            input.removeAttribute('capture');
            input.onchange = function(event) { prosesFotoTtd(event); };
            input.click();
        }

        // ============================================
        // FUNGSI EDITOR FOTO (CROP & ENHANCE)
        // ============================================
        function bukaEditorFoto(dataUrl) {
            fotoAsli = dataUrl;
            fotoSementara = dataUrl;

            const modal = document.getElementById('modal-editor-ttd');
            modal.style.display = 'flex';

            setTimeout(() => {
                initEditorCanvas();
            }, 100);
        }

        function tutupEditor() {
            document.getElementById('modal-editor-ttd').style.display = 'none';
            fotoAsli = null;
            fotoSementara = null;
        }

        function initEditorCanvas() {
            editorCanvas = document.getElementById('canvas-editor-ttd');
            const container = editorCanvas.parentElement;
            const maxWidth = container.clientWidth - 4;
            const maxHeight = 350;

            const img = new Image();
            img.onload = function() {
                let width = img.width;
                let height = img.height;

                const scale = Math.min(maxWidth / width, maxHeight / height);
                const displayW = width * scale;
                const displayH = height * scale;

                editorCanvas.width = displayW;
                editorCanvas.height = displayH;

                editorCtx = editorCanvas.getContext('2d');
                editorCtx.drawImage(img, 0, 0, displayW, displayH);

                // Inisialisasi crop area (default: 80% dari gambar, di tengah)
                cropX = displayW * 0.1;
                cropY = displayH * 0.1;
                cropW = displayW * 0.8;
                cropH = displayH * 0.8;

                gambarCropArea();

                // Event untuk drag
                editorCanvas.addEventListener('mousedown', mulaiDrag);
                editorCanvas.addEventListener('mousemove', drag);
                editorCanvas.addEventListener('mouseup', stopDrag);
                editorCanvas.addEventListener('mouseleave', stopDrag);
                editorCanvas.addEventListener('touchstart', touchMulaiDrag, { passive: false });
                editorCanvas.addEventListener('touchmove', touchDrag, { passive: false });
                editorCanvas.addEventListener('touchend', stopDrag, { passive: false });
            };
            img.src = fotoSementara;
        }

        function gambarCropArea() {
            const img = new Image();
            img.onload = function() {
                // Bersihkan canvas
                editorCtx.clearRect(0, 0, editorCanvas.width, editorCanvas.height);

                // Gambar foto
                editorCtx.drawImage(img, 0, 0, editorCanvas.width, editorCanvas.height);

                // Buat overlay gelap di LUAR area crop
                editorCtx.save();
                editorCtx.beginPath();
                editorCtx.rect(cropX, cropY, cropW, cropH);
                editorCtx.rect(0, 0, editorCanvas.width, editorCanvas.height);
                editorCtx.clip('evenodd');

                editorCtx.fillStyle = 'rgba(0, 0, 0, 0.4)';
                editorCtx.fillRect(0, 0, editorCanvas.width, editorCanvas.height);
                editorCtx.restore();

                // Gambar border crop
                editorCtx.strokeStyle = '#00ff00';
                editorCtx.lineWidth = 2;
                editorCtx.setLineDash([5, 5]);
                editorCtx.strokeRect(cropX, cropY, cropW, cropH);
                editorCtx.setLineDash([]);

                // Gambar handle di sudut
                const handles = [
                    [cropX, cropY],
                    [cropX + cropW, cropY],
                    [cropX, cropY + cropH],
                    [cropX + cropW, cropY + cropH]
                ];
                handles.forEach(([x, y]) => {
                    editorCtx.fillStyle = '#00ff00';
                    editorCtx.beginPath();
                    editorCtx.arc(x, y, 6, 0, Math.PI * 2);
                    editorCtx.fill();
                    editorCtx.strokeStyle = 'white';
                    editorCtx.lineWidth = 2;
                    editorCtx.stroke();
                });
            };
            img.src = fotoSementara;
        }

        function mulaiDrag(e) {
            const rect = editorCanvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const scaleX = editorCanvas.width / rect.width;
            const scaleY = editorCanvas.height / rect.height;
            const canvasX = x * scaleX;
            const canvasY = y * scaleY;

            const handles = [
                { x: cropX, y: cropY, type: 'nw' },
                { x: cropX + cropW, y: cropY, type: 'ne' },
                { x: cropX, y: cropY + cropH, type: 'sw' },
                { x: cropX + cropW, y: cropY + cropH, type: 'se' }
            ];

            let found = false;
            for (let h of handles) {
                if (Math.abs(canvasX - h.x) < 15 && Math.abs(canvasY - h.y) < 15) {
                    dragType = 'resize';
                    dragStartX = canvasX;
                    dragStartY = canvasY;
                    found = true;
                    break;
                }
            }

            if (!found && canvasX >= cropX && canvasX <= cropX + cropW &&
                canvasY >= cropY && canvasY <= cropY + cropH) {
                dragType = 'move';
                dragStartX = canvasX - cropX;
                dragStartY = canvasY - cropY;
                found = true;
            }

            isDragging = found;
        }

        function drag(e) {
            if (!isDragging) return;
            e.preventDefault();

            const rect = editorCanvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const scaleX = editorCanvas.width / rect.width;
            const scaleY = editorCanvas.height / rect.height;
            const canvasX = x * scaleX;
            const canvasY = y * scaleY;

            if (dragType === 'move') {
                let newX = canvasX - dragStartX;
                let newY = canvasY - dragStartY;
                newX = Math.max(0, Math.min(newX, editorCanvas.width - cropW));
                newY = Math.max(0, Math.min(newY, editorCanvas.height - cropH));
                cropX = newX;
                cropY = newY;
            } else if (dragType === 'resize') {
                const newW = Math.max(20, canvasX - cropX);
                const newH = Math.max(20, canvasY - cropY);
                cropW = Math.min(newW, editorCanvas.width - cropX);
                cropH = Math.min(newH, editorCanvas.height - cropY);
            }

            gambarCropArea();
        }

        function stopDrag() {
            isDragging = false;
        }

        function touchMulaiDrag(e) {
            e.preventDefault();
            const touch = e.touches[0];
            const mouseEvent = new MouseEvent('mousedown', {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            mulaiDrag(mouseEvent);
        }

        function touchDrag(e) {
            e.preventDefault();
            const touch = e.touches[0];
            const mouseEvent = new MouseEvent('mousemove', {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            drag(mouseEvent);
        }

        function terapkanCrop() {
            if (!fotoSementara) return;

            const img = new Image();
            img.onload = function() {
                const scaleX = img.width / editorCanvas.width;
                const scaleY = img.height / editorCanvas.height;

                const cropCanvas = document.createElement('canvas');
                const cropWidth = cropW * scaleX;
                const cropHeight = cropH * scaleY;
                cropCanvas.width = cropWidth;
                cropCanvas.height = cropHeight;

                const cropCtx = cropCanvas.getContext('2d');
                cropCtx.drawImage(
                    img,
                    cropX * scaleX, cropY * scaleY, cropWidth, cropHeight,
                    0, 0, cropWidth, cropHeight
                );

                fotoSementara = cropCanvas.toDataURL('image/jpeg', 0.95);

                cropX = 0;
                cropY = 0;
                cropW = 1;
                cropH = 1;

                initEditorCanvasTanpaCrop();

                showAlert('✅ Crop berhasil diterapkan!');
            };
            img.src = fotoSementara;
        }

        function initEditorCanvasTanpaCrop() {
            editorCanvas = document.getElementById('canvas-editor-ttd');
            const container = editorCanvas.parentElement;
            const maxWidth = container.clientWidth - 4;
            const maxHeight = 350;

            const img = new Image();
            img.onload = function() {
                let width = img.width;
                let height = img.height;

                const scale = Math.min(maxWidth / width, maxHeight / height);
                const displayW = width * scale;
                const displayH = height * scale;

                editorCanvas.width = displayW;
                editorCanvas.height = displayH;

                editorCtx = editorCanvas.getContext('2d');
                editorCtx.drawImage(img, 0, 0, displayW, displayH);

                fotoSementara = editorCanvas.toDataURL('image/jpeg', 0.95);
            };
            img.src = fotoSementara;
        }

        function enhanceFoto() {
    if (!editorCanvas || !editorCtx) {
        showAlert('Silakan unggah foto terlebih dahulu!');
        return;
    }

    try {
        let imgData = editorCtx.getImageData(0, 0, editorCanvas.width, editorCanvas.height);
        let data = imgData.data;

        // ============================================
        // KONFIGURASI ENHANCE (Sesuaikan kebutuhan)
        // ============================================
        // threshold    : Semakin TINGGI = background semakin bersih putih
        //                Semakin RENDAH = tanda tangan semakin tebal
        //                REKOMENDASI: 170 - 200 (default: 185)
        //
        // brightness   : Semakin TINGGI = background semakin terang
        //                REKOMENDASI: 1.2 - 1.5 (default: 1.35)
        //
        // contrast     : Semakin TINGGI = perbedaan hitam-putih semakin tajam
        //                REKOMENDASI: 1.1 - 1.4 (default: 1.2)
        //
        // blackFloor   : Piksel di bawah nilai ini dijamin jadi HITAM PEKAT
        //                REKOMENDASI: 60 - 100 (default: 80)
        // ============================================
        
        const threshold  = 205;   // Naikkan jika background masih kotor, turunkan jika ttd hilang
        const brightness = 1.5;  // Naikkan jika background masih abu, turunkan jika ttd pudar
        const contrast   = 1.2;   // Naikkan untuk hasil lebih "tajam", turunkan untuk lebih halus
        const blackFloor = 80;    // Jarak "aman" antara hitam dan putih (menjaga detail ttd)

        for (let i = 0; i < data.length; i += 4) {
            // Konversi ke grayscale
            let gray = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];

            // Step 1: Terangkan & kontras (background jadi lebih terang)
            gray = ((gray / 255 - 0.5) * contrast + 0.5) * 255;
            gray = gray * brightness;
            gray = Math.min(255, Math.max(0, gray));

            // Step 2: Adaptive threshold (tidak hanya hitam/putih murni)
            if (gray > threshold) {
                // Background -> PUTIH BERSIH
                data[i] = 255;
                data[i + 1] = 255;
                data[i + 2] = 255;
            } else if (gray < blackFloor) {
                // Tinta tanda tangan -> HITAM PEKAT
                data[i] = 0;
                data[i + 1] = 0;
                data[i + 2] = 0;
            } else {
                // Area transisi (detail tipis ttd) -> gradasi abu
                // Ini yang menjaga tanda tangan tidak "hilang"
                const factor = (threshold - gray) / (threshold - blackFloor); // 0.0 - 1.0
                const intensity = Math.round(255 - (factor * 255));
                data[i] = intensity;
                data[i + 1] = intensity;
                data[i + 2] = intensity;
            }
        }

        editorCtx.putImageData(imgData, 0, 0);
        fotoSementara = editorCanvas.toDataURL('image/jpeg', 0.95);

        showAlert('✅ Enhance selesai! Background putih, tanda tangan tetap tajam.');
    } catch (error) {
        console.error('Gagal memproses gambar:', error);
        showAlert('Terjadi kesalahan saat memproses gambar: ' + error.message);
    }
}

        function resetEditor() {
            if (fotoAsli) {
                fotoSementara = fotoAsli;
                initEditorCanvas();
                showAlert('↺ Foto direset ke semula');
            }
        }

        function simpanDariEditor() {
            if (fotoSementara) {
                ttdData = fotoSementara;
                tampilkanPreviewTtd();
                tutupEditor();
                showAlert('✅ Tanda tangan hasil edit berhasil disimpan!');
            }
        }

        // ============================================
        // FUNGSI PROSES FOTO TTD
        // ============================================
        function prosesFotoTtd(event) {
            const file = event.target.files[0];
            if (!file) return;

            kompresFoto(file, 800, 600, 0.8)
                .then(dataUrl => {
                    bukaEditorFoto(dataUrl);
                })
                .catch(err => showAlert('Gagal memproses foto: ' + err.message));
        }

        function tampilkanPreviewTtd() {
            const container = document.getElementById('preview-ttd');
            const imgPreview = document.getElementById('img-preview-ttd');
            if (ttdData) {
                imgPreview.src = ttdData;
                container.style.display = 'block';
            } else {
                container.style.display = 'none';
            }
        }

        function hapusTandaTangan() {
            showConfirm('Apakah Anda yakin ingin menghapus tanda tangan?', function() {
                ttdData = null;
                document.getElementById('preview-ttd').style.display = 'none';
                showAlert('Tanda tangan telah dihapus.');
            });
        }

        function kompresFoto(file, maxWidth, maxHeight, quality) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = new Image();
                    img.onload = function() {
                        let width = Number(img.naturalWidth || img.width);
                        let height = Number(img.naturalHeight || img.height);

                        if (!Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0) {
                            reject(new Error('Ukuran gambar tidak valid'));
                            return;
                        }

                        if (width > height) {
                            if (width > maxWidth) {
                                height = Math.round(height * maxWidth / width);
                                width = maxWidth;
                            }
                        } else {
                            if (height > maxHeight) {
                                width = Math.round(width * maxHeight / height);
                                height = maxHeight;
                            }
                        }
                        const canvas = document.createElement('canvas');
                        canvas.width = width;
                        canvas.height = height;
                        const ctx = canvas.getContext('2d');
                        if (!ctx) {
                            reject(new Error('Canvas 2D tidak tersedia pada perangkat ini'));
                            return;
                        }

                        ctx.fillStyle = 'white';
                        ctx.fillRect(0, 0, width, height);
                        ctx.drawImage(img, 0, 0, width, height);

                        const jpegData = canvas.toDataURL('image/jpeg', quality);
                        if (!jpegData || !jpegData.startsWith('data:image/jpeg;base64,')) {
                            reject(new Error('Gagal mengubah gambar menjadi JPEG'));
                            return;
                        }

                        resolve(jpegData);
                    };
                    img.onerror = function() { reject(new Error('Gagal memuat gambar')); };
                    img.src = e.target.result;
                };
                reader.onerror = function() { reject(new Error('Gagal membaca file')); };
                reader.readAsDataURL(file);
            });
        }

        // ============================================
        // FUNGSI FOTO DOKUMENTASI
        // ============================================
        function tampilkanPilihanFoto() {
            document.getElementById('modal-pilih-foto').style.display = 'flex';
        }

        function tutupPilihanFoto() {
            document.getElementById('modal-pilih-foto').style.display = 'none';
        }

        function ambilDariKamera() {
            tutupPilihanFoto();
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.setAttribute('capture', 'environment');
            input.onchange = function(event) { prosesFileFoto(event); };
            input.click();
        }

        function ambilDariGaleri() {
            tutupPilihanFoto();
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/png, image/jpeg, image/jpg, image/webp';
            input.multiple = true;
            input.removeAttribute('capture');
            input.onchange = function(event) { prosesFileFoto(event); };
            input.click();
        }

        function prosesFileFoto(event) {
            const files = Array.from(event.target.files || []);
            if (files.length === 0) return;

            // SEMUA foto dokumentasi dikonversi menjadi JPEG terlebih dahulu.
            // Ini mencegah PNG/WebP/format lain dikirim ke jsPDF sebagai JPEG
            // dan mencegah ukuran gambar menjadi NaN/0 pada WebView/APK.
            const promises = files.map(file =>
                kompresFoto(file, 1200, 1200, 0.8)
            );

            Promise.all(promises)
                .then(results => {
                    const validResults = results.filter(dataUrl =>
                        typeof dataUrl === 'string' && dataUrl.startsWith('data:image/jpeg;base64,')
                    );

                    daftarFoto = daftarFoto.concat(validResults);
                    renderGaleriFoto();

                    if (validResults.length === results.length) {
                        showAlert(`✅ Berhasil menambahkan ${validResults.length} foto.`);
                    } else {
                        showAlert(`⚠️ ${validResults.length} dari ${results.length} foto berhasil diproses.`);
                    }
                })
                .catch(err => {
                    console.error('Gagal memproses foto dokumentasi:', err);
                    showAlert("Gagal memproses foto: " + err.message);
                });

            // Reset input agar file yang sama dapat dipilih lagi.
            event.target.value = '';
        }

        // ============================================
        // VALIDASI GAMBAR SEBELUM DIBERIKAN KE jsPDF
        // ============================================
        function getSafeImageSize(doc, imageData) {
            if (typeof imageData !== 'string' || !imageData.startsWith('data:image/')) {
                throw new Error('Data gambar tidak valid.');
            }

            const props = doc.getImageProperties(imageData);
            const width = Number(props.width);
            const height = Number(props.height);

            if (!Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0) {
                throw new Error('Ukuran gambar tidak valid.');
            }

            return { width, height };
        }

        function addSafeImage(doc, imageData, format, x, y, width, height) {
            const values = [x, y, width, height];

            if (values.some(v => !Number.isFinite(Number(v))) || width <= 0 || height <= 0) {
                throw new Error('Koordinat atau ukuran gambar tidak valid.');
            }

            doc.addImage(
                imageData,
                format,
                Number(x),
                Number(y),
                Number(width),
                Number(height)
            );
        }

        function renderGaleriFoto() {
            const container = document.getElementById('preview-foto-container');
            const grid = document.getElementById('photo-grid');
            const counter = document.getElementById('jumlah-foto');

            if (daftarFoto.length === 0) {
                container.style.display = 'none';
                grid.innerHTML = '';
                counter.textContent = '0';
                return;
            }

            container.style.display = 'block';
            counter.textContent = daftarFoto.length;

            let html = '';
            daftarFoto.forEach((foto, index) => {
                html += `
                    <div class="photo-item">
                        <img src="${foto}" alt="Foto ${index + 1}">
                        <button type="button" class="btn-remove-photo" onclick="hapusFotoSatu(${index})" title="Hapus foto ini">✕</button>
                    </div>
                `;
            });
            grid.innerHTML = html;
        }

        function hapusFotoSatu(index) {
            daftarFoto.splice(index, 1);
            renderGaleriFoto();
        }

        function hapusSemuaFoto() {
            if (daftarFoto.length === 0) return showAlert("Belum ada foto yang dilampirkan.");
            showConfirm("Apakah Anda yakin ingin menghapus SELURUH foto?", function() {
                daftarFoto = [];
                renderGaleriFoto();
            });
        }

        // ============================================
        // FUNGSI PEMBUAT DOKUMEN PDF
        // ============================================
        function buatDokumenPDF() {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' });

            const nama = document.getElementById("pemohon-nama").value.trim();
            const pekerjaan = formatOptionalVal("pemohon-pekerjaan");
            const alamat = formatOptionalVal("pemohon-alamat");
            const hp = document.getElementById("pemohon-hp").value.trim();
            const keperluan = formatOptionalVal("pemohon-keperluan");
            const jalan = formatOptionalVal("lahan-jalan");
            const desaVal = document.getElementById("lahan-desa-input").value.trim();
            const kec = formatOptionalVal("lahan-kec");
            const kab = formatOptionalVal("lahan-kab");
            const tglHariIni = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

            let labelWilayah = "Kelurahan/Desa";
            if (matchedTipe === "Desa") labelWilayah = "Desa";
            else if (matchedTipe === "Kelurahan") labelWilayah = "Kelurahan";

            const marginLeft = 20;
            const marginRight = 190;
            const textWidthLimit = 170;

            doc.setFont("helvetica", "normal");

            // --- HALAMAN 1: SURAT PERMOHONAN ---
            doc.setFontSize(10);
            doc.text(`Mamuju, ${tglHariIni}`, marginRight, 20, { align: 'right' });

            let y = 30;
            doc.text("Yth. Kepala Dinas Lingkungan Hidup dan Kehutanan", marginLeft, y); y += 5;
            doc.text("Prov. Sulawesi Barat", marginLeft, y); y += 5;
            doc.text("Di -", marginLeft, y); y += 5;
            doc.text("      Mamuju", marginLeft, y); y += 10;

            doc.setFont("helvetica", "bold");
            doc.text("Perihal: Permohonan Keterangan Status Kawasan Hutan", marginLeft, y); y += 8;

            doc.setFont("helvetica", "normal");
            doc.text("Yang bertanda tangan di bawah ini:", marginLeft, y); y += 6;

            const dataPemohon = [
                ["Nama", `: ${nama}`],
                ["Pekerjaan", `: ${pekerjaan}`],
                ["Alamat", `: ${alamat}`],
                ["No. Hp", `: ${hp}`],
                ["Untuk Keperluan", `: ${keperluan}`]
            ];

            dataPemohon.forEach(row => {
                doc.text(row[0], marginLeft + 5, y);
                doc.text(row[1], marginLeft + 50, y);
                y += 5;
            });

            y += 2;
            const narasi = `Dengan ini mengajukan Permohonan Kepada Bapak Kepala Dinas Lingkungan Hidup dan Kehutanan atas Status Lahan / Kawasan Hutan atas lokasi kami yang terletak di ${jalan}, ${labelWilayah} ${toProperCase(desaVal)}, Kecamatan ${kec}, Kabupaten ${kab}.`;

            const splitText = doc.splitTextToSize(narasi, textWidthLimit);
            doc.text(splitText, marginLeft, y);
            y += (splitText.length * 5) + 3;

            doc.text("Dengan titik koordinat lokasi yang dimohonkan sebagai berikut:", marginLeft, y);
            y += 4;

            const tableRows = daftarTitik.map((t, index) => [
                index + 1,
                `${t.lng}, ${t.lat}`
            ]);

            doc.autoTable({
                startY: y,
                head: [['No', 'Koordinat (Longitude, Latitude)']],
                body: tableRows,
                theme: 'plain',
                margin: { left: marginLeft, right: 100 },
                styles: { font: 'helvetica', fontSize: 9, cellPadding: 1 },
                headStyles: { fontStyle: 'bold' },
                columnStyles: {
                    0: { cellWidth: 10 },
                    1: { cellWidth: 80 }
                }
            });

            y = doc.lastAutoTable.finalY + 6;

            // --- PENUTUP & TANDA TANGAN ---
            doc.text("Demikian permohonan ini saya buat, atas perkenannya kami ucapkan terimakasih.", marginLeft, y);
y += 8;

const pageWidth = doc.internal.pageSize.getWidth();
const posXCenter = pageWidth - 50;

// Simpan posisi y awal untuk teks "Yang bermohon," nanti
const posY_YangBermohon = y; 

// Naikkan y sedikit untuk ancang-ancang posisi tanda tangan
y += 2; 

if (ttdData) {
    try {
        const imgProps = getSafeImageSize(doc, ttdData);
        let imgW = imgProps.width, imgH = imgProps.height;
        const maxTtdWidth = 60, maxTtdHeight = 22;
        let ttdW = imgW, ttdH = imgH;
        if (ttdW > ttdH) {
            if (ttdW > maxTtdWidth) {
                ttdH = Math.round(ttdH * maxTtdWidth / ttdW);
                ttdW = maxTtdWidth;
            }
        } else {
            if (ttdH > maxTtdHeight) {
                ttdW = Math.round(ttdW * maxTtdHeight / ttdH);
                ttdH = maxTtdHeight;
            }
        }
        const posXTTD_img = posXCenter - (ttdW / 2);
        
        // Tetap kurangi 2 agar gambar ttd naik dan overlay ke atas
        const posYTTD_img = y - 2; 
        
        // 1. CETAK GAMBAR TTD TERLEBIH DAHULU (berada di layer bawah)
        addSafeImage(doc, ttdData, 'JPEG', posXTTD_img, posYTTD_img, ttdW, ttdH);
        
        y = posYTTD_img + ttdH + 1;
    } catch (err) {
        console.warn('Gagal menambahkan tanda tangan:', err);
        y += 6;
    }
} else {
    y += 6;
}

// 2. CETAK TEKS "Yang bermohon," DI SINI (Layer Atas / Menimpa gambar)
// Menggunakan koordinat posY_YangBermohon yang sudah disimpan di awal
doc.text("Yang bermohon,", posXCenter, posY_YangBermohon, { align: 'center' });

// 3. CETAK NAMA (Paling bawah)
doc.setFont("helvetica", "bold");
doc.text(nama, posXCenter, y, { align: 'center' });

            // Catatan NB
            y += 10;
            doc.setFontSize(9);
            doc.setFont("helvetica", "bold");
            doc.text("Nb.", marginLeft, y); y += 4;
            doc.setFont("helvetica", "normal");
            doc.text("1. Melampirkan Foto copy KTP Pemohon", marginLeft, y); y += 4;
            doc.text("2. Alas Hak Berupa Fotocopy SHM/Sporadik", marginLeft, y);

            // --- HALAMAN FOTO LAMPIRAN ---
            if (daftarFoto.length > 0) {
                const pageWidth2 = doc.internal.pageSize.getWidth();
                const pageHeight = doc.internal.pageSize.getHeight();
                const margin = 20;
                const maxImgW = pageWidth2 - (margin * 2);
                const maxImgH = pageHeight - (margin * 2) - 25;

                daftarFoto.forEach((fotoBase64, index) => {
                    doc.addPage();

                    doc.setFont("helvetica", "bold");
                    doc.setFontSize(12);
                    doc.text(`LAMPIRAN ${index + 1}`, pageWidth2 / 2, 20, { align: 'center' });
                    doc.setFont("helvetica", "normal");
                    doc.setFontSize(10);
                    doc.text(`Pemohon: ${nama}`, pageWidth2 / 2, 26, { align: 'center' });
                    doc.setLineWidth(0.2);
                    doc.line(margin, 29, pageWidth2 - margin, 29);

                    const imgProperties = getSafeImageSize(doc, fotoBase64);
                    const imgW = imgProperties.width;
                    const imgH = imgProperties.height;

                    const ratio = Math.min(maxImgW / imgW, maxImgH / imgH);

                    if (!Number.isFinite(ratio) || ratio <= 0) {
                        throw new Error(`Ukuran foto lampiran ${index + 1} tidak valid.`);
                    }

                    const finalW = imgW * ratio;
                    const finalH = imgH * ratio;

                    const posX = (pageWidth2 - finalW) / 2;
                    const posY = 35 + ((maxImgH - finalH) / 2);

                    addSafeImage(doc, fotoBase64, 'JPEG', posX, posY, finalW, finalH);
                    doc.setDrawColor(200, 200, 200);
                    doc.rect(posX, posY, finalW, finalH);

                    doc.setFontSize(9);
                    doc.setTextColor(100);
                    doc.text(`Halaman ${index + 2}`, pageWidth2 / 2, pageHeight - 10, { align: 'center' });
                    doc.setTextColor(0);
                });
            }

            return doc;
        }

        // ============================================
        // FUNGSI PROSES SURAT (LIHAT & CETAK)
        // ============================================
        function prosesSurat(mode) {
            try {
                if (daftarTitik.length === 0) {
                    return showAlert("Isi minimal satu titik koordinat!");
                }

                const nama = document.getElementById("pemohon-nama").value.trim();
                const hp = document.getElementById("pemohon-hp").value.trim();
                const desaVal = document.getElementById("lahan-desa-input").value.trim();

                if (!nama || !hp || !desaVal) {
                    return showAlert("Harap lengkapi field mandatory (*): Nama, No HP, dan Desa/Kelurahan!");
                }

                const doc = buatDokumenPDF();

                if (mode === 'preview') {
                    const pdfBlob = doc.output('blob');
                    const blobUrl = URL.createObjectURL(pdfBlob);
                    window.open(blobUrl, '_blank');
                    setTimeout(() => URL.revokeObjectURL(blobUrl), 10000);
                } else if (mode === 'cetak') {
                    const fileName = `Surat_Permohonan_${nama.replace(/[^a-zA-Z0-9]/g, "_")}.pdf`;
                    doc.save(fileName);
                }

            } catch (err) {
                showAlert("Gagal memproses PDF: " + err.message);
            }
        }

        // ============================================
        // FUNGSI LAINNYA
        // ============================================
        function simpanTxt() {
            if (daftarTitik.length === 0) {
                return showAlert("Belum ada titik tersimpan untuk disimpan ke file TXT!");
            }

            const nama = document.getElementById("pemohon-nama").value.trim();
            const pekerjaan = document.getElementById("pemohon-pekerjaan").value.trim();
            const alamat = document.getElementById("pemohon-alamat").value.trim();
            const hp = document.getElementById("pemohon-hp").value.trim();
            const keperluan = document.getElementById("pemohon-keperluan").value.trim();

            const jalan = document.getElementById("lahan-jalan").value.trim();
            const desa = document.getElementById("lahan-desa-input").value.trim();
            const kec = document.getElementById("lahan-kec").value.trim();
            const kab = document.getElementById("lahan-kab").value.trim();

            let isiTxt = "========================================\n";
            isiTxt += "       DATA PERMOHONAN & KOORDINAT      \n";
            isiTxt += "========================================\n\n";

            isiTxt += "[DATA PEMOHON]\n";
            isiTxt += `Nama Lengkap : ${nama !== "" ? nama : "-"}\n`;
            isiTxt += `Pekerjaan    : ${pekerjaan !== "" ? pekerjaan : "-"}\n`;
            isiTxt += `Alamat KTP   : ${alamat !== "" ? alamat : "-"}\n`;
            isiTxt += `No. HP/WA    : ${hp !== "" ? hp : "-"}\n`;
            isiTxt += `Keperluan    : ${keperluan !== "" ? keperluan : "-"}\n\n`;

            isiTxt += "[LOKASI LAHAN]\n";
            isiTxt += `Jalan/Dusun  : ${jalan !== "" ? jalan : "-"}\n`;
            isiTxt += `Desa/Kel.    : ${desa !== "" ? toProperCase(desa) : "-"}\n`;
            isiTxt += `Kecamatan    : ${kec !== "" ? kec : "-"}\n`;
            isiTxt += `Kab/Prov     : ${kab !== "" ? kab : "-"}\n\n`;

            const tglHariIni = new Date().toLocaleDateString('id-ID');
            isiTxt += "----------------------------------------\n";
            isiTxt += "DAFTAR TITIK KOORDINAT TERCEK\n";
            isiTxt += "----------------------------------------\n";
            daftarTitik.forEach((t, i) => {
                isiTxt += `${i + 1}. ${t.nama}\n`;
                isiTxt += `   Koordinat : ${t.lng}, ${t.lat}\n`;
                isiTxt += `   Akurasi   : ±${t.acc}m\n`;
                isiTxt += `   Waktu     : ${t.waktu}\n`;
                isiTxt += `   Tanggal   : ${tglHariIni}\n\n`;
            });

            const namaBersih = nama !== "" ? nama.replace(/[^a-zA-Z0-9]/g, "_") : "Tanpa_Nama";
            const tgl = new Date().toISOString().split('T')[0];
            const namaFile = `Koordinat_${namaBersih}_${tgl}.txt`;

            try {
                const blob = new Blob([isiTxt], { type: "text/plain;charset=utf-8" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = namaFile;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            } catch (err) {
                showAlert("Gagal menyimpan file TXT: " + err.message);
            }
        }

        function bacaFileTxt(event) {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function(e) {
                const teks = e.target.result;

                try {
                    const ambilNilai = (label) => {
                        const regex = new RegExp(`${label}\\s*:\\s*(.*)`, 'i');
                        const match = teks.match(regex);
                        return match && match[1] && match[1].trim() !== '-' ? match[1].trim() : '';
                    };

                    document.getElementById("pemohon-nama").value = ambilNilai("Nama Lengkap");
                    document.getElementById("pemohon-pekerjaan").value = ambilNilai("Pekerjaan");
                    document.getElementById("pemohon-alamat").value = ambilNilai("Alamat KTP");
                    document.getElementById("pemohon-hp").value = ambilNilai("No. HP/WA");
                    document.getElementById("pemohon-keperluan").value = ambilNilai("Keperluan");

                    document.getElementById("lahan-jalan").value = ambilNilai("Jalan/Dusun");
                    document.getElementById("lahan-desa-input").value = ambilNilai("Desa/Kel.");
                    document.getElementById("lahan-kec").value = ambilNilai("Kecamatan");
                    document.getElementById("lahan-kab").value = ambilNilai("Kab/Prov");

                    daftarTitik = [];

                    const regexTitik = /(\d+)\.\s*(.*?)\n\s*Koordinat\s*:\s*([\d.-]+),\s*([\d.-]+)\n\s*Akurasi\s*:\s*±?(\d+)m?\n\s*Waktu\s*:\s*(.*?)(?:\n\s*Tanggal\s*:\s*.*?)?(?=\n\n|\n*$)/g;
                    let match;

                    while ((match = regexTitik.exec(teks)) !== null) {
                        daftarTitik.push({
                            nama: match[2].trim(),
                            lng: parseFloat(match[3]),
                            lat: parseFloat(match[4]),
                            acc: parseInt(match[5]),
                            waktu: match[6].trim()
                        });
                    }

                    updateTampilanLog();
                    showAlert("File TXT berhasil dimuat ke dalam form!");

                } catch (err) {
                    showAlert("Format file TXT tidak sesuai atau rusak!");
                }

                event.target.value = '';
            };

            reader.readAsText(file);
        }

        function toggleForm() {
            const formBody = document.getElementById('formBody');
            const toggleIcon = document.getElementById('toggleIcon');

            formBody.classList.toggle('collapsed');
            toggleIcon.classList.toggle('rotated');

            const isCollapsed = formBody.classList.contains('collapsed');
            localStorage.setItem('formCollapsed', isCollapsed);
        }

        function loadFormState() {
            const formBody = document.getElementById('formBody');
            const toggleIcon = document.getElementById('toggleIcon');

            const savedState = localStorage.getItem('formCollapsed');

            if (savedState === null) {
                formBody.classList.add('collapsed');
                toggleIcon.classList.add('rotated');
                localStorage.setItem('formCollapsed', 'true');
            } else if (savedState === 'true') {
                formBody.classList.add('collapsed');
                toggleIcon.classList.add('rotated');
            }
        }

        // ============================================
        // SERVICE WORKER REGISTRATION
        // ============================================
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
                navigator.serviceWorker.register('./sw.js')
                    .then(function(reg) {
                        console.log('[SW] Registered successfully. Scope:', reg.scope);
                    })
                    .catch(function(err) {
                        console.warn('[SW] Registration failed:', err);
                    });
            });
        }

// ============================================
    // LOAD DATA DARI LOCALSTORAGE
    // ============================================
    
    function loadDataFromLocalStorage() {
        try {
            const saved = localStorage.getItem('daftarTitik');
            if (saved) {
                daftarTitik = JSON.parse(saved);
                updateTampilanLog();  // ✅ Gunakan nama fungsi yang benar
                console.log('✅ Data dimuat dari localStorage');
            }
        } catch (error) {
            console.error('Error loading data:', error);
        }
    }
    
    // ============================================
    // AUTO-SAVE DATA
    // ============================================
    
    function autoSaveData() {
        localStorage.setItem('daftarTitik', JSON.stringify(daftarTitik));
    }
    
    // ============================================
    // INIT SAAT PAGE LOAD
    // ============================================
    
    window.addEventListener('load', function() {
        loadDataFromLocalStorage();
        startGPS();
        loadFormState();
        
        // Auto-save setiap 10 detik
        setInterval(autoSaveData, 10000);
    });
    
    // ============================================
    // DISABLE PULL-TO-REFRESH
    // ============================================
    
    //document.addEventListener('touchmove', function(e) {
        //if (window.scrollY === 0) {
            //e.preventDefault();
        //}
    //}, { passive: false });
    
    // ============================================
    // DISABLE F5 REFRESH
    // ============================================
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'F5' || ((e.ctrlKey || e.metaKey) && e.key === 'r')) {
            e.preventDefault();
        }
    });

/* ============================================================
   INDEXEDDB — LAPISAN DATABASE mGPS Point
   ============================================================ */

const DB_NAMA = 'mGPS_Point';
const DB_VERSI = 1;
const STORE_SURAT = 'surat';
const STORE_TTD = 'ttd';

let _db = null;

/**
 * Buka (atau buat) database IndexedDB.
 * Dipanggil sekali saat aplikasi mulai; hasilnya disimpan di _db.
 */
function bukaDatabase() {
    return new Promise((resolve, reject) => {
        if (_db) return resolve(_db);

        const permintaan = indexedDB.open(DB_NAMA, DB_VERSI);

        permintaan.onupgradeneeded = (event) => {
            const db = event.target.result;

            // Store "surat" — key: id_surat
            if (!db.objectStoreNames.contains(STORE_SURAT)) {
                db.createObjectStore(STORE_SURAT, { keyPath: 'id_surat' });
            }

            // Store "ttd" — key: ttd_id
            if (!db.objectStoreNames.contains(STORE_TTD)) {
                db.createObjectStore(STORE_TTD, { keyPath: 'ttd_id' });
            }
        };

        permintaan.onsuccess = (event) => {
            _db = event.target.result;
            resolve(_db);
        };

        permintaan.onerror = (event) => {
            reject(event.target.error);
        };
    });
}

/**
 * Helper umum: jalankan transaksi di satu store.
 * @param {string} namaStore
 * @param {'readonly'|'readwrite'} mode
 * @param {(store) => void} aksi
 */
function denganStore(namaStore, mode, aksi) {
    return bukaDatabase().then((db) => {
        return new Promise((resolve, reject) => {
            const tx = db.transaction(namaStore, mode);
            const store = tx.objectStore(namaStore);
            let hasil;

            tx.oncomplete = () => resolve(hasil);
            tx.onerror = () => reject(tx.error);
            tx.onabort = () => reject(tx.error);

            // Bungkus store + resolver supaya aksi bisa mengembalikan nilai
            aksi(store, (nilai) => { hasil = nilai; });
        });
    });
}

/* ---------- Operasi dasar: SURAT ---------- */

function dbAmbilSemuaSurat() {
    return denganStore(STORE_SURAT, 'readonly', (store, setHasil) => {
        const req = store.getAll();
        req.onsuccess = () => setHasil(req.result || []);
    });
}

function dbAmbilSurat(idSurat) {
    return denganStore(STORE_SURAT, 'readonly', (store, setHasil) => {
        const req = store.get(idSurat);
        req.onsuccess = () => setHasil(req.result || null);
    });
}

function dbSimpanSurat(recordSurat) {
    return denganStore(STORE_SURAT, 'readwrite', (store) => {
        store.put(recordSurat);
    });
}

function dbHapusSurat(idSurat) {
    return denganStore(STORE_SURAT, 'readwrite', (store) => {
        store.delete(idSurat);
    });
}

function dbHapusSemuaSurat() {
    return denganStore(STORE_SURAT, 'readwrite', (store) => {
        store.clear();
    });
}

/* ---------- Operasi dasar: TTD ---------- */

function dbAmbilTtd(ttdId) {
    return denganStore(STORE_TTD, 'readonly', (store, setHasil) => {
        const req = store.get(ttdId);
        req.onsuccess = () => setHasil(req.result || null);
    });
}

function dbSimpanTtd(recordTtd) {
    return denganStore(STORE_TTD, 'readwrite', (store) => {
        store.put(recordTtd);
    });
}

function dbHapusTtd(ttdId) {
    return denganStore(STORE_TTD, 'readwrite', (store) => {
        store.delete(ttdId);
    });
}

function dbHapusSemuaTtd() {
    return denganStore(STORE_TTD, 'readwrite', (store) => {
        store.clear();
    });
}

/* ---------- Helper: ID unik ---------- */

/**
 * ID surat: SRT-YYYYMMDD-NNN
 * NNN dihitung dari jumlah surat yang ada di tanggal itu + 1.
 */
function buatIdSurat() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    const prefix = `SRT-${y}${m}${d}-`;

    return dbAmbilSemuaSurat().then((semua) => {
        let urut = 1;
        semua.forEach((s) => {
            if (s.id_surat && s.id_surat.startsWith(prefix)) {
                const angka = parseInt(s.id_surat.slice(prefix.length), 10);
                if (!isNaN(angka) && angka >= urut) urut = angka + 1;
            }
        });
        return prefix + String(urut).padStart(3, '0');
    });
}

/**
 * ID TTD: TTD-XXXXXX (6 karakter acak huruf+angka besar)
 */
function buatIdTtd() {
    const karakter = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // hindari 0/O, 1/I
    let hasil = 'TTD-';
    for (let i = 0; i < 6; i++) {
        hasil += karakter.charAt(Math.floor(Math.random() * karakter.length));
    }
    return hasil;
}
/* ============================================================
   SIMPAN KE DAFTAR — dari form ke IndexedDB
   ============================================================ */

function ambilNilaiForm() {
    return {
        nama_pemohon: (document.getElementById('pemohon-nama')?.value || '').trim(),
        pekerjaan:    (document.getElementById('pemohon-pekerjaan')?.value || '').trim(),
        alamat_ktp:   (document.getElementById('pemohon-alamat')?.value || '').trim(),
        no_hp:        (document.getElementById('pemohon-hp')?.value || '').trim(),
        keperluan:    (document.getElementById('pemohon-keperluan')?.value || '').trim(),
        jalan_dusun:  (document.getElementById('lahan-jalan')?.value || '').trim(),
        desa:         (document.getElementById('lahan-desa-input')?.value || '').trim(),
        kecamatan:    (document.getElementById('lahan-kec')?.value || '').trim(),
        kabupaten:    (document.getElementById('lahan-kab')?.value || '').trim()
    };
}

function validasiForm(nilai) {
    if (!nilai.nama_pemohon) return 'Nama pemohon wajib diisi.';
    if (!nilai.no_hp)        return 'No. HP wajib diisi.';
    if (!nilai.desa)         return 'Desa/Kelurahan wajib diisi.';
    if (!daftarTitik || daftarTitik.length === 0) return 'Minimal satu titik GPS harus diambil.';
    return null;
}

function ubahTitikKeSkema() {
    return daftarTitik.map((t, i) => ({
        no_titik: i + 1,
        longitude: parseFloat(t.lng),
        latitude:  parseFloat(t.lat),
        akurasi:   Number(t.acc) || 0,
        waktu_ambil: gabungTanggalJam(t.waktu)
    }));
}

function gabungTanggalJam(jamLokal) {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}T${jamLokal || '00:00:00'}`;
}

function simpanTtdKeDb() {
    if (!ttdData) return Promise.resolve(null);

    const ttdId = buatIdTtd();
    const recordTtd = {
        ttd_id: ttdId,
        gambar: ttdData,
        tanggal_dibuat: new Date().toISOString(),
        ukuran_byte: Math.round((ttdData.length * 3) / 4)
    };

    return dbSimpanTtd(recordTtd).then(() => ttdId);
}

function simpanKeDaftar() {
    const nilai = ambilNilaiForm();
    const pesanError = validasiForm(nilai);
    if (pesanError) {
        showAlert(pesanError);
        return;
    }

    simpanTtdKeDb().then((ttdId) => {
        return buatIdSurat().then((idSurat) => {
            const recordSurat = {
                id_surat: idSurat,
                tanggal_dibuat: new Date().toISOString(),
                nama_pemohon: nilai.nama_pemohon,
                pekerjaan: nilai.pekerjaan,
                no_hp: nilai.no_hp,
                alamat_ktp: nilai.alamat_ktp,
                keperluan: nilai.keperluan,
                jalan_dusun: nilai.jalan_dusun,
                desa: nilai.desa,
                kecamatan: nilai.kecamatan,
                kabupaten: nilai.kabupaten,
                ttd_id: ttdId || '',
                titik: ubahTitikKeSkema()
            };
            return dbSimpanSurat(recordSurat);
        });
    }).then(() => {
        showAlert('✅ Data berhasil disimpan ke daftar.');
    }).catch((err) => {
        console.error('Gagal menyimpan ke daftar:', err);
        showAlert('Gagal menyimpan data: ' + err.message);
    });
}
/* ============================================================
   POPUP DATA TERSIMPAN
   ============================================================ */

let _daftarSuratCache = []; // cache hasil getAll() untuk filter & render

function bukaPopupData() {
    const modal = document.getElementById('modal-data-tersimpan');
    if (modal) modal.style.display = 'flex';
    muatDaftarData();
}

function tutupPopupData() {
    const modal = document.getElementById('modal-data-tersimpan');
    if (modal) modal.style.display = 'none';
}

function muatDaftarData() {
    dbAmbilSemuaSurat().then((semua) => {
        // Urutkan: terbaru di atas
        semua.sort((a, b) => (b.tanggal_dibuat || '').localeCompare(a.tanggal_dibuat || ''));
        _daftarSuratCache = semua;
        renderDaftarData(semua);
    }).catch((err) => {
    console.error('Gagal memuat daftar:', err);
    showAlert('Gagal memuat data tersimpan.');
});
}

function renderDaftarData(daftar) {
    const wadah = document.getElementById('daftar-data');
    const kosong = document.getElementById('daftar-kosong');
    const kontrol = document.getElementById('daftar-kontrol');
    const cbInduk = document.getElementById('cb-pilih-semua');

    if (!wadah) return;

    // Reset checkbox induk
    if (cbInduk) {
        cbInduk.checked = false;
        cbInduk.indeterminate = false;
    }

    if (!daftar || daftar.length === 0) {
        wadah.innerHTML = '';
        if (kosong) kosong.style.display = 'block';
        if (kontrol) kontrol.style.display = 'none';
        return;
    }

    if (kosong) kosong.style.display = 'none';
    if (kontrol) kontrol.style.display = 'flex';

    wadah.innerHTML = daftar.map((s) => {
        const nama = escapeHtml(s.nama_pemohon || '(tanpa nama)');
        const tgl = formatTanggalSingkat(s.tanggal_dibuat);
        const desa = escapeHtml(s.desa || '-');
        const jmlTitik = (s.titik && s.titik.length) ? s.titik.length : 0;

        return `
            <div class="item-data" data-id="${escapeHtml(s.id_surat)}">
                <input type="checkbox" class="item-checkbox"
                       onchange="perbaruiStatusPilihSemua()"
                       onclick="event.stopPropagation();">
                <div class="item-isi">
                    <div class="item-nama">${nama}</div>
                    <div class="item-meta">
                        ${tgl}<span class="pemisah">·</span>${desa}
                    </div>
                </div>
                <div class="item-titik">${jmlTitik} titik</div>
            </div>
        `;
    }).join('');

    // Pasang handler klik pada tiap baris (buka surat)
    wadah.querySelectorAll('.item-data').forEach((el) => {
        el.addEventListener('click', (ev) => {
            // Abaikan klik pada checkbox
            if (ev.target.classList.contains('item-checkbox')) return;
            const id = el.getAttribute('data-id');
            bukaSuratKeForm(id);
        });
    });
}

function filterDaftarData() {
    const input = document.getElementById('cari-data-input');
    const kata = (input ? input.value : '').trim().toLowerCase();

    if (!kata) {
        renderDaftarData(_daftarSuratCache);
        return;
    }

    const hasil = _daftarSuratCache.filter((s) => {
        const nama = (s.nama_pemohon || '').toLowerCase();
        const desa = (s.desa || '').toLowerCase();
        return nama.includes(kata) || desa.includes(kata);
    });

    renderDaftarData(hasil);
}

function togglePilihSemua(checked) {
    document.querySelectorAll('#daftar-data .item-checkbox').forEach((cb) => {
        cb.checked = checked;
    });
}

function perbaruiStatusPilihSemua() {
    const semua = document.querySelectorAll('#daftar-data .item-checkbox');
    const dipilih = document.querySelectorAll('#daftar-data .item-checkbox:checked');
    const induk = document.getElementById('cb-pilih-semua');
    if (!induk) return;

    if (dipilih.length === 0) {
        induk.checked = false;
        induk.indeterminate = false;
    } else if (dipilih.length === semua.length) {
        induk.checked = true;
        induk.indeterminate = false;
    } else {
        induk.checked = false;
        induk.indeterminate = true;
    }
}

/** Ambil daftar ID surat yang dicentang */
function ambilIdTerpilih() {
    const hasil = [];
    document.querySelectorAll('#daftar-data .item-checkbox:checked').forEach((cb) => {
        const baris = cb.closest('.item-data');
        if (baris) hasil.push(baris.getAttribute('data-id'));
    });
    return hasil;
}

/* ============================================================
   HELPER UMUM
   ============================================================ */

function escapeHtml(teks) {
    if (teks === null || teks === undefined) return '';
    return String(teks)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function formatTanggalSingkat(iso) {
    if (!iso) return '-';
    try {
        const d = new Date(iso);
        if (isNaN(d.getTime())) return iso;
        const bulan = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
        return `${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`;
    } catch (e) {
        return iso;
    }
}

/**
 * Panggil saat aplikasi mulai — buka database sekali.
 * Cek juga apakah browser mendukung IndexedDB.
 */
function inisialisasiDatabase() {
    if (!window.indexedDB) {
        alert('Browser Anda tidak mendukung IndexedDB. Aplikasi tidak dapat menyimpan data.');
        return;
    }
    bukaDatabase()
        .then(() => console.log('IndexedDB siap:', DB_NAMA))
        .catch((err) => console.error('Gagal membuka IndexedDB:', err));
}

// Jalankan saat halaman siap
document.addEventListener('DOMContentLoaded', inisialisasiDatabase);

/* ============================================================
   SIMPAN KE DAFTAR — dari form ke IndexedDB
   ============================================================ */

function ambilNilaiForm() {
    return {
        nama_pemohon: (document.getElementById('pemohon-nama')?.value || '').trim(),
        pekerjaan:    (document.getElementById('pemohon-pekerjaan')?.value || '').trim(),
        alamat_ktp:   (document.getElementById('pemohon-alamat')?.value || '').trim(),
        no_hp:        (document.getElementById('pemohon-hp')?.value || '').trim(),
        keperluan:    (document.getElementById('pemohon-keperluan')?.value || '').trim(),
        jalan_dusun:  (document.getElementById('lahan-jalan')?.value || '').trim(),
        desa:         (document.getElementById('lahan-desa-input')?.value || '').trim(),
        kecamatan:    (document.getElementById('lahan-kec')?.value || '').trim(),
        kabupaten:    (document.getElementById('lahan-kab')?.value || '').trim()
    };
}

function validasiForm(nilai) {
    if (!nilai.nama_pemohon) return 'Nama pemohon wajib diisi.';
    if (!nilai.no_hp)        return 'No. HP wajib diisi.';
    if (!nilai.desa)         return 'Desa/Kelurahan wajib diisi.';
    if (!daftarTitik || daftarTitik.length === 0) return 'Minimal satu titik GPS harus diambil.';
    return null;
}

/**
 * Ambil titik dari `daftarTitik` (format lama) → ubah ke format skema IndexedDB.
 * Konversi string → angka untuk koordinat.
 */
function ubahTitikKeSkema() {
    return daftarTitik.map((t, i) => ({
        no_titik: i + 1,
        longitude: parseFloat(t.lng),
        latitude:  parseFloat(t.lat),
        akurasi:   Number(t.acc) || 0,
        waktu_ambil: gabungTanggalJam(t.waktu)
    }));
}

/**
 * "10:35:00" → "2026-09-20T10:35:00"
 * Pakai tanggal hari ini (karena titik diambil saat ini juga).
 */
function gabungTanggalJam(jamLokal) {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}T${jamLokal || '00:00:00'}`;
}

/**
 * Simpan TTD ke store "ttd", kembalikan ttd_id.
 * Kalau ttdData kosong, kembalikan null.
 */
function simpanTtdKeDb() {
    if (!ttdData) return Promise.resolve(null);

    const ttdId = buatIdTtd();
    const recordTtd = {
        ttd_id: ttdId,
        gambar: ttdData,                    // string data URL JPEG
        tanggal_dibuat: new Date().toISOString(),
        ukuran_byte: Math.round((ttdData.length * 3) / 4)  // estimasi dari base64
    };

    return dbSimpanTtd(recordTtd).then(() => ttdId);
}

/**
 * Fungsi utama: simpan data form + titik + TTD ke IndexedDB.
 * Dipanggil dari tombol "💾 Simpan ke Daftar".
 */
function simpanKeDaftar() {
    const nilai = ambilNilaiForm();
    const pesanError = validasiForm(nilai);
    if (pesanError) {
        showAlert(pesanError);
        return;
    }

    // 1) Simpan TTD dulu (kalau ada), dapatkan ttd_id
    simpanTtdKeDb().then((ttdId) => {
        // 2) Buat ID surat
        return buatIdSurat().then((idSurat) => {
            const recordSurat = {
                id_surat: idSurat,
                tanggal_dibuat: new Date().toISOString(),
                nama_pemohon: nilai.nama_pemohon,
                pekerjaan: nilai.pekerjaan,
                no_hp: nilai.no_hp,
                alamat_ktp: nilai.alamat_ktp,
                keperluan: nilai.keperluan,
                jalan_dusun: nilai.jalan_dusun,
                desa: nilai.desa,
                kecamatan: nilai.kecamatan,
                kabupaten: nilai.kabupaten,
                ttd_id: ttdId || '',
                titik: ubahTitikKeSkema()
            };

            // 3) Simpan surat
            return dbSimpanSurat(recordSurat);
        });
    }).then(() => {
        showAlert('✅ Data berhasil disimpan ke daftar.');
    }).catch((err) => {
        console.error('Gagal menyimpan ke daftar:', err);
        showAlert('Gagal menyimpan data: ' + err.message);
    });
}
/* ============================================================
   BUKA SURAT DARI DAFTAR → muat ke form
   ============================================================ */

/**
 * Dipanggil saat user klik baris di popup "Data Tersimpan".
 * @param {string} idSurat
 */
function bukaSuratKeForm(idSurat) {
    if (!idSurat) return;

    dbAmbilSurat(idSurat).then((surat) => {
        if (!surat) {
            showAlert('Data tidak ditemukan.');
            return;
        }

        // 1) Isi field form
        isiFormDariSurat(surat);

        // 2) Muat titik GPS ke daftarTitik (konversi angka → string)
        daftarTitik = (surat.titik || []).map((t) => ({
            nama: `Titik ${t.no_titik}`,
            lat: Number(t.latitude).toFixed(6),
            lng: Number(t.longitude).toFixed(6),
            acc: t.akurasi,
            waktu: ambilJamDariIso(t.waktu_ambil)
        }));
        updateTampilanLog();

        // 3) Muat TTD (kalau ada)
        if (surat.ttd_id) {
            muatTtdKePreview(surat.ttd_id);
        } else {
            // Tidak ada TTD — pastikan preview kosong
            ttdData = null;
            const preview = document.getElementById('preview-ttd');
            if (preview) preview.style.display = 'none';
        }

        // 4) Set matchedTipe untuk label Desa/Kelurahan di PDF
        perbaruiMatchedTipe(surat.desa);

        // 5) Tutup popup
        tutupPopupData();

        // 6) Scroll ke form supaya user langsung lihat
        const formView = document.getElementById('form-view');
        if (formView) {
            formView.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        showAlert(`✅ Data "${surat.nama_pemohon}" berhasil dimuat.`);
    }).catch((err) => {
        console.error('Gagal membuka surat:', err);
        showAlert('Gagal membuka data: ' + err.message);
    });
}

/**
 * Isi field form dari record surat.
 */
function isiFormDariSurat(surat) {
    setNilai('pemohon-nama',       surat.nama_pemohon);
    setNilai('pemohon-pekerjaan',  surat.pekerjaan);
    setNilai('pemohon-alamat',     surat.alamat_ktp);
    setNilai('pemohon-hp',         surat.no_hp);
    setNilai('pemohon-keperluan',  surat.keperluan);
    setNilai('lahan-jalan',        surat.jalan_dusun);
    setNilai('lahan-desa-input',   surat.desa);
    setNilai('lahan-kec',          surat.kecamatan);
    setNilai('lahan-kab',          surat.kabupaten);
}

function setNilai(id, nilai) {
    const el = document.getElementById(id);
    if (el) el.value = nilai || '';
}

/**
 * "2026-09-20T10:35:00" → "10:35:00"
 */
function ambilJamDariIso(iso) {
    if (!iso || typeof iso !== 'string') return '';
    const bagian = iso.split('T');
    return bagian[1] || '';
}

/**
 * Tentukan tipe wilayah (Desa/Kelurahan) dari nama desa.
 * Dipakai untuk label di PDF.
 */
function perbaruiMatchedTipe(namaDesa) {
    if (!namaDesa) {
        matchedTipe = null;
        return;
    }
    const cari = namaDesa.trim().toLowerCase();
    const found = databaseWilayah.find((item) => item.nama.toLowerCase() === cari);
    matchedTipe = found ? found.tipe : null;
}

/**
 * Ambil TTD dari store "ttd" berdasarkan ttd_id, tampilkan di preview.
 */
function muatTtdKePreview(ttdId) {
    dbAmbilTtd(ttdId).then((record) => {
        const preview = document.getElementById('preview-ttd');
        const imgPreview = document.getElementById('img-preview-ttd');

        if (record && record.gambar) {
            ttdData = record.gambar;
            if (imgPreview) imgPreview.src = record.gambar;
            if (preview) preview.style.display = 'block';
        } else {
            // TTD_ID ada, tapi gambarnya tidak ada di store
            // (mungkin karena IndexedDB dihapus lalu restore dari XLS)
            ttdData = null;
            if (preview) preview.style.display = 'none';
            console.warn('TTD_ID ditemukan tapi gambar tidak ada:', ttdId);
        }
    }).catch((err) => {
        console.error('Gagal memuat TTD:', err);
        ttdData = null;
        const preview = document.getElementById('preview-ttd');
        if (preview) preview.style.display = 'none';
    });
}
/* ============================================================
   MULAI SURAT BARU — kosongkan form, titik, dan TTD
   ============================================================ */

function mulaiSuratBaru() {
    showConfirm('Kosongkan form dan mulai data baru?', function () {
        // 1) Kosongkan field form
        setNilai('pemohon-nama', '');
        setNilai('pemohon-pekerjaan', '');
        setNilai('pemohon-alamat', '');
        setNilai('pemohon-hp', '');
        setNilai('pemohon-keperluan', '');
        setNilai('lahan-jalan', '');
        setNilai('lahan-desa-input', '');
        setNilai('lahan-kec', '');
        setNilai('lahan-kab', 'Mamuju, Provinsi Sulawesi Barat');

        // 2) Kosongkan titik
        daftarTitik = [];
        localStorage.removeItem('daftarTitik');
        updateTampilanLog();

        // 3) Kosongkan TTD
        ttdData = null;
        const previewTtd = document.getElementById('preview-ttd');
        if (previewTtd) previewTtd.style.display = 'none';

        // 4) Reset matchedTipe
        matchedTipe = null;

        // 5) Kosongkan foto dokumentasi
        daftarFoto = [];
        renderGaleriFoto();

        showAlert('✅ Form dikosongkan. Siap isi data baru.');
    });
}
