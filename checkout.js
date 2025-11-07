const bukuSelect = document.getElementById("bukuSelect");
const form = document.getElementById("formPesanan");

// isi pilihan buku dari data.js
dataKatalogBuku.forEach(b => {
  const opt = document.createElement("option");
  opt.value = b.judul;
  opt.textContent = `${b.judul} - Rp${b.harga.toLocaleString()}`;
  bukuSelect.appendChild(opt);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const alamat = document.getElementById("alamat").value;
  const buku = bukuSelect.value;
  const jumlah = parseInt(document.getElementById("jumlah").value);
  const metode = document.getElementById("metode").value;

  if (!nama || !alamat || !buku || !jumlah) {
    alert("Harap isi semua data dengan lengkap!");
    return;
  }

  const hargaBuku = dataKatalogBuku.find(b => b.judul === buku)?.harga || 0;
  const total = hargaBuku * jumlah;

  const pesanan = {
    nama, alamat, buku, jumlah, metode, total, tanggal: new Date().toLocaleString()
  };

  // ambil data lama dari localStorage
  const riwayat = JSON.parse(localStorage.getItem("riwayatTransaksi")) || [];
  riwayat.push(pesanan);
  localStorage.setItem("riwayatTransaksi", JSON.stringify(riwayat));

  alert(`✅ Pesanan berhasil dibuat!\n\nNama: ${nama}\nBuku: ${buku}\nJumlah: ${jumlah}\nTotal: Rp ${total.toLocaleString()}`);
  form.reset();
});
