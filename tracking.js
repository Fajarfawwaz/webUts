function cari() {
  const noOrder = document.getElementById("noOrder").value.trim();
  const hasil = document.getElementById("hasilTracking");

  if (!noOrder) {
    alert("Masukkan nomor delivery order terlebih dahulu!");
    return;
  }

  hasil.innerHTML = `
    <h3>Detail Pengiriman</h3>
    <p><b>Nomor Order:</b> ${noOrder}</p>
    <p><b>Nama Pemesan:</b> Budi Santoso</p>
    <p><b>Ekspedisi:</b> JNE Reguler</p>
    <p><b>Tanggal Kirim:</b> 5 November 2025</p>
    <p><b>Jenis Paket:</b> Buku Cetak</p>
    <p><b>Total Pembayaran:</b> Rp 185.000</p>

    <div class="progress">
      <div class="progress-bar"></div>
    </div>

    <p>Status: <b>Sedang Dikirim 🚚</b></p>
  `;

  const bar = document.querySelector(".progress-bar");
  bar.style.width = "70%";
}

const style = document.createElement("style");
style.textContent = `
  .progress {
    background: #eee;
    border-radius: 10px;
    margin-top: 10px;
    height: 20px;
    width: 100%;
  }
  .progress-bar {
    background: linear-gradient(135deg, #4f46e5, #7c3aed);
    height: 100%;
    width: 0%;
    border-radius: 10px;
    transition: width 1s;
  }
`;
document.head.appendChild(style);
